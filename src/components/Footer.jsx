import React from 'react';
export default function Footer() {
  return (
  <footer>
    <div className="footer-grid">
      <div>
        <span className="footer-brand">
          <img src="images/brand-logo-horizontal-white.svg" alt="Akademia" width="274" height="64" />
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
  );
}
