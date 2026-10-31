import React from 'react';
export default function Features() {
  return (
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
          <p>Packaged as a native Windows desktop app with direct MSIX and release installers available. No browser required — a real, installable application.</p>
        </div>
      </div>
    </div>
  </section>
  );
}
