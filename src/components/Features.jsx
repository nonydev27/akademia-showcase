import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Building2, CreditCard, ShieldCheck, BookOpen, QrCode, Bell } from 'lucide-react';
import { sound } from '../utils/audio.js';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    iconClass: 'fi-blue',
    tag: 'Architecture',
    title: 'Multi Tenant School Isolation',
    desc: 'Each school operates in a completely isolated database partition. Student bio-data, exam scores, and fee records from one institution never cross paths with another.',
    highlight: 'Zero Data Leaks Guarantee',
    iconSvg: <Building2 size={24} />,
  },
  {
    iconClass: 'fi-gold',
    tag: 'Fintech Engine',
    title: 'Paystack MoMo and Card Webhooks',
    desc: 'Accept payments across MTN Mobile Money, Telecel Cash, and Visa or Mastercard. Webhook automation updates learner ledgers in sub-second time without manual teller receipts.',
    highlight: 'Sub Second Webhook Reconciliation',
    iconSvg: <CreditCard size={24} />,
  },
  {
    iconClass: 'fi-rose',
    tag: 'Signature System',
    title: 'Automated Result Fee Intercept',
    desc: 'Prevent report cards from leaking before school fees are cleared. Akademia automatically withholds PDF generation until the student ledger balance reaches zero.',
    highlight: 'Proprietary Withholding Protocol',
    iconSvg: <ShieldCheck size={24} />,
  },
  {
    iconClass: 'fi-sage',
    tag: 'Ghanaian Curriculum',
    title: 'GES Assessment and 30/20/50 Scoring',
    desc: 'Standardized grading built specifically for Ghanaian Primary, JHS, and SHS institutions. Automatically aggregates 30% CA, 20% Mid Term, and 50% End of Term exams.',
    highlight: 'Official WAEC and GES Grading Scales',
    iconSvg: <BookOpen size={24} />,
  },
  {
    iconClass: 'fi-sky',
    tag: 'Verification',
    title: 'Tamper Proof QR Terminal Reports',
    desc: 'Generate elegant PDF report cards featuring school crest, continuous assessment breakdowns, headteacher remarks, and a secure verification QR code for tertiary admissions.',
    highlight: 'Instant Online Authenticity Check',
    iconSvg: <QrCode size={24} />,
  },
  {
    iconClass: 'fi-mint',
    tag: 'Communications',
    title: 'Automated SMS and Email Broadcasts',
    desc: 'Keep guardians instantly informed. Direct notifications for morning absence, fee reminders, exam publication alerts, and emergency school announcements via trusted Ghanaian SMS routes.',
    highlight: 'High Deliverability Local SMS',
    iconSvg: <Bell size={24} />,
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
            <Sparkles size={15} className="label-icon-blue" />
            <span>What Akademia Does</span>
          </div>
          <h2 className="section-title">
            Built for how Ghanaian schools <br />
            actually function
          </h2>
          <p className="section-sub">
            Engineered from ground zero for the realities of local academic operations,
            not an adapted foreign template.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((item) => (
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
