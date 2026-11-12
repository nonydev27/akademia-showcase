import React from 'react';
import { ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import logoWhiteImg from '../assets/images/brand-logo-horizontal-white.svg';
import { sound } from '../utils/audio.js';
import { useApp } from '../context/AppContext.jsx';

export default function Footer() {
  const { t } = useApp();

  const handleBackToTop = () => {
    sound.playClick();
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-awwwards">
      <div className="container">
        {/* Top bar with Accessible Back to Top Button (status text removed per request) */}
        <div className="footer-top-action-bar">
          <div className="footer-status-pill">
            <span className="status-dot-active" />
            <span>Akademia Production Systems</span>
          </div>

          <button
            type="button"
            className="footer-back-to-top-btn"
            onClick={handleBackToTop}
            aria-label="Scroll back to top of page"
            title="Back to Top"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={15} className="arrow-icon" />
          </button>
        </div>

        <div className="footer-grid">
          <div className="footer-col-brand">
            <a href="#home" className="footer-brand" onClick={handleBackToTop}>
              <img src={logoWhiteImg} alt="Akademia" width="274" height="64" />
            </a>
            <p className="footer-desc">{t.footer.desc}</p>
            <div className="footer-ghana-badge">
              <span className="ghana-flag-badge">
                <span className="gh-stripe red" />
                <span className="gh-stripe gold" />
                <span className="gh-stripe green" />
              </span>
              <span>{t.footer.builtFor}</span>
            </div>
          </div>

          <div className="footer-col">
            <h5>Navigation</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#watch">Interactive Tour</a></li>
              <li><a href="#intercept">Result Fee Intercept</a></li>
              <li><a href="#action">Screenshots</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#roles">Role Permissions</a></li>
              <li><a href="#pricing">Pricing Plans</a></li>
              <li><a href="#store">Windows Download</a></li>
              <li><a href="#faq">Frequently Asked</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Platform</h5>
            <ul>
              <li><a href="https://github.com/nonydev27/akademia-releases/releases/tag/v0.3.4" target="_blank" rel="noopener noreferrer">Release Notes (v0.3.4)</a></li>
              <li><a href="https://github.com/nonydev27/akademia-showcase" target="_blank" rel="noopener noreferrer">Source Code</a></li>
              <li><a href="https://www.microsoft.com/en-gh/p/akademia/9pc0g9hxlsnc" target="_blank" rel="noopener noreferrer">Microsoft Store</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Akademia. All rights reserved.</p>
          <p className="made">Built for Ghanaian Excellence</p>
        </div>
      </div>
    </footer>
  );
}
