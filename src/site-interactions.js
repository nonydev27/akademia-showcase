export function setupSiteInteractions() {
  const cleanups = [];
  const observers = [];
  const revealTimeouts = new Set();
  const root = document.documentElement;
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const supportsIntersectionObserver = 'IntersectionObserver' in window;

  const listen = (target, type, handler, options) => {
    target.addEventListener(type, handler, options);
    cleanups.push(() => target.removeEventListener(type, handler, options));
  };

  const revealElements = document.querySelectorAll('[data-reveal]');

  if (supportsIntersectionObserver && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const siblings = Array.from(entry.target.parentElement?.children ?? [])
          .filter((element) => element.hasAttribute('data-reveal'));
        const index = Math.max(0, siblings.indexOf(entry.target));
        const delay = Math.min(index % 6, 5) * 90;
        const timeout = window.setTimeout(() => {
          entry.target.classList.add('in');
          revealTimeouts.delete(timeout);
        }, delay);

        revealTimeouts.add(timeout);
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    observers.push(revealObserver);
    revealElements.forEach((element) => revealObserver.observe(element));
    root.classList.add('reveal-ready');
  } else {
    revealElements.forEach((element) => element.classList.add('in'));
    root.classList.add('no-observer');
  }

  const counters = document.querySelectorAll('.count');

  if (supportsIntersectionObserver && !reduceMotion) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number.parseInt(element.dataset.target ?? '0', 10);
        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = String(Math.round(target * eased));
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            element.textContent = String(target);
          }
        };

        requestAnimationFrame(tick);
        countObserver.unobserve(element);
      });
    }, { threshold: 0.5 });

    observers.push(countObserver);
    counters.forEach((counter) => countObserver.observe(counter));
  } else {
    counters.forEach((counter) => {
      counter.textContent = counter.dataset.target ?? '0';
    });
  }

  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');

  const updateScrollState = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 12);

    if (progress) {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    }
  };

  listen(window, 'scroll', updateScrollState, { passive: true });
  updateScrollState();

  if (supportsIntersectionObserver) {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    observers.push(sectionObserver);
    document.querySelectorAll('section[id]').forEach((section) => sectionObserver.observe(section));
  }

  const glow = document.getElementById('cursorGlow');

  if (glow && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let frame = 0;
    let running = true;

    listen(window, 'mousemove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    }, { passive: true });

    const animateGlow = () => {
      if (!running) return;
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animateGlow);
    };

    frame = requestAnimationFrame(animateGlow);
    cleanups.push(() => {
      running = false;
      cancelAnimationFrame(frame);
    });
  } else if (glow) {
    glow.style.display = 'none';
  }

  document.querySelectorAll('.feature-card').forEach((card) => {
    listen(card, 'mousemove', (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
      card.style.setProperty('--my', `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
    });
  });

  const heroWindow = document.getElementById('heroWindow');
  if (heroWindow && !reduceMotion) {
    listen(window, 'scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < 900) {
        heroWindow.style.transform = `rotateX(${Math.max(0, 6 - scrollY / 150)}deg) translateY(${scrollY * -0.04}px)`;
      }
    }, { passive: true });
  }

  return () => {
    cleanups.reverse().forEach((cleanup) => cleanup());
    observers.forEach((observer) => observer.disconnect());
    revealTimeouts.forEach((timeout) => window.clearTimeout(timeout));
    root.classList.remove('reveal-ready');
  };
}
