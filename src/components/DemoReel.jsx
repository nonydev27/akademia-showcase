export default function DemoReel() {
  return (
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
  );
}
