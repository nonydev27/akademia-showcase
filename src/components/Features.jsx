import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sound } from '../utils/audio.js';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    iconClass: 'fi-blue',
    tag: 'Architecture',
    title: 'Multi-Tenant School Isolation',
    desc: 'Each school operates in a completely isolated database partition. Student bio-data, exam scores, and fee records from one institution never cross paths with another.',
    highlight: 'Zero Data Leaks Guarantee',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V7l6-4v18" /><path d="M14 21V11l6 3v7" /><path d="M4 21h16" />
        <path d="M8 9h.01M8 13h.01M8 17h.01" />
      </svg>
    ),
  },
  {
    iconClass: 'fi-gold',
    tag: 'Fintech Engine',
    title: 'Paystack MoMo & Card Webhooks',
    desc: 'Accept payments across MTN Mobile Money, Telecel Cash, and Visa/Mastercard. Webhook automation updates learner ledgers in sub-second time without manual teller receipts.',
    highlight: 'Sub-Second Webhook Reconciliation',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={5} width={20} height={14} rx={2} />
        <line x1={2} y1={10} x2={22} y2={10} />
      </svg>
    ),
  },
  {
    iconClass: 'fi-rose',
    tag: 'Signature System',
    title: 'Automated Result-Fee Intercept',
    desc: 'Prevent report cards from leaking before school fees are cleared. Akademia automatically withholds PDF generation until the student ledger balance reaches zero.',
    highlight: 'Proprietary Withholding Protocol',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    iconClass: 'fi-sage',
    tag: 'Ghanaian Curriculum',
    title: 'GES Assessment & 30/20/50 Scoring',
    desc: 'Standardized grading built specifically for Ghanaian Primary, JHS, and SHS institutions. Automatically aggregates 30% CA, 20% Mid-term, and 50% End-of-Term exams.',
    highlight: 'Official WAEC & GES Grading Scales',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    iconClass: 'fi-sky',
    tag: 'Verification',
    title: 'Tamper-Proof QR Terminal Reports',
    desc: 'Generate elegant PDF report cards featuring school crest, continuous assessment breakdowns, headteacher remarks, and a secure verification QR code for tertiary admissions.',
    highlight: 'Instant Online Authenticity Check',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={3} y={3} width={7} height={7} /><rect x={14} y={3} width={7} height={7} />
        <rect x={14} y={14} width={7} height={7} /><rect x={3} y={14} width={7} height={7} />
      </svg>
    ),
  },
  {
    iconClass: 'fi-mint',
    tag: 'Communications',
    title: 'Automated SMS & Email Broadcasts',
    desc: 'Keep guardians instantly informed. Direct notifications for morning absence, fee reminders, exam publication alerts, and emergency school closures via trusted Ghanaian SMS routes.',
    highlight: 'High Deliverability Local SMS',
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Mouse tracking radial glow for feature cards
    const cards = el.querySelectorAll('.feature-card');
    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
      });
    };

    el.addEventListener('mousemove', handleMouseMove, { passive: true });

    // GSAP ScrollTrigger staggered reveal with 3D tilt
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        scale: 0.94,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
        },
      });
    }, el);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="features" id="features">
      {/* Background Section Parallax Word */}
      <div className="section-watermark" aria-hidden="true">
        CAPABILITIES
      </div>

      <div className="container">
        <div className="features-intro">
          <div className="section-label">
            <span className="label-gem" /> What Akademia Does
          </div>
          <h2 className="section-title">
            Built for how Ghanaian schools <br />
            actually function
          </h2>
          <p className="section-sub">
            Engineered from ground zero for the realities of local academic operations —
            not a translated foreign template.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((item, index) => (
            <div
              key={item.title}
              className="feature-card interactive-tilt"
              onMouseEnter={() => sound.playStep()}
            >
              <div className="feature-top-meta">
                <div className={`feature-icon ${item.iconClass}`}>
                  {item.iconSvg}
                </div>
                <span className="feature-badge-tag">{item.tag}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="feature-footer-highlight">
                <span className="highlight-dot" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
