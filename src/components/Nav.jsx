import React, { useState, useEffect } from 'react';
import logoImg from '../assets/images/brand-logo-horizontal.svg';
import SoundToggle from './SoundToggle.jsx';
import { sound } from '../utils/audio.js';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    sound.playClick();
    setMenuOpen(false);

    // If lenis is attached to window, use lenis smooth scroll
    if (window.__lenis) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.__lenis.scrollTo(target, { offset: -68, duration: 1.2 });
      }
    }
  };

  return (
    <nav id="nav" className={`nav-main ${scrolled ? 'scrolled' : ''}`}>
      <a
        href="#home"
        className="nav-logo"
        aria-label="Akademia home"
        onClick={(e) => handleNavClick(e, '#home')}
      >
        <img src={logoImg} alt="Akademia" width="274" height="64" />
      </a>

      {/* Center Nav Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="#story" onClick={(e) => handleNavClick(e, '#story')}>
            <span className="nav-tag-dot" /> Story Mode
          </a>
        </li>
        <li>
          <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>
            Features
          </a>
        </li>
        <li>
          <a href="#action" onClick={(e) => handleNavClick(e, '#action')}>
            Screens
          </a>
        </li>
        <li>
          <a href="#how" onClick={(e) => handleNavClick(e, '#how')}>
            How It Works
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>
            FAQ
          </a>
        </li>
        <li className="mobile-only-cta">
          <a
            href="#store"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, '#store')}
          >
            <span>Get Windows App</span>
          </a>
        </li>
      </ul>

      {/* Right Action Cluster: Sound Toggle + Desktop App CTA */}
      <div className="nav-actions">
        <SoundToggle />

        <a
          href="#store"
          className="nav-cta desktop-only-cta"
          onClick={(e) => handleNavClick(e, '#store')}
        >
          <span>Get Windows App</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => {
            sound.playClick();
            setMenuOpen(!menuOpen);
          }}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <svg className="ic-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg className="ic-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
