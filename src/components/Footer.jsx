import React from 'react';
import logoWhiteImg from '../assets/images/brand-logo-horizontal-white.svg';
import { sound } from '../utils/audio.js';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
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
        <div className="footer-status-bar">
          <div className="status-indicator">
            <span className="status-dot-live" />
            <span>All Services Operational • Paystack Webhooks • Arkesel SMS Gateway • Desktop Engine</span>
          </div>
          <button type="button" className="footer-back-to-top" onClick={scrollToTop}>
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>

        <div className="footer-grid">
          <div className="footer-col-brand">
            <a href="#home" className="footer-brand" onClick={scrollToTop}>
              <img src={logoWhiteImg} alt="Akademia" width="274" height="64" />
            </a>
            <p className="footer-desc">
              The unified desktop operating system for Ghanaian education.
              Attendance roll call, Paystack fee settlement, WAEC/GES 30/20/50 assessment,
              and tamper-proof QR terminal reports.
            </p>
            <div className="footer-ghana-badge">
              <span className="flag">🇬🇭</span> Built with pride for schools across Accra, Kumasi, Takoradi & Tamale
            </div>
          </div>

          <div className="footer-col">
            <h5>Navigation</h5>
            <ul>
              <li><a href="#story">Story Mode</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#intercept">Result-Fee Intercept</a></li>
              <li><a href="#action">Screenshots</a></li>
              <li><a href="#watch">Video Tour</a></li>
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
          <p className="made">Engineered for Ghanaian Excellence</p>
        </div>
      </div>
    </footer>
  );
}
