import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function setupSiteInteractions() {
  const cleanups = [];
  const root = document.documentElement;
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  // ── 1. BUTTERY SMOOTH SCROLLING WITH LENIS ──
  let lenis = null;

  if (!reduceMotion && typeof window !== 'undefined') {
    lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
      infinite: false,
    });

    window.__lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    cleanups.push(() => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      window.__lenis = null;
    });
  }

  // ── 2. SCROLL PROGRESS BAR & ACTIVE NAV ──
  const progressEl = document.getElementById('progress');
  const navEl = document.getElementById('nav');

  const onScroll = () => {
    const scrollY = window.scrollY;
    if (navEl) {
      navEl.classList.toggle('scrolled', scrollY > 20);
    }

    if (progressEl) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;
      progressEl.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  cleanups.push(() => window.removeEventListener('scroll', onScroll));
  onScroll();

  // ── 3. PARALLAX SECTION WATERMARKS ──
  if (!reduceMotion) {
    const watermarks = document.querySelectorAll('.section-watermark');
    watermarks.forEach((wm) => {
      const parent = wm.parentElement || document.body;
      gsap.fromTo(
        wm,
        { yPercent: -20, opacity: 0.08 },
        {
          yPercent: 25,
          opacity: 0.16,
          ease: 'none',
          scrollTrigger: {
            trigger: parent,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );
    });
  }

  // ── 4. MAGNETIC BUTTONS (Awwwards micro-interaction) ──
  if (!reduceMotion && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach((btn) => {
      const onMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate3d(${x * 0.28}px, ${y * 0.28}px, 0)`;
      };

      const onMouseLeave = () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
      };

      btn.addEventListener('mousemove', onMouseMove);
      btn.addEventListener('mouseleave', onMouseLeave);

      cleanups.push(() => {
        btn.removeEventListener('mousemove', onMouseMove);
        btn.removeEventListener('mouseleave', onMouseLeave);
      });
    });
  }

  // ── 5. CURSOR GLOW (Fluid lag) ──
  const glow = document.getElementById('cursorGlow');
  if (glow && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let running = true;
    let frame = 0;

    const onPointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    cleanups.push(() => window.removeEventListener('mousemove', onPointerMove));

    const loop = () => {
      if (!running) return;
      x += (targetX - x) * 0.14;
      y += (targetY - y) * 0.14;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    cleanups.push(() => {
      running = false;
      cancelAnimationFrame(frame);
    });
  }

  return () => {
    cleanups.reverse().forEach((fn) => fn());
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}
