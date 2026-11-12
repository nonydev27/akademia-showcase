import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Canvas3D from './Canvas3D.jsx';
import { sound } from '../utils/audio.js';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const chipsRef = useRef([]);
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

    // GSAP ScrollTrigger to scrub 3D laptop opening & parallax layers
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
        <div className="hero-badge-wrap" data-reveal>
          <div className="hero-badge">
            <span className="dot" />
            <span>Built for Ghanaian Schools • GES 30/20/50 Grading</span>
          </div>
        </div>

        {/* Cinematic Headline with Shimmer & Kinetic Gradient */}
        <h1 ref={headlineRef} className="hero-title" data-reveal>
          School Management, <br />
          <em>Finally Done Right</em>
        </h1>

        <p className="hero-subtitle" data-reveal>
          Akademia brings attendance, fees, continuous assessment grading, terminal report cards,
          and Paystack mobile money together in one ultra-fast desktop experience built for
          Primary, JHS, and SHS institutions.
        </p>

        {/* Kinetic CTA Actions */}
        <div className="hero-btns" data-reveal>
          <a
            href="#story"
            className="btn-primary magnetic-btn"
            onClick={() => sound.playClick()}
          >
            <span>Explore Interactive Story</span>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#features"
            className="btn-outline magnetic-btn"
            onClick={() => sound.playClick()}
          >
            System Features
          </a>
          <a
            href="#store"
            className="btn-store-pill magnetic-btn"
            onClick={() => sound.playClick()}
          >
            <span className="win-icon">❖</span> Windows App (.msix)
          </a>
        </div>

        <div className="hero-pillars-row" data-reveal>
          <div className="pillar-item">
            <span className="pillar-dot" />
            <span><strong>Multi-Tenant:</strong> One platform, isolated databases</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-dot" />
            <span><strong>Desktop Power:</strong> Fast 60fps Windows application</span>
          </div>
          <div className="pillar-item">
            <span className="pillar-dot" />
            <span><strong>Paystack & MoMo:</strong> MTN & Telecel real-time verification</span>
          </div>
        </div>

        {/* ── 3D WEBGL LAPTOP CANVAS & PARALLAX CHIP OVERLAYS ── */}
        <div className="hero-3d-stage">
          <Canvas3D scrollProgress={scrollProgress} mousePos={mousePos} />

          {/* Foreground 3D Parallax Floating Glass Chips */}
          <div className="hero-float-chip hero-chip-1" style={{ transform: `translate3d(${mousePos.x * 12}px, ${-mousePos.y * 10}px, 0)` }}>
            <span className="chip-icon-box blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1={18} y1={20} x2={18} y2={10} />
                <line x1={12} y1={20} x2={12} y2={4} />
                <line x1={6} y1={20} x2={6} y2={14} />
              </svg>
            </span>
            <div className="chip-content">
              <strong>Live Admin Dashboard</strong>
              <small>Real-time enrollment & collections</small>
            </div>
          </div>

          <div className="hero-float-chip hero-chip-2" style={{ transform: `translate3d(${-mousePos.x * 15}px, ${mousePos.y * 12}px, 0)` }}>
            <span className="chip-icon-box gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <div className="chip-content">
              <strong>Result-Fee Intercept</strong>
              <small>Auto-holds until school fees clear</small>
            </div>
          </div>

          <div className="hero-float-chip hero-chip-3" style={{ transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 14}px, 0)` }}>
            <span className="chip-icon-box sage">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <div className="chip-content">
              <strong>Ghana SMS & Email</strong>
              <small>Instant guardian delivery</small>
            </div>
          </div>
        </div>

        {/* Interactive Scroll Down Prompt */}
        <div className="hero-scroll-prompt">
          <div className="scroll-puck">
            <span className="scroll-chevron" />
          </div>
          <span className="scroll-prompt-text">Scroll to unlock the story</span>
        </div>
      </div>
    </section>
  );
}
