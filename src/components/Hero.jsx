export default function Hero() {
  return (
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
  );
}
