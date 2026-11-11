import React from 'react';
export default function Store() {
  return (
  <section className="store" id="store">
    <div className="container">
      <div className="section-label" data-reveal>Available Now</div>
      <h2 data-reveal>Akademia is ready for Windows.</h2>
      <p data-reveal>A native desktop application, clean and fast, designed for the schools that shape Ghana's future. macOS is on the way.</p>
      <div className="badges" data-reveal>
        <a href="downloads/Akademia_0.3.4.0_x64.msix" download="Akademia_0.3.4.0_x64.msix" className="badge-btn primary-download" aria-label="Download Akademia for Windows">
          <span className="badge-icon">
            <svg viewBox="0 0 88 88" fill="currentColor"><rect x={0} y={0} width={41} height={41} /><rect x={47} y={0} width={41} height={41} /><rect x={0} y={47} width={41} height={41} /><rect x={47} y={47} width={41} height={41} /></svg>
          </span>
          <span className="badge-text">
            <small>Direct Download (.msix)</small>
            <strong>Get it for Windows</strong>
          </span>
        </a>
        <a href="https://www.microsoft.com/en-gh/p/akademia/9pc0g9hxlsnc" className="badge-btn outline" aria-disabled="true" aria-label="Microsoft Store — coming soon" tabIndex={-1}>
          <span className="badge-icon">
            <svg viewBox="0 0 23 23"><rect x={1} y={1} width={10} height={10} fill="#F25022" /><rect x={12} y={1} width={10} height={10} fill="#7FBA00" /><rect x={1} y={12} width={10} height={10} fill="#00A4EF" /><rect x={12} y={12} width={10} height={10} fill="#FFB900" /></svg>
          </span>
          <span className="badge-text" style={{color: 'var(--ink)'}}>
            <small> Now on the</small>
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
        Version 0.3.4.0 for Windows.{' '}
        <a href="https://github.com/nonydev27/akademia-releases/releases/tag/v0.3.4" target="_blank" rel="noopener noreferrer">
          Release notes and other installers
        </a>
      </p>
    </div>
  </section>
  );
}
