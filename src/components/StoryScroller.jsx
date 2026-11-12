import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio.js';

// Screens used in the storytelling acts
import attendanceImg from '../assets/images/store/macbook-2880x1800/7-attendance.png';
import gradeSheetImg from '../assets/images/store/macbook-2880x1800/4-grade-sheet.png';
import feesImg from '../assets/images/store/macbook-2880x1800/6-fees.png';
import reportCardImg from '../assets/images/store/macbook-2880x1800/2-report-card.png';

gsap.registerPlugin(ScrollTrigger);

const ACTS = [
  {
    id: 'act-1',
    time: '07:30 AM',
    tag: 'Chapter I • Morning Roll Call',
    title: 'Attendance marked in 12 seconds flat',
    desc: 'Teachers take morning roll call with a single tap on the desktop app. Absent students trigger instant SMS notifications to guardians before first period begins.',
    badge: 'SMS Dispatched • 07:32 AM',
    image: attendanceImg,
    alt: 'Akademia Attendance Register interface',
    metric: { value: '98.4%', label: 'Daily Class Attendance' },
  },
  {
    id: 'act-2',
    time: '11:45 AM',
    tag: 'Chapter II • Ghana Assessment Engine',
    title: 'Curriculum grading with strict 30/20/50 weights',
    desc: 'Purpose-built for the Ghanaian Basic Education & SHS curriculum. Enter Continuous Assessment (30%), Mid-term (20%), and Exam (50%) — aggregates and class rankings compute instantly.',
    badge: 'GES Official Standards Enforced',
    image: gradeSheetImg,
    alt: 'Akademia Grade Sheet with 30/20/50 assessment weights',
    metric: { value: '100%', label: 'Automated Rank Accuracy' },
  },
  {
    id: 'act-3',
    time: '02:15 PM',
    tag: 'Chapter III • Paystack Tuition & MoMo',
    title: 'Mobile money settlement in real-time',
    desc: 'Guardians pay via MTN MoMo, Telecel Cash, or bank card. Paystack webhooks reconcile balances instantaneously with zero paperwork, zero lost bank slips.',
    badge: 'MTN MoMo • Telecel Cash • Visa',
    image: feesImg,
    alt: 'Akademia Fees and Collections Ledger',
    metric: { value: 'GHS 0.00', label: 'Manual Reconciliation Needed' },
  },
  {
    id: 'act-4',
    time: '04:30 PM',
    tag: 'Chapter IV • The Result-Fee Intercept',
    title: 'The automated report card release',
    desc: 'Akademia’s signature breakthrough. Report cards with outstanding balances are automatically WITHHELD. The second a payment clears, the card flips to RELEASED with a tamper-proof QR code.',
    badge: 'Tamper-Proof QR Code Verified',
    image: reportCardImg,
    alt: 'Akademia Terminal Report Card with QR Verification',
    metric: { value: '< 1.4s', label: 'Payment-to-Release Speed' },
  },
];

