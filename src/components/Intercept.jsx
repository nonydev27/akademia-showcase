import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio.js';

gsap.registerPlugin(ScrollTrigger);

export default function Intercept() {
  const sectionRef = useRef(null);
  const [simState, setSimState] = useState('withheld'); // 'withheld', 'processing', 'released'
  const [balance, setBalance] = useState(650);

  const handleSimulatePayment = () => {
    if (simState === 'processing') return;
    sound.playClick();
    setSimState('processing');

    setTimeout(() => {
      setBalance(0);
      setSimState('released');
      sound.playUnlock();

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#2563eb', '#f59e0b', '#10b981', '#38bdf8'],
        });
      } catch (_) {}
    }, 1200);
  };

  const handleReset = () => {
    sound.playClick();
    setBalance(650);
    setSimState('withheld');
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Animate the flow steps with laser beam progress
      gsap.from('.flow-step', {
        x: -40,
        opacity: 0,
        stagger: 0.18,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.intercept-flow',
          start: 'top 80%',
        },
      });

      // Parallax card depth
      gsap.to('.intercept-inner', {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="intercept" id="intercept">
      <div className="container">
        <div className="intercept-inner">
          {/* Left Narrative Column */}
          <div className="intercept-narrative">
            <div className="intercept-label">
              <span className="star-icon">✦</span> Signature Technology
            </div>
            <h2>The Result-Fee Intercept</h2>
            <p>
              The most decisive financial safeguarding engine in West African education.
              Report cards and official transcripts are cryptographically withheld until a
              learner’s outstanding balance is reconciled to zero.
            </p>
            <p>
              Zero awkward debt conversations. Zero manual paper withholding registers.
              The instant a guardian completes payment through Paystack (MTN MoMo, Telecel,
              Card), the terminal PDF is generated, stamped with a verification QR code,
              and dispatched directly to the guardian's phone.
            </p>

            {/* Interactive Live Playground Widget */}
            <div className="intercept-interactive-card">
              <div className="interactive-card-header">
                <span className="card-badge">LIVE SIMULATOR</span>
                <span className="card-title">Brightfield Academy • Term 3</span>
              </div>

              <div className="student-status-box">
                <div className="student-info">
                  <strong>Kwame Mensah</strong>
                  <span>Admission: BFA-042 • Form JHS 2A</span>
                </div>
                <div className="balance-pill">
                  <small>Outstanding Balance:</small>
                  <strong>GHS {balance.toFixed(2)}</strong>
                </div>
              </div>

              <div className="intercept-status-indicator">
                <div className={`status-stamp ${simState}`}>
                  {simState === 'withheld' && (
                    <>
                      <span className="stamp-icon">🔒</span>
                      <span>REPORT CARD WITHHELD</span>
                    </>
                  )}
                  {simState === 'processing' && (
                    <>
                      <span className="stamp-icon spin">⟳</span>
                      <span>PROCESSING PAYSTACK WEBHOOK...</span>
                    </>
                  )}
                  {simState === 'released' && (
                    <>
                      <span className="stamp-icon">✓</span>
                      <span>REPORT CARD RELEASED & VERIFIED</span>
                    </>
                  )}
                </div>
              </div>

              <div className="interactive-action-row">
                {simState !== 'released' ? (
                  <button
                    type="button"
                    className="btn-simulate-pay"
                    onClick={handleSimulatePayment}
                    disabled={simState === 'processing'}
                  >
                    <span>⚡ Simulate MoMo Payment (GHS 650.00)</span>
                  </button>
                ) : (
                  <div className="released-success-banner">
                    <span className="success-txt">🎉 SMS & Email dispatched with PDF link!</span>
                    <button type="button" className="btn-reset-sim" onClick={handleReset}>
                      Reset Simulator
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Flow Column */}
          <div className="intercept-flow">
            <div className="flow-step">
              <div className="flow-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" /><path d="M22 10v6" />
                </svg>
              </div>
              <div className="flow-step-text">
                <strong>1. Exam Scores Finalized</strong>
                Terminal reports are computed with 30/20/50 weighting and automatically placed into WITHHELD state.
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x={2} y={5} width={20} height={14} rx={2} /><line x1={2} y1={10} x2={22} y2={10} />
                </svg>
              </div>
              <div className="flow-step-text">
                <strong>2. Guardian Makes Mobile Payment</strong>
                Payment is made directly via MTN Mobile Money, Telecel Cash, or online debit card.
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="flow-step-text">
                <strong>3. Real-Time Paystack Webhook</strong>
                Akademia listens to live server webhooks, verifies the settlement in milliseconds, and clears the ledger.
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="flow-step-text">
                <strong>4. Instant Dispatch & QR Verification</strong>
                Withholding lock disengages. The official signed PDF is rendered, stamped with a verification QR code, and SMS alert is sent.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
