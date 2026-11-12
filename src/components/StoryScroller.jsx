import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Lock,
  Unlock,
  CheckCircle2,
  Zap,
  GraduationCap,
  CreditCard,
  Bell,
  Smartphone,
  ShieldCheck,
  MousePointer,
} from 'lucide-react';
import { sound } from '../utils/audio.js';
import { useApp } from '../context/AppContext.jsx';

// Screens used in the storytelling acts
import attendanceImg from '../assets/images/store/macbook-2880x1800/7-attendance.png';
import gradeSheetImg from '../assets/images/store/macbook-2880x1800/4-grade-sheet.png';
import feesImg from '../assets/images/store/macbook-2880x1800/6-fees.png';
import reportCardImg from '../assets/images/store/macbook-2880x1800/2-report-card.png';

gsap.registerPlugin(ScrollTrigger);

export default function StoryScroller() {
  const { t } = useApp();
  const containerRef = useRef(null);
  const pinTargetRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeActIndex, setActiveActIndex] = useState(0);
  const [progressPct, setProgressPct] = useState(0);
  const [interceptUnlocked, setInterceptUnlocked] = useState(false);
  const hasCelebratedRef = useRef(false);

  const acts = [
    {
      id: 'act-1',
      tag: t.story.attendanceTag,
      title: t.story.attendanceTitle,
      desc: t.story.attendanceDesc,
      badge: 'Parent SMS Alerts',
      image: attendanceImg,
      alt: 'Akademia Attendance Register interface',
      metric: { value: '98.4%', label: 'Daily Roll Call Reliability' },
    },
    {
      id: 'act-2',
      tag: t.story.gradingTag,
      title: t.story.gradingTitle,
      desc: t.story.gradingDesc,
      badge: 'Official Standards Enforced',
      image: gradeSheetImg,
      alt: 'Akademia Grade Sheet with 30/20/50 assessment weights',
      metric: { value: '100%', label: 'Automated Rank Accuracy' },
    },
    {
      id: 'act-3',
      tag: t.story.feesTag,
      title: t.story.feesTitle,
      desc: t.story.feesDesc,
      badge: 'MTN MoMo and Telecel Cash',
      image: feesImg,
      alt: 'Akademia Fees and Collections Ledger',
      metric: { value: 'GHS 0.00', label: 'Manual Paper Receipts Needed' },
    },
    {
      id: 'act-4',
      tag: t.story.interceptTag,
      title: t.story.interceptTitle,
      desc: t.story.interceptDesc,
      badge: 'Tamper Proof QR Verification',
      image: reportCardImg,
      alt: 'Akademia Terminal Report Card with QR Verification',
      metric: { value: '< 1.4s', label: 'Payment to Release Speed' },
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const pinTarget = pinTargetRef.current;
    if (!container || !pinTarget) return;

    // GSAP ScrollTrigger Scroll-Scrubbing master timeline
    const ctx = gsap.context(() => {
      const totalActs = acts.length;

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: '+=360%',
        pin: pinTarget,
        pinSpacing: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;
          setProgressPct(Math.round(p * 100));

          // Calculate current act
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

            try {
              confetti({
                particleCount: 55,
                spread: 60,
                origin: { y: 0.6 },
                colors: ['#2563eb', '#f59e0b', '#10b981', '#38bdf8'],
              });
            } catch (_) {}
          } else if (p < 0.72 && hasCelebratedRef.current) {
            setInterceptUnlocked(false);
            hasCelebratedRef.current = false;
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, [acts.length]);

  const currentAct = acts[activeActIndex];

  return (
    <section ref={containerRef} className="story-scroller-section" id="story">
      {/* Background Watermark Parallax */}
      <div className="story-bg-watermark" aria-hidden="true">
        AKADEMIA
      </div>

      <div ref={pinTargetRef} className="story-pinned-viewport">
        {/* HUD Top Bar (Time completely removed per user request) */}
        <div className="story-hud-top">
          <div className="story-hud-left">
            <span className="story-badge-pulse">
              <span className="story-pulse-dot" />
              <span>{t.story.tag}</span>
            </span>
            <span className="story-chapter-pill">
              <Sparkles size={14} className="hud-sparkle-icon" />
              <span>Chapter {activeActIndex + 1} of {acts.length}</span>
            </span>
          </div>

          <div className="story-hud-right">
            <div className="story-progress-indicator">
              <span className="story-progress-text">{t.story.scrubLabel}: {progressPct}%</span>
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
              {acts.map((act, i) => (
                <div
                  key={act.id}
                  className={`story-nav-pip ${i === activeActIndex ? 'active' : ''} ${i < activeActIndex ? 'completed' : ''}`}
                >
                  <span className="story-pip-dot">0{i + 1}</span>
                  <span className="story-pip-time">Part {i + 1}</span>
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
                      <div className="sim-header-title">
                        <Smartphone size={14} className="sim-icon" />
                        <span>Daily Class Roll Call</span>
                      </div>
                      <span className="sim-status">Class JHS 2A</span>
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
                      <div className="sim-header-title">
                        <GraduationCap size={14} className="sim-icon" />
                        <span>Ghana Assessment Weighting</span>
                      </div>
                      <span className="sim-status">Integrated Science</span>
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
                      <span>Total Computed: <strong>94 / 100</strong> (Grade 1 Distinction)</span>
                    </div>
                  </div>
                )}

                {activeActIndex === 2 && (
                  <div className="story-mini-simulation sim-payment">
                    <div className="sim-header">
                      <div className="sim-header-title">
                        <CreditCard size={14} className="sim-icon" />
                        <span>Paystack Webhook Stream</span>
                      </div>
                      <span className="sim-status green">Verified</span>
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
                      <div className="sim-header-title">
                        <ShieldCheck size={14} className="sim-icon" />
                        <span>Result Fee Intercept Protocol</span>
                      </div>
                      <span className={`sim-badge ${interceptUnlocked ? 'badge-released' : 'badge-withheld'}`}>
                        {interceptUnlocked ? 'RELEASED' : 'WITHHELD'}
                      </span>
                    </div>
                    <p className="sim-intercept-text">
                      {interceptUnlocked
                        ? 'Account verified cleared. Terminal PDF generated with tamper proof QR verification and sent to parent SMS.'
                        : 'Outstanding tuition balance detected. Report card is safely sealed pending Paystack clearance.'}
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
                  Akademia Desktop — {currentAct.tag}
                </div>
                <span className="story-live-pill">LIVE ENGINE</span>
              </div>

              <div className="story-screen-stage">
                {acts.map((act, idx) => (
                  <img
                    key={act.id}
                    src={act.image}
                    alt={act.alt}
                    className={`story-screen-img ${idx === activeActIndex ? 'active' : ''} ${idx < activeActIndex ? 'passed' : ''}`}
                    loading="eager"
                  />
                ))}

                {/* Foreground Badges with Clean SVG Icons (no raw emojis) */}
                <div className="story-float-chip chip-top-right">
                  <span className="chip-icon">
                    <Zap size={16} className="chip-svg-cyan" />
                  </span>
                  <div>
                    <strong>Real Time Sync</strong>
                    <small>Windows Desktop</small>
                  </div>
                </div>

                <div className="story-float-chip chip-bottom-left">
                  <span className="chip-icon">
                    <ShieldCheck size={16} className="chip-svg-gold" />
                  </span>
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
                          <div className="seal-icon">
                            <CheckCircle2 size={24} />
                          </div>
                          <div className="seal-text">
                            <strong>RESULT RELEASED</strong>
                            <small>QR Verified Official PDF</small>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="seal-icon">
                            <Lock size={22} />
                          </div>
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
          <span>Scroll to scrub the narrative forward and reverse</span>
        </div>
      </div>
    </section>
  );
}
