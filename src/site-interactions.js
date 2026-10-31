export function setupSiteInteractions() {
  // ── FAQ accordion (accordion-style: only one open) ──
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Scroll reveal with stagger ──
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (reduceMotion) {
    revealEls.forEach(el => el.classList.add('in'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const parent = entry.target.parentElement;
        const siblings = parent ? Array.from(parent.children).filter(c => c.hasAttribute && c.hasAttribute('data-reveal')) : [];
        const idx = Math.max(0, siblings.indexOf(entry.target));
        const delay = Math.min(idx % 6, 5) * 90;
        setTimeout(() => entry.target.classList.add('in'), delay);
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  // ── Animated counters ──
  const counters = document.querySelectorAll('.count');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target || '0', 10);
      const dur = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObserver.observe(c));

  // ── Nav: scrolled state + active link ──
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 12);
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('progress').style.width = Math.min(100, Math.max(0, pct)) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navLinkEls = document.querySelectorAll('.nav-links a[href^="#"]');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinkEls.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

  // ── Cursor glow (fine pointers only) ──
  const glow = document.getElementById('cursorGlow');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && glow) {
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2, tx = gx, ty = gy;
    window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const loop = () => {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  } else if (glow) {
    glow.style.display = 'none';
  }

  // ── Feature card spotlight follows the pointer ──
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
    });
  });

  // ── Hero parallax on the product screenshot ──
  const heroWindow = document.getElementById('heroWindow');
  if (heroWindow && !reduceMotion) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < 900) heroWindow.style.transform = `rotateX(${Math.max(0, 6 - y / 150)}deg) translateY(${y * -0.04}px)`;
    }, { passive: true });
  }

  // ── Cinematic demo reel (video-style, built from screenshots) ──
  (function() {
    const player = document.getElementById('demoPlayer');
    if (!player) return;
    const scenes = Array.from(player.querySelectorAll('.demo-scene'));
    const segs = Array.from(player.querySelectorAll('.demo-seg'));
    const fills = segs.map(s => s.querySelector('.fill'));
    const playBtn = document.getElementById('demoPlayBtn');
    const pauseIcon = playBtn.querySelector('.ic-pause');
    const playIcon = playBtn.querySelector('.ic-play');
    const timeEl = document.getElementById('demoTime');
    const titleEl = document.getElementById('demoCaptionTitle');
    const descEl = document.getElementById('demoCaptionDesc');
    const tagEl = player.querySelector('.demo-caption .tag');

    const captions = [
      { tag: 'Admin Dashboard', title: 'Real-time school overview', desc: 'Students, attendance, fees, and pending results — all at a glance.' },
      { tag: 'Staff Management', title: 'Assign teachers to classes', desc: 'Generate access codes and scope each teacher to exactly what they own.' },
      { tag: 'Subscriptions', title: 'Licensing made simple', desc: 'Per-school plans with grace periods — renew directly through Paystack.' },
      { tag: 'Secure Sign In', title: 'Role-aware authentication', desc: 'Sign in once and land exactly where your role should.' }
    ];

    const DURATION = reduceMotion ? 100000 : 4200;
    let idx = 0, playing = !reduceMotion, segStart = performance.now(), pausedElapsed = 0;

    function activate(newIdx) {
      scenes[idx].classList.remove('active');
      idx = (newIdx + scenes.length) % scenes.length;
      scenes[idx].classList.add('active');
      const img = scenes[idx].querySelector('img');
      img.style.animation = 'none';
      void img.offsetWidth;
      img.style.animation = '';

      fills.forEach((f, i) => {
        f.style.transition = 'none';
        f.style.width = i < idx ? '100%' : (i === idx ? '0%' : '0%');
      });

      const c = captions[idx];
      tagEl.textContent = c.tag;
      titleEl.textContent = c.title;
      descEl.textContent = c.desc;
      timeEl.textContent = 'SCENE ' + (idx + 1) + ' / ' + scenes.length;

      segStart = performance.now();
      pausedElapsed = 0;
    }

    function tick(now) {
      if (playing) {
        const elapsed = now - segStart;
        const pct = Math.min(100, (elapsed / DURATION) * 100);
        fills[idx].style.transition = 'none';
        fills[idx].style.width = pct + '%';
        if (elapsed >= DURATION) activate(idx + 1);
      }
      requestAnimationFrame(tick);
    }

    segs.forEach((s, i) => s.addEventListener('click', () => activate(i)));

    playBtn.addEventListener('click', () => {
      playing = !playing;
      player.classList.toggle('paused', !playing);
      if (playing) {
        segStart = performance.now() - pausedElapsed;
      } else {
        pausedElapsed = performance.now() - segStart;
      }
      pauseIcon.style.display = playing ? '' : 'none';
      playIcon.style.display = playing ? 'none' : '';
      playBtn.setAttribute('aria-label', playing ? 'Pause demo' : 'Play demo');
    });

    activate(0);
    if (reduceMotion) { playing = false; player.classList.add('paused'); pauseIcon.style.display = 'none'; playIcon.style.display = ''; }
    requestAnimationFrame(tick);
  })();

  // ── Screenshot carousel ──
  (function() {
    const car = document.getElementById('screensCarousel');
    if (!car) return;
    const slides = Array.from(car.querySelectorAll('.carousel-slide'));
    const dots = Array.from(car.querySelectorAll('.car-dot'));
    const thumbs = Array.from(car.querySelectorAll('.car-thumb'));
    const titleEl = document.getElementById('carTitle');
    const descEl = document.getElementById('carDesc');
    const data = [
      { title: 'Admin Dashboard', desc: "At-a-glance overview of students, attendance rate, fee collections, and pending results. Real-time data, no refresh needed." },
      { title: 'Staff & Assignments', desc: "Add teachers, generate their access codes, and assign them to specific class-subject combinations — so each person sees only what they own." },
      { title: 'Subscriptions & Licensing', desc: "Per-school plans with configurable grace periods. Renew directly through Paystack — expired schools are gently gated, never abruptly cut off." },
      { title: 'Secure Sign In', desc: "Role-aware authentication with short-lived JWTs. Sign in once and land exactly where your role should — no clutter, no confusion." }
    ];
    let idx = 0, timer;

    function go(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));
      titleEl.textContent = data[idx].title;
      descEl.textContent = data[idx].desc;
    }
    function restart() {
      clearInterval(timer);
      if (!reduceMotion) timer = setInterval(() => go(idx + 1), 5000);
    }

    car.querySelector('.car-prev').addEventListener('click', () => { go(idx - 1); restart(); });
    car.querySelector('.car-next').addEventListener('click', () => { go(idx + 1); restart(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); restart(); }));
    thumbs.forEach((t, i) => t.addEventListener('click', () => { go(i); restart(); }));

    car.addEventListener('mouseenter', () => clearInterval(timer));
    car.addEventListener('mouseleave', restart);

    let touchX = null;
    const track = car.querySelector('.carousel-track');
    track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
      touchX = null; restart();
    }, { passive: true });

    restart();
  })();
}
