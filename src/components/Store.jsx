import React from 'react';
import { Download, Laptop, Info, CheckCircle2 } from 'lucide-react';
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
          <Laptop size={15} className="label-icon-blue" />
          <span>Native Desktop Performance</span>
        </div>
        <h2>Akademia is ready for Windows</h2>
        <p>
          A native desktop application engineered for 60 frames per second responsiveness,
          offline resiliency, and ease of use for the educators shaping Ghana future.
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
              <CheckCircle2 size={13} className="badge-icon-verified" />
              <span>Version 0.3.4.0 • 64-bit Architecture</span>
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
              <Download size={22} />
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
              <svg viewBox="0 0 23 23" width="22" height="22">
                <rect x={1} y={1} width={10} height={10} fill="#F25022" />
                <rect x={12} y={1} width={10} height={10} fill="#7FBA00" />
                <rect x={1} y={12} width={10} height={10} fill="#00A4EF" />
                <rect x={12} y={12} width={10} height={10} fill="#FFB900" />
              </svg>
            </span>
            <span className="badge-text">
              <small>Certified on the</small>
              <strong>Microsoft Store</strong>
            </span>
          </a>

          <div
            className="badge-btn outline disabled"
            aria-disabled="true"
            aria-label="Apple macOS version in progress"
          >
            <span className="badge-icon">
              <Laptop size={20} />
            </span>
            <span className="badge-text">
              <small>macOS in progress</small>
              <strong>Apple Silicon and Intel</strong>
            </span>
          </div>
        </div>

        <p className="coming-soon-note">
          <Info size={14} className="info-icon" />
          <span>Build 0.3.4.0 for Windows 10 and 11. </span>
          <a
            href="https://github.com/nonydev27/akademia-releases/releases/tag/v0.3.4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Release Notes and Checksums
          </a>
        </p>
      </div>
    </section>
  );
}
