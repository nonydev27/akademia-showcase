import React from 'react';
import boxartImg from '../assets/images/store/boxart-2160x2160.png';
import { sound } from '../utils/audio.js';

export default function Store() {
  return (
    <section className="store" id="store">
      <div className="section-watermark" aria-hidden="true">
        DESKTOP
      </div>

      <div className="container">
        <div className="section-label">
          <span className="label-gem" /> Native Desktop Performance
        </div>
        <h2>Akademia is ready for Windows.</h2>
        <p>
          A native desktop application — crisp, 60fps fast, and engineered for the
          educators and school heads who shape Ghana's future. macOS version is currently in development.
        </p>

        {/* 3D Boxart Showcase */}
        <div className="store-boxart-wrap">
          <div className="boxart-3d-card">
            <img
              src={boxartImg}
              alt="Akademia Windows Edition Boxart"
              className="boxart-img"
              loading="lazy"
            />
            <div className="boxart-badge">
              <span>v0.3.4.0 • 64-bit Architecture</span>
            </div>
          </div>
        </div>

        {/* Download Badges */}
        <div className="badges">
          <a
            href="downloads/Akademia_0.3.4.0_x64.msix"
            download="Akademia_0.3.4.0_x64.msix"
            className="badge-btn primary-download"
            aria-label="Download Akademia for Windows"
            onClick={() => sound.playUnlock()}
          >
            <span className="badge-icon">
              <svg viewBox="0 0 88 88" fill="currentColor">
                <rect x={0} y={0} width={41} height={41} />
                <rect x={47} y={0} width={41} height={41} />
                <rect x={0} y={47} width={41} height={41} />
                <rect x={47} y={47} width={41} height={41} />
              </svg>
            </span>
            <span className="badge-text">
              <small>Direct Installer (.msix)</small>
              <strong>Download for Windows</strong>
            </span>
          </a>

          <a
            href="https://www.microsoft.com/en-gh/p/akademia/9pc0g9hxlsnc"
            className="badge-btn outline"
            aria-label="Microsoft Store"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
          >
            <span className="badge-icon">
              <svg viewBox="0 0 23 23">
                <rect x={1} y={1} width={10} height={10} fill="#F25022" />
                <rect x={12} y={1} width={10} height={10} fill="#7FBA00" />
                <rect x={1} y={12} width={10} height={10} fill="#00A4EF" />
                <rect x={12} y={12} width={10} height={10} fill="#FFB900" />
              </svg>
            </span>
            <span className="badge-text" style={{ color: 'var(--ink)' }}>
              <small>Certified on the</small>
              <strong>Microsoft Store</strong>
            </span>
          </a>

          <div
            className="badge-btn outline disabled"
            aria-disabled="true"
            aria-label="Apple App Store — coming soon"
          >
            <span className="badge-icon" style={{ color: 'var(--ink)' }}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.5 7.5c-.3-1.8-1.9-3-3.6-2.8.1 1.8 1.7 3.1 3.6 2.8z" />
                <path d="M17.5 10.3c-1.6-1.7-4-1.7-5-.5-1-1.2-3.5-1.2-5 .5-2.2 2.4-1.7 7 1 10 1.1 1.3 2.1 1.9 3.2 1.9.9 0 1.3-.4 2-.4.7 0 1.1.4 2 .4 1.1 0 2.2-.8 3.2-2.1 1-1.3 1.4-2.5 1.4-2.6-3-.9-3.3-4.7-1.8-6.2.5-.5-.4-1-1-1z" />
              </svg>
            </span>
            <span className="badge-text" style={{ color: 'var(--ink)' }}>
              <small>macOS in progress</small>
              <strong>Apple Silicon / Intel</strong>
            </span>
          </div>
        </div>

        <p className="coming-soon-note">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx={12} cy={12} r={10} />
            <line x1={12} y1={8} x2={12} y2={12} />
            <line x1={12} y1={16} x2="12.01" y2={16} />
          </svg>
          Build 0.3.4.0 (Windows 10 / 11 64-bit).{' '}
          <a
            href="https://github.com/nonydev27/akademia-releases/releases/tag/v0.3.4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Release Notes & Checksums
          </a>
        </p>
      </div>
    </section>
  );
}
