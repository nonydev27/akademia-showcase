import { useEffect } from 'react';
import { setupSiteInteractions } from './site-interactions.js';

export default function App() {
  useEffect(() => {
    setupSiteInteractions();
  }, []);

  return (
<div>
  {/* ══════════════════ PROGRESS + CURSOR GLOW ══════════════════ */}
  <div className="progress" id="progress" />
  <div className="cursor-glow" id="cursorGlow" />
  {/* ══════════════════ NAV ══════════════════ */}
  <nav id="nav">
    <a href="#" className="nav-logo">
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Akademia">
        <defs>
          <linearGradient id="navlogo-bg" x1={0} y1={0} x2={40} y2={40} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e3a8a" /><stop offset="100%" stopColor="#312e81" />
          </linearGradient>
          <linearGradient id="navlogo-cap" x1={0} y1={0} x2={40} y2={20} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
          <linearGradient id="navlogo-tassel" x1={0} y1={0} x2={6} y2={6} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fcd34d" /><stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect width={40} height={40} rx={10} fill="url(#navlogo-bg)" />
        <polygon points="20,9 30,13.8 20,18.6 10,13.8" fill="url(#navlogo-cap)" />
        <path d="M13,15 L13,20.5 C13,23.3 16.1,25.6 20,25.6 C23.9,25.6 27,23.3 27,20.5 L27,15 L20,18.6 Z" fill="#ffffff" fillOpacity="0.9" />
        <line x1={30} y1="13.8" x2={30} y2={20} stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
        <circle className="logo-orb" cx={30} cy="21.2" r="1.8" fill="url(#navlogo-tassel)" />
        <line x1="28.8" y1={23} x2="28.8" y2={27} stroke="#fcd34d" strokeWidth="0.9" strokeLinecap="round" />
        <line x1={30} y1={23} x2={30} y2={27} stroke="#fcd34d" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="31.2" y1={23} x2="31.2" y2={27} stroke="#fcd34d" strokeWidth="0.9" strokeLinecap="round" />
        <rect x="19.3" y="27.5" width="1.4" height={7} rx="0.6" fill="#ffffff" fillOpacity="0.85" />
        <path d="M19.3,28 C16,27.5 13,28.5 12,29.5 L12,34.5 C13.2,33.5 16.2,32.8 19.3,33.3 Z" fill="#ffffff" fillOpacity="0.55" />
        <path d="M20.7,28 C24,27.5 27,28.5 28,29.5 L28,34.5 C26.8,33.5 23.8,32.8 20.7,33.3 Z" fill="#ffffff" fillOpacity="0.55" />
      </svg>
      Akademia
    </a>
    <ul className="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#watch">Demo</a></li>
      <li><a href="#action">Screenshots</a></li>
      <li><a href="#how">How It Works</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#store" className="nav-cta"><span>Get the App</span></a></li>
    </ul>
  </nav>
  {/* ══════════════════ HERO ══════════════════ */}
  <section className="hero" id="home">
    <div className="hero-grid-lines" />
    <div className="container">
      <div className="hero-badge" data-reveal><span className="dot" /> Built for Ghanaian Schools</div>
      <h1 data-reveal>School Management, <em>Finally Done Right</em></h1>
      <p data-reveal>Akademia brings attendance, fees, grading, report cards, and communications together in one elegant desktop application built for Primary, JHS, and SHS schools.</p>
      <div className="hero-btns" data-reveal>
        <a href="#action" className="btn-primary">
          <span>See It In Action</span>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        <a href="#features" className="btn-outline">Explore Features</a>
      </div>
      <div className="hero-note" data-reveal>
        <span>✦ <b>Multi-tenant</b> — one platform, many schools</span>
        <span>✦ <b>Windows desktop app</b> via Tauri</span>
      </div>
      {/* Real screenshot showcase */}
      <div className="showcase" data-reveal="scale">
        <div className="showcase-glow" />
        <div className="float-chip chip-1">
          <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1={18} y1={20} x2={18} y2={10} /><line x1={12} y1={20} x2={12} y2={4} /><line x1={6} y1={20} x2={6} y2={14} /></svg></span>
          <span>Live Dashboard<small>Real-time school overview</small></span>
        </div>
        <div className="float-chip chip-2">
          <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span>
          <span>Result-Fee Intercept<small>Withhold until fees clear</small></span>
        </div>
        <div className="float-chip chip-3">
          <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></span>
          <span>Email + SMS<small>Guardian notifications</small></span>
        </div>
        <div className="window" id="heroWindow">
          <div className="window-bar">
            <div className="dots"><span className="wdot" /><span className="wdot" /><span className="wdot" /></div>
            <div className="window-title">Akademia — Admin Dashboard</div>
            <span className="window-pill">Windows</span>
          </div>
          <img src="images/Dashboard (Windows)-selection.png" alt="Akademia admin dashboard showing students, attendance, and fee overview" loading="eager" />
        </div>
      </div>
    </div>
  </section>
  {/* ══════════════════ MARQUEE ══════════════════ */}
  <div className="marquee-wrap" aria-hidden="true">
    <div className="marquee">
      <span>Attendance</span><span>Fee Management</span><span>Multi-Component Grading</span><span>Report Cards</span><span>Email &amp; SMS</span><span>Role-Based Access</span><span>Audit Log</span><span>Subscriptions</span>
      <span>Attendance</span><span>Fee Management</span><span>Multi-Component Grading</span><span>Report Cards</span><span>Email &amp; SMS</span><span>Role-Based Access</span><span>Audit Log</span><span>Subscriptions</span>
    </div>
  </div>
  {/* ══════════════════ FEATURES ══════════════════ */}
  <section className="features" id="features">
    <div className="container">
      <div className="features-intro">
        <div className="section-label" data-reveal>What Akademia Does</div>
        <h2 className="section-title" data-reveal>Everything your school needs,<br />nothing it doesn't</h2>
        <p className="section-sub" data-reveal>Built around how Ghanaian schools actually work — not a generic template adapted for Africa.</p>
      </div>
      <div className="features-grid">
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V7l6-4v18" /><path d="M14 21V11l6 3v7" /><path d="M4 21h16" /><path d="M8 9h.01M8 13h.01M8 17h.01" /></svg></div>
          <h3>Multi-School Architecture</h3>
          <p>Each school runs as a fully isolated tenant. Student records, fees, and grades from one school are never visible to another. One platform, many schools, zero data leaks.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-sage"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
          <h3>Role-Based Access Control</h3>
          <p>Three clear roles — Platform Admin, School Admin, and Staff (Teachers). Each person sees exactly what they need: teachers only access their assigned classes and subjects.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-gold"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={2} y={5} width={20} height={14} rx={2} /><circle cx={8} cy={11} r={2} /><path d="M14 10h6M14 14h4" /><path d="M5.5 16c.3-1.4 1.3-2.3 2.5-2.3s2.2.9 2.5 2.3" /></svg></div>
          <h3>Student Records</h3>
          <p>Admission numbers, personal details, guardian contacts, class enrolments, and photo uploads. Bulk CSV import for large intakes. Clean admission codes (e.g., VIS-001).</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-sky"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /><path d="m9 16 2 2 4-4" /></svg></div>
          <h3>Daily Attendance</h3>
          <p>Mark students Present, Absent, or Tardy per day. Admins get a bird's-eye attendance overview. Teachers only see the classes assigned to them — no accidental edits.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-gold"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={2} y={5} width={20} height={14} rx={2} ry={2} /><line x1={2} y1={10} x2={22} y2={10} /></svg></div>
          <h3>Fee Management</h3>
          <p>Define fee structures per term. Track charges and payments per student. Paystack integration for online payments with webhook + polling verification. Auto-notifications when fees are cleared.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-rose"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={18} y1={20} x2={18} y2={10} /><line x1={12} y1={20} x2={12} y2={4} /><line x1={6} y1={20} x2={6} y2={14} /></svg></div>
          <h3>Multi-Component Grading</h3>
          <p>CA (30%), Mid-term (20%), End-of-term Exam (50%) — computed automatically. Bulk grade entry per class. Finalization lock so grades can't be changed after closing. Configurable grade bands.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-mint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg></div>
          <h3>Report Cards &amp; PDF Generation</h3>
          <p>Auto-generated PDF report cards per student per term. Cards are held in WITHHELD state until all fees are cleared — the Result-Fee Intercept. Released cards are sent to guardians automatically.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
          <h3>Email &amp; SMS Communications</h3>
          <p>Templated messages sent over Email (Resend) and SMS (Arkesel — Ghana numbers). Notify parents about attendance, fee receipts, and report card releases. Every dispatch is logged.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 12 15 16 10" /></svg></div>
          <h3>Subscriptions &amp; Licensing</h3>
          <p>Per-school subscription with configurable grace periods. Expired-but-in-grace schools get read-only access. Fully expired schools are locked out — and can renew through Paystack directly in the app.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-sage"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={4} y1={9} x2={20} y2={9} /><line x1={4} y1={15} x2={20} y2={15} /><line x1={10} y1={3} x2={8} y2={21} /><line x1={16} y1={3} x2={14} y2={21} /></svg></div>
          <h3>Human-Readable Codes</h3>
          <p>No UUIDs shown to users. Every entity has a clean, meaningful code — school initials (VIS), admission numbers (VIS-001), teacher access codes (T-AO-ENGLP2-JHS2A). Professional and intuitive.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-rose"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
          <h3>Audit Log</h3>
          <p>Every significant action records an actor, action type, target, and timestamp — giving schools a tamper-evident administrative history for accountability and compliance.</p>
        </div>
        <div className="feature-card" data-reveal>
          <div className="feature-icon fi-sky"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={2} y={3} width={20} height={14} rx={2} ry={2} /><line x1={8} y1={21} x2={16} y2={21} /><line x1={12} y1={17} x2={12} y2={21} /></svg></div>
          <h3>Native Desktop App (Tauri)</h3>
          <p>Packaged as a native Windows .exe installer via Tauri. Works offline for core functions. No browser required — a real, installable desktop application. Coming soon to Microsoft Store.</p>
        </div>
      </div>
    </div>
  </section>
  {/* ══════════════════ STATS BAND ══════════════════ */}
  <section className="stats">
    <div className="container">
      <div className="stats-inner" data-reveal="scale">
        <div className="stat"><div className="num"><span className="count" data-target={3}>0</span></div><div className="lbl">Clear roles — Platform Admin, School Admin, Staff</div></div>
        <div className="stat"><div className="num"><span className="count" data-target={3}>0</span><span className="suffix">×</span></div><div className="lbl">Grading components: CA, Mid-term &amp; Exam</div></div>
        <div className="stat"><div className="num"><span className="count" data-target={100}>0</span><span className="suffix">%</span></div><div className="lbl">Tenant data isolation on every request</div></div>
        <div className="stat"><div className="num"><span className="count" data-target={2}>0</span></div><div className="lbl">Channels — Email &amp; SMS, fully logged</div></div>
      </div>
    </div>
  </section>
  {/* ══════════════════ HOW IT WORKS ══════════════════ */}
  <section className="how" id="how">
    <div className="container">
      <div className="section-label" data-reveal>How It Works</div>
      <h2 className="section-title" data-reveal>From setup to running<br />in under an hour</h2>
      <div className="how-steps">
        <div className="step" data-reveal="left">
          <div className="step-num">1</div>
          <div className="step-body">
            <h3>School registers and gets onboarded</h3>
            <p>The Platform Admin creates a school tenant with a unique code (e.g., VIS for Vilaworld International School), sets the subscription plan, and creates the School Admin account. The school is live immediately.</p>
          </div>
        </div>
        <div className="step" data-reveal="left">
          <div className="step-num">2</div>
          <div className="step-body">
            <h3>Admin sets up classes, subjects, and staff</h3>
            <p>The School Admin creates academic years, terms, class divisions (JHS 2A, JHS 2B, SHS 1…), subjects, and staff accounts. Teachers are assigned specific class-subject combinations so they only see what's relevant to them.</p>
          </div>
        </div>
        <div className="step" data-reveal="left">
          <div className="step-num">3</div>
          <div className="step-body">
            <h3>Students are enrolled (bulk or one by one)</h3>
            <p>Import students from a CSV or add them individually. Akademia assigns clean admission numbers automatically. Guardians are linked to students for notifications. Students are enrolled into classes per term.</p>
          </div>
        </div>
        <div className="step" data-reveal="left">
          <div className="step-num">4</div>
          <div className="step-body">
            <h3>Daily operations begin — attendance, grades, fees</h3>
            <p>Teachers mark attendance each morning. Grades are entered at end of assessment periods. Fee payments are recorded as they come in. Everything updates in real-time across the admin dashboard.</p>
          </div>
        </div>
        <div className="step" data-reveal="left">
          <div className="step-num">5</div>
          <div className="step-body">
            <h3>Report cards generated and released</h3>
            <p>At end of term, the Admin publishes results. The Result-Fee Intercept holds cards for students with outstanding fees. Once cleared, PDFs are generated and dispatched to guardians via email and SMS automatically.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ══════════════════ ROLES ══════════════════ */}
  <section className="roles" id="roles">
    <div className="container">
      <div className="section-label" data-reveal>Three Roles, One System</div>
      <h2 className="section-title" data-reveal>Everyone has exactly<br />the access they need</h2>
      <div className="roles-grid">
        <div className="role-card superadmin" data-reveal>
          <div className="role-tag">Platform Admin</div>
          <h3>Super Admin</h3>
          <p>The platform owner. Manages all schools, subscriptions, and has a bird's-eye view of every tenant on the system.</p>
          <ul className="role-perms">
            <li>Create and manage school tenants</li>
            <li>Set subscription plans and expiry</li>
            <li>View platform-wide audit logs</li>
            <li>Onboard new School Admins</li>
            <li>Monitor subscription health</li>
          </ul>
        </div>
        <div className="role-card schooladmin" data-reveal>
          <div className="role-tag">School Admin</div>
          <h3>School Administrator</h3>
          <p>The principal or administrator of a single school. Full control over their school's data, staff, and operations.</p>
          <ul className="role-perms">
            <li>Manage students and enrolments</li>
            <li>Manage staff and class assignments</li>
            <li>Set up fee structures and record payments</li>
            <li>Publish and withhold report cards</li>
            <li>Send communications to guardians</li>
            <li>View attendance and grade overviews</li>
          </ul>
        </div>
        <div className="role-card staff" data-reveal>
          <div className="role-tag">Teacher / Staff</div>
          <h3>Staff Member</h3>
          <p>A teacher assigned to specific classes and subjects. Clean, focused interface — no clutter from areas they don't own.</p>
          <ul className="role-perms">
            <li>Mark daily attendance for assigned classes</li>
            <li>Enter grades for assigned subjects</li>
            <li>View their subject &amp; class assignments</li>
            <li>PIN-gated secure grade entry</li>
            <li>Self-service PIN reset</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* ══════════════════ RESULT-FEE INTERCEPT ══════════════════ */}
  <section className="intercept">
    <div className="container">
      <div className="intercept-inner" data-reveal="scale">
        <div>
          <div className="intercept-label">✦ Signature Feature</div>
          <h2>The Result-Fee Intercept</h2>
          <p>The most powerful financial tool in Akademia. Report cards are automatically withheld until a student's outstanding fee balance reaches zero. No manual tracking. No awkward conversations. The system handles it.</p>
          <p>The moment a payment clears through Paystack, the card is released — the PDF is generated, uploaded, and the guardian is notified by both email and SMS. Instantly.</p>
        </div>
        <div className="intercept-flow">
          <div className="flow-step">
            <div className="flow-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" /><path d="M22 10v6" /></svg></div>
            <div className="flow-step-text"><strong>Exam scores finalized</strong>Report card is generated and placed in WITHHELD state</div>
          </div>
          <div className="flow-step">
            <div className="flow-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={2} y={5} width={20} height={14} rx={2} /><line x1={2} y1={10} x2={22} y2={10} /></svg></div>
            <div className="flow-step-text"><strong>Guardian makes payment</strong>Paystack webhook confirms payment in real-time</div>
          </div>
          <div className="flow-step">
            <div className="flow-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
            <div className="flow-step-text"><strong>Balance clears</strong>System automatically triggers report card release</div>
          </div>
          <div className="flow-step">
            <div className="flow-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
            <div className="flow-step-text"><strong>Notification sent</strong>Guardian receives email + SMS with PDF download link</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ══════════════════ WATCH DEMO (cinematic reel) ══════════════════ */}
  <section className="watch" id="watch">
    <div className="container">
      <div className="watch-intro">
        <div className="section-label" data-reveal>Product Demo</div>
        <h2 className="section-title" data-reveal>See Akademia in motion</h2>
        <p className="section-sub" data-reveal>A guided reel through the exact screens your staff will use every day — dashboard, staff, subscriptions, and sign in.</p>
      </div>
      <div className="demo-player" id="demoPlayer" data-reveal="scale">
        <div className="demo-chrome">
          <span className="demo-live"><span className="dot" /> Live Demo</span>
          <span className="demo-chrome-title">Akademia — Windows Desktop App</span>
          <span className="demo-chrome-time" id="demoTime">SCENE 1 / 4</span>
        </div>
        <div className="demo-frame">
          <div className="demo-scene active">
            <img src="images/Dashboard (Windows)-selection.png" alt="Akademia admin dashboard" loading="lazy" />
          </div>
          <div className="demo-scene">
            <img src="images/Staff (Windows)-selection.png" alt="Akademia staff management screen" loading="lazy" />
          </div>
          <div className="demo-scene">
            <img src="images/Subscription (Windows)-selection.png" alt="Akademia subscription and licensing screen" loading="lazy" />
          </div>
          <div className="demo-scene">
            <img src="images/Sign In (Windows)-selection.png" alt="Akademia secure sign in screen" loading="lazy" />
          </div>
          <div className="demo-caption">
            <span className="tag">Admin Dashboard</span>
            <h4 id="demoCaptionTitle">Real-time school overview</h4>
            <p id="demoCaptionDesc">Students, attendance, fees, and pending results — all at a glance.</p>
          </div>
          <button className="demo-playbtn" id="demoPlayBtn" aria-label="Pause demo">
            <svg className="ic-pause" width={22} height={22} viewBox="0 0 24 24" fill="currentColor"><rect x={6} y={5} width={4} height={14} rx={1} /><rect x={14} y={5} width={4} height={14} rx={1} /></svg>
            <svg className="ic-play" width={22} height={22} viewBox="0 0 24 24" fill="currentColor" style={{display: 'none'}}><path d="M8 5v14l11-7z" /></svg>
          </button>
        </div>
        <div className="demo-progress">
          <div className="demo-seg"><div className="fill" /></div>
          <div className="demo-seg"><div className="fill" /></div>
          <div className="demo-seg"><div className="fill" /></div>
          <div className="demo-seg"><div className="fill" /></div>
        </div>
      </div>
    </div>
  </section>
  {/* ══════════════════ SEE IT IN ACTION (carousel) ══════════════════ */}
  <section className="action" id="action">
    <div className="container">
      <div className="action-intro">
        <div className="section-label" data-reveal>See It In Action</div>
        <h2 className="section-title" data-reveal>A look inside Akademia</h2>
        <p className="section-sub" data-reveal>Every screen is purpose-built. These are real captures from the desktop app — clean, fast, and focused so administrators and teachers can get their work done without friction.</p>
      </div>
      <div className="carousel" id="screensCarousel" data-reveal="scale">
        <div className="carousel-stage">
          <button className="car-arrow car-prev" aria-label="Previous screenshot">‹</button>
          <div className="carousel-track">
            <div className="carousel-slide active">
              <img src="images/Dashboard (Windows)-selection.png" alt="Admin dashboard with student, attendance and fee metrics" loading="lazy" />
            </div>
            <div className="carousel-slide">
              <img src="images/Staff (Windows)-selection.png" alt="Staff management screen listing teachers and their assignments" loading="lazy" />
            </div>
            <div className="carousel-slide">
              <img src="images/Subscription (Windows)-selection.png" alt="Subscription and licensing screen with plan details" loading="lazy" />
            </div>
            <div className="carousel-slide">
              <img src="images/Sign In (Windows)-selection.png" alt="Akademia sign in screen" loading="lazy" />
            </div>
          </div>
          <button className="car-arrow car-next" aria-label="Next screenshot">›</button>
          <div className="carousel-dots">
            <button className="car-dot active" aria-label="Go to slide 1" />
            <button className="car-dot" aria-label="Go to slide 2" />
            <button className="car-dot" aria-label="Go to slide 3" />
            <button className="car-dot" aria-label="Go to slide 4" />
          </div>
        </div>
        <div className="carousel-meta">
          <h4 id="carTitle">Admin Dashboard</h4>
          <p id="carDesc">At-a-glance overview of students, attendance rate, fee collections, and pending results. Real-time data, no refresh needed.</p>
        </div>
        <div className="carousel-thumbs">
          <button className="car-thumb active" aria-label="Admin Dashboard"><img src="images/Dashboard (Windows)-selection.png" alt="" /></button>
          <button className="car-thumb" aria-label="Staff & Assignments"><img src="images/Staff (Windows)-selection.png" alt="" /></button>
          <button className="car-thumb" aria-label="Subscriptions & Licensing"><img src="images/Subscription (Windows)-selection.png" alt="" /></button>
          <button className="car-thumb" aria-label="Secure Sign In"><img src="images/Sign In (Windows)-selection.png" alt="" /></button>
        </div>
      </div>
    </div>
  </section>
  {/* ══════════════════ FAQ ══════════════════ */}
  <section className="faq" id="faq">
    <div className="container">
      <div className="faq-intro">
        <div className="section-label" data-reveal>FAQ</div>
        <h2 className="section-title" data-reveal>Questions we've been asked</h2>
        <p className="section-sub" data-reveal>Everything you need to know before getting started.</p>
      </div>
      <div className="faq-list">
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            What types of schools is Akademia designed for?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia is built specifically for Ghanaian Primary, JHS (Junior High School), and SHS (Senior High School) schools. The grading system, curriculum structure, terminology, and integrations (Paystack for fees, Arkesel for SMS) are all tailored to how Ghanaian schools operate — not a generic global template adapted for Africa.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            How does the Result-Fee Intercept work exactly?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">When grades are finalized for a term, Akademia generates a report card PDF for each student and places it in a WITHHELD state. It stays withheld until the student's full fee balance for that term is paid. The moment a payment is verified through Paystack (via webhook), the system automatically releases the card — generates the PDF, uploads it to storage, and sends the guardian a download link by both email and SMS. No admin intervention required.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            Can one Akademia installation serve multiple schools?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Yes — Akademia is built on a multi-tenant architecture. A single deployment can serve many schools simultaneously, each operating in complete data isolation. Students, staff, grades, and fees from School A are never visible to School B. Each school's data is scoped at the API level on every single request, making cross-school data leakage architecturally impossible.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            Is there an offline mode? What happens when the internet goes down?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia is packaged as a native Windows desktop app via Tauri — it's a real installed application, not a web browser shortcut. Offline support for core functions like attendance and grade entry is on our near-term roadmap, with sync happening automatically when the connection is restored. This is especially important for schools in areas with unreliable internet in Ghana.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            How does the grading system work?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Grades are made up of three components: Continuous Assessment (CA) at 30%, Mid-term at 20%, and End-of-term Exam at 50%. Akademia computes the weighted aggregate automatically. Grade bands (e.g., A1 for 80–100, B2 for 70–79, etc.) are fully configurable by the School Admin. Teachers can only enter grades for the specific class-subject combinations they've been assigned — preventing accidental or unauthorized edits.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            What payment methods are supported for school fees?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia integrates with Paystack as the primary payment processor — which supports mobile money (MTN MoMo, Vodafone Cash, AirtelTigo Money), card payments, and bank transfers for Ghanaian payers. Flutterwave is available as a secondary option. Payments are verified via webhook with a polling-based fallback to handle webhook delivery failures.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            How does SMS notification work? Do Ghanaian numbers work?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Yes — Akademia uses Arkesel as the primary SMS provider, which is built for Ghana and covers MTN, Vodafone, and AirtelTigo numbers reliably. Hubtel is available as a fallback. Phone numbers are automatically normalized to the correct format (e.g., 0244123456 → +233244123456) before sending. Every SMS dispatch is logged with its status, so you always know what was sent and to whom.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            What subscription plans are available?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia offers three plans: Basic, Standard, and Premium — each with different student capacity limits and feature access. Subscriptions are annual and managed per school (tenant). Schools that miss a renewal get a configurable grace period with read-only access before being locked out. Renewal is handled directly through Paystack from within the app itself.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            Is Akademia available on Mac or mobile?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia is currently a Windows desktop application, launching on the Microsoft Store. A macOS version packaged via the App Store is in active development. A mobile companion app (PWA or native) for guardians to check fees, attendance, and results is on our product roadmap. The core web application runs in any modern browser as well.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            How secure is student data? These are minors.
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">We take data security seriously, especially given that student data involves minors. All data is encrypted in transit (HTTPS/TLS) and at rest (Supabase PostgreSQL with encryption). Authentication uses short-lived JWTs via Supabase Auth. Every action in the system is logged in the audit trail. Tenant isolation prevents any cross-school data access. We're aligned with Ghana's Data Protection Act, 2012 (Act 843), and are building toward a full data protection compliance posture.</div></div>
        </div>
      </div>
    </div>
  </section>
  {/* ══════════════════ STORE ══════════════════ */}
  <section className="store" id="store">
    <div className="container">
      <div className="section-label" data-reveal>Available Now</div>
      <h2 data-reveal>Akademia is ready for Windows.</h2>
      <p data-reveal>A native desktop application, clean and fast, designed for the schools that shape Ghana's future. macOS is on the way.</p>
      <div className="badges" data-reveal>
        <a href="https://github.com/nonydev27/akademia-releases/releases/download/v0.2.4/Akademia_0.2.4_x64-setup.exe" target="_blank" rel="noopener" className="badge-btn primary-download" aria-label="Download Akademia for Windows">
          <span className="badge-icon">
            <svg viewBox="0 0 88 88" fill="currentColor"><rect x={0} y={0} width={41} height={41} /><rect x={47} y={0} width={41} height={41} /><rect x={0} y={47} width={41} height={41} /><rect x={47} y={47} width={41} height={41} /></svg>
          </span>
          <span className="badge-text">
            <small>Direct Download (.exe)</small>
            <strong>Get it for Windows</strong>
          </span>
        </a>
        <a href="#" className="badge-btn outline disabled" aria-disabled="true" aria-label="Microsoft Store — coming soon" tabIndex={-1}>
          <span className="badge-icon">
            <svg viewBox="0 0 23 23"><rect x={1} y={1} width={10} height={10} fill="#F25022" /><rect x={12} y={1} width={10} height={10} fill="#7FBA00" /><rect x={1} y={12} width={10} height={10} fill="#00A4EF" /><rect x={12} y={12} width={10} height={10} fill="#FFB900" /></svg>
          </span>
          <span className="badge-text" style={{color: 'var(--ink)'}}>
            <small>Coming soon to</small>
            <strong>Microsoft Store</strong>
          </span>
        </a>
        <a href="#" className="badge-btn outline disabled" aria-disabled="true" aria-label="App Store — coming soon" tabIndex={-1}>
          <span className="badge-icon" style={{color: 'var(--ink)'}}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 7.5c-.3-1.8-1.9-3-3.6-2.8.1 1.8 1.7 3.1 3.6 2.8z" /><path d="M17.5 10.3c-1.6-1.7-4-1.7-5-.5-1-1.2-3.5-1.2-5 .5-2.2 2.4-1.7 7 1 10 1.1 1.3 2.1 1.9 3.2 1.9.9 0 1.3-.4 2-.4.7 0 1.1.4 2 .4 1.1 0 2.2-.8 3.2-2.1 1-1.3 1.4-2.5 1.4-2.6-3-.9-3.3-4.7-1.8-6.2.5-.5-.4-1-1-1z" /></svg>
          </span>
          <span className="badge-text" style={{color: 'var(--ink)'}}>
            <small>Coming soon on the</small>
            <strong>App Store</strong>
          </span>
        </a>
      </div>
      <p className="coming-soon-note" data-reveal>
        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2="12.01" y2={16} /></svg>
        Microsoft Store listing is in review — grab the direct download for now. Get in touch to be notified when the store listings go live.
      </p>
    </div>
  </section>
  {/* ══════════════════ FOOTER ══════════════════ */}
  <footer>
    <div className="footer-grid">
      <div>
        <span className="footer-brand">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Akademia">
            <defs>
              <linearGradient id="footlogo-bg" x1={0} y1={0} x2={40} y2={40} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e3a8a" /><stop offset="100%" stopColor="#312e81" />
              </linearGradient>
              <linearGradient id="footlogo-cap" x1={0} y1={0} x2={40} y2={20} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#dbeafe" />
              </linearGradient>
              <linearGradient id="footlogo-tassel" x1={0} y1={0} x2={6} y2={6} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fcd34d" /><stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <rect width={40} height={40} rx={10} fill="url(#footlogo-bg)" />
            <polygon points="20,9 30,13.8 20,18.6 10,13.8" fill="url(#footlogo-cap)" />
            <path d="M13,15 L13,20.5 C13,23.3 16.1,25.6 20,25.6 C23.9,25.6 27,23.3 27,20.5 L27,15 L20,18.6 Z" fill="#ffffff" fillOpacity="0.9" />
            <line x1={30} y1="13.8" x2={30} y2={20} stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
            <circle cx={30} cy="21.2" r="1.8" fill="url(#footlogo-tassel)" />
            <line x1="28.8" y1={23} x2="28.8" y2={27} stroke="#fcd34d" strokeWidth="0.9" strokeLinecap="round" />
            <line x1={30} y1={23} x2={30} y2={27} stroke="#fcd34d" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="31.2" y1={23} x2="31.2" y2={27} stroke="#fcd34d" strokeWidth="0.9" strokeLinecap="round" />
            <rect x="19.3" y="27.5" width="1.4" height={7} rx="0.6" fill="#ffffff" fillOpacity="0.85" />
            <path d="M19.3,28 C16,27.5 13,28.5 12,29.5 L12,34.5 C13.2,33.5 16.2,32.8 19.3,33.3 Z" fill="#ffffff" fillOpacity="0.55" />
            <path d="M20.7,28 C24,27.5 27,28.5 28,29.5 L28,34.5 C26.8,33.5 23.8,32.8 20.7,33.3 Z" fill="#ffffff" fillOpacity="0.55" />
          </svg>
          Akademia
        </span>
        <p className="footer-desc">A modern school management platform built for Ghanaian Primary, JHS, and SHS schools. Attendance, fees, grading, and report cards — in one elegant desktop app.</p>
      </div>
      <div className="footer-col">
        <h5>Product</h5>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#action">Screenshots</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#store">Download</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Roles</h5>
        <ul>
          <li><a href="#roles">Platform Admin</a></li>
          <li><a href="#roles">School Admin</a></li>
          <li><a href="#roles">Staff / Teachers</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="https://github.com/nonydev27/akademia-showcase" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 Akademia. All rights reserved.</p>
      <p className="made">Built for Ghana 🇬🇭</p>
    </div>
  </footer>
</div>


  );
}