export default function StoryScroller() {
  const containerRef = useRef(null);
  const pinTargetRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeActIndex, setActiveActIndex] = useState(0);
  const [progressPct, setProgressPct] = useState(0);
  const [interceptUnlocked, setInterceptUnlocked] = useState(false);
  const hasCelebratedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const pinTarget = pinTargetRef.current;
    if (!container || !pinTarget) return;

    // GSAP ScrollTrigger Scroll-Scrubbing master timeline
    const ctx = gsap.context(() => {
      const totalActs = ACTS.length;

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: '+=380%',
        pin: pinTarget,
        pinSpacing: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;
          setProgressPct(Math.round(p * 100));

          // Calculate current act (0 to totalActs - 1)
          const actIdx = Math.min(
            totalActs - 1,
            Math.floor(p * totalActs)
          );
          setActiveActIndex(actIdx);

          // Handle Act 4 Intercept Release threshold
          if (p >= 0.76 && !hasCelebratedRef.current) {
            setInterceptUnlocked(true);
            hasCelebratedRef.current = true;
            sound.playUnlock();

            // Joyful burst of confetti
            try {
              confetti({
                particleCount: 55,
                spread: 60,
                origin: { y: 0.6 },
                colors: ['#2563eb', '#f59e0b', '#16a34a', '#38bdf8'],
              });
            } catch (_) {}
          } else if (p < 0.72 && hasCelebratedRef.current) {
            // Scroll back up rewinds the state!
            setInterceptUnlocked(false);
            hasCelebratedRef.current = false;
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const currentAct = ACTS[activeActIndex];

  return (
    <section ref={containerRef} className="story-scroller-section" id="story">
      {/* Background Watermark Parallax */}
      <div className="story-bg-watermark" aria-hidden="true">
        AKADEMIA
      </div>

      <div ref={pinTargetRef} className="story-pinned-viewport">
        <div className="story-hud-top">
          <div className="story-hud-left">
            <span className="story-badge-pulse">
              <span className="story-pulse-dot" />
              LIVE SCROLL STORYTELLING
            </span>
            <span className="story-clock-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {currentAct.time} GMT (Accra)
            </span>
          </div>

          <div className="story-hud-right">
            <div className="story-progress-indicator">
              <span className="story-progress-text">STORY SCRUB: {progressPct}%</span>
              <div className="story-progress-track">
                <div
                  ref={progressBarRef}
                  className="story-progress-fill"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Stage Grid */}
        <div className="story-stage-grid">
          {/* Left Column: Narrative Storytelling Text & Interactive HUD */}
          <div className="story-text-col">
            <div className="story-timeline-nav">
              {ACTS.map((act, i) => (
                <div
                  key={act.id}
                  className={`story-nav-pip ${i === activeActIndex ? 'active' : ''} ${i < activeActIndex ? 'completed' : ''}`}
                >
                  <span className="story-pip-dot">{i + 1}</span>
                  <span className="story-pip-time">{act.time}</span>
                </div>
              ))}
            </div>

            <div className="story-narrative-card">
              <div className="story-act-tag">{currentAct.tag}</div>
              <h2 className="story-act-title">{currentAct.title}</h2>
              <p className="story-act-desc">{currentAct.desc}</p>

              {/* Dynamic Simulated Interactive Widget */}
              <div className="story-dynamic-widget">
                {activeActIndex === 0 && (
                  <div className="story-mini-simulation sim-attendance">
                    <div className="sim-header">
                      <span className="sim-title">Live Attendance Roll Call</span>
                      <span className="sim-status">Class: JHS 2A (38 Students)</span>
                    </div>
                    <div className="sim-students-row">
                      <div className="sim-student present">
                        <span className="sim-dot green" />
                        <span>Kofi Mensah</span>
                        <small>Present</small>
                      </div>
                      <div className="sim-student present">
                        <span className="sim-dot green" />
                        <span>Abena Serwaa</span>
                        <small>Present</small>
                      </div>
                      <div className="sim-student absent">
                        <span className="sim-dot red" />
                        <span>Kwesi Boateng</span>
                        <small>Absent • SMS Sent</small>
                      </div>
                    </div>
                  </div>
                )}

                {activeActIndex === 1 && (
                  <div className="story-mini-simulation sim-grading">
                    <div className="sim-header">
                      <span className="sim-title">Ghana Curriculum Weighting</span>
                      <span className="sim-status">Subject: Integrated Science</span>
                    </div>
                    <div className="sim-weights-bar">
                      <div className="weight-seg ca" style={{ width: '30%' }}>
                        <span>CA 30%</span>
                      </div>
                      <div className="weight-seg midterm" style={{ width: '20%' }}>
                        <span>Mid 20%</span>
                      </div>
                      <div className="weight-seg exam" style={{ width: '50%' }}>
                        <span>Exam 50%</span>
                      </div>
                    </div>
                    <div className="sim-grading-score">
                      <span>Total Computed: <strong>94 / 100</strong> (Grade 1 • Distinction)</span>
                    </div>
                  </div>
                )}

                {activeActIndex === 2 && (
                  <div className="story-mini-simulation sim-payment">
                    <div className="sim-header">
                      <span className="sim-title">Paystack Webhook Stream</span>
                      <span className="sim-status green">● Connected</span>
                    </div>
                    <div className="sim-code-preview">
                      <code>
                        event: "charge.success" | channel: "mobile_money_mtn"<br />
                        payer: "Emmanuel Osei" | amount: "GHS 1,200.00"<br />
                        balance: "GHS 0.00" → Instant Ledger Clearance
                      </code>
                    </div>
                  </div>
                )}

                {activeActIndex === 3 && (
                  <div className={`story-mini-simulation sim-intercept ${interceptUnlocked ? 'unlocked' : 'locked'}`}>
                    <div className="sim-header">
                      <span className="sim-title">Signature Result-Fee Intercept</span>
                      <span className={`sim-badge ${interceptUnlocked ? 'badge-released' : 'badge-withheld'}`}>
                        {interceptUnlocked ? 'RELEASED' : 'WITHHELD'}
                      </span>
                    </div>
                    <p className="sim-intercept-text">
                      {interceptUnlocked
                        ? '✅ Account verified cleared! Terminal PDF generated with tamper-proof QR verification and sent to parent SMS.'
                        : '🔒 Outstanding fee balance detected. Report card is safely sealed pending Paystack clearance.'}
                    </p>
                  </div>
                )}
              </div>

              {/* Metric Card */}
              <div className="story-metric-pill">
                <span className="metric-val">{currentAct.metric.value}</span>
                <span className="metric-lbl">{currentAct.metric.label}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Screen Showcase with Parallax & 3D Layering */}
          <div className="story-screen-col">
            <div className="story-device-window">
              <div className="story-window-header">
                <div className="story-header-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="story-window-caption">
                  Akademia 0.3.4 — {currentAct.tag}
                </div>
                <span className="story-live-pill">LIVE ENGINE</span>
              </div>

              <div className="story-screen-stage">
                {ACTS.map((act, idx) => (
                  <img
                    key={act.id}
                    src={act.image}
                    alt={act.alt}
                    className={`story-screen-img ${idx === activeActIndex ? 'active' : ''} ${idx < activeActIndex ? 'passed' : ''}`}
                    loading="eager"
                  />
                ))}

                {/* Parallax Floating Foreground Chips */}
                <div className="story-float-chip chip-top-right">
                  <span className="chip-icon">⚡</span>
                  <div>
                    <strong>Real-time Sync</strong>
                    <small>Windows Desktop</small>
                  </div>
                </div>

                <div className="story-float-chip chip-bottom-left">
                  <span className="chip-icon">🇬🇭</span>
                  <div>
                    <strong>Ghana GES System</strong>
                    <small>Primary, JHS, SHS</small>
                  </div>
                </div>

                {activeActIndex === 3 && (
                  <div className={`story-intercept-hologram ${interceptUnlocked ? 'released' : 'withheld'}`}>
                    <div className="hologram-seal">
                      {interceptUnlocked ? (
                        <>
                          <div className="seal-icon">✓</div>
                          <div className="seal-text">
                            <strong>RESULT RELEASED</strong>
                            <small>QR Verified • Official PDF</small>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="seal-icon">🔒</div>
                          <div className="seal-text">
                            <strong>CARD WITHHELD</strong>
                            <small>Awaiting Fee Clearance</small>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Helper */}
        <div className="story-scroll-hint">
          <div className="scroll-hint-mouse">
            <div className="scroll-hint-wheel" />
          </div>
          <span>Scroll to scrub the narrative forward & reverse</span>
        </div>
      </div>
    </section>
  );
}
