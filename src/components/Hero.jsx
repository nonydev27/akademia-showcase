import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Laptop,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Mail,
  ChevronDown,
} from 'lucide-react';
import Canvas3D from './Canvas3D.jsx';
import { sound } from '../utils/audio.js';
import { useApp } from '../context/AppContext.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useApp();
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    // Track mouse position normalized (-1 to 1) for 3D gyro tilt
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth) * 2 - 1;
      const ny = -(e.clientY / innerHeight) * 2 + 1;
      setMousePos({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // GSAP ScrollTrigger to scrub 3D laptop opening and parallax layers
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroEl,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });

      // Parallax multi-speed floating chips
      gsap.to('.hero-chip-1', {
        yPercent: -90,
        xPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      gsap.to('.hero-chip-2', {
        yPercent: -120,
        xPercent: -14,
        ease: 'none',
        scrollTrigger: {
          trigger: heroEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      });

      gsap.to('.hero-chip-3', {
        yPercent: -80,
        xPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });

      // Parallax Background Giant Typo
      gsap.to('.hero-bg-text', {
        yPercent: 40,
        opacity: 0.15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4,
        },
      });
    }, heroEl);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-awwwards" id="home">
      {/* 3D Background Parallax Typo & Ambient Nebulae */}
      <div className="hero-bg-text" aria-hidden="true">
        AKADEMIA
      </div>
      <div className="hero-ambient-glow glow-1" />
      <div className="hero-ambient-glow glow-2" />
      <div className="hero-grid-lines" />

      <div className="container hero-container">
        {/* Top Announcement Badge */}
        <div className="hero-badge-wrap">
          <div className="hero-badge">
            <span className="dot" />
            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* Cinematic Headline with Shimmer & Kinetic Gradient */}
        <h1 ref={headlineRef} className="hero-title">
          School Management, <br />
          <em>Finally Done Right</em>
        </h1>

        <p className="hero-subtitle">
          {t.hero.subtitle}
        </p>

        {/* Kinetic CTA Actions */}
        <div className="hero-btns">
          <a
            href="#watch"
            className="btn-primary magnetic-btn"
            onClick={() => sound.playClick()}
          >
            <span>{t.hero.seeAction}</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="#features"
            className="btn-outline magnetic-btn"
            onClick={() => sound.playClick()}
          >
            {t.hero.featuresBtn}
          </a>
          <a
            href="#store"
            className="btn-store-pill magnetic-btn"
            onClick={() => sound.playClick()}
          >
            <Laptop size={15} className="win-icon" />
            <span>{t.hero.downloadBtn}</span>
          </a>
        </div>

        <div className="hero-pillars-row">
          <div className="pillar-item">
            <span className="pillar-dot" />
            <span>{t.hero.multiTenant}</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-dot" />
            <span>{t.hero.desktopSpeed}</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-dot" />
            <span>{t.hero.fintech}</span>
          </div>
        </div>

        {/* ── 3D WEBGL LAPTOP CANVAS & PARALLAX CHIP OVERLAYS ── */}
        <div className="hero-3d-stage">
          <Canvas3D scrollProgress={scrollProgress} mousePos={mousePos} />

          {/* Foreground 3D Parallax Floating Glass Chips with clean SVG icons */}
          <div className="hero-float-chip hero-chip-1" style={{ transform: `translate3d(${mousePos.x * 12}px, ${-mousePos.y * 10}px, 0)` }}>
            <span className="chip-icon-box blue">
              <BarChart3 size={18} />
            </span>
            <div className="chip-content">
              <strong>Live Admin Dashboard</strong>
              <small>Real-time enrollment & collections</small>
            </div>
          </div>

          <div className="hero-float-chip hero-chip-2" style={{ transform: `translate3d(${-mousePos.x * 15}px, ${mousePos.y * 12}px, 0)` }}>
            <span className="chip-icon-box gold">
              <ShieldCheck size={18} />
            </span>
            <div className="chip-content">
              <strong>Result Fee Intercept</strong>
              <small>Auto-holds until school fees clear</small>
            </div>
          </div>

          <div className="hero-float-chip hero-chip-3" style={{ transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 14}px, 0)` }}>
            <span className="chip-icon-box sage">
              <Mail size={18} />
            </span>
            <div className="chip-content">
              <strong>Ghana SMS and Email</strong>
              <small>Instant guardian delivery</small>
            </div>
          </div>
        </div>

        {/* Interactive Scroll Down Prompt */}
        <div className="hero-scroll-prompt">
          <div className="scroll-puck">
            <span className="scroll-chevron" />
          </div>
          <span className="scroll-prompt-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
