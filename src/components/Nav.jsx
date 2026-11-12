import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Globe, ChevronDown, Laptop, Volume2, VolumeX, Menu, X } from 'lucide-react';
import logoImg from '../assets/images/brand-logo-horizontal.svg';
import logoWhiteImg from '../assets/images/brand-logo-horizontal-white.svg';
import SoundToggle from './SoundToggle.jsx';
import { sound } from '../utils/audio.js';
import { useApp } from '../context/AppContext.jsx';

export default function Nav() {
  const { theme, toggleTheme, lang, setLang, t } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e, targetId) => {
    sound.playClick();
    setMenuOpen(false);

    if (window.__lenis) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.__lenis.scrollTo(target, { offset: -72, duration: 1.2 });
      }
    }
  };

  const handleLangSelect = (selectedLang) => {
    sound.playClick();
    setLang(selectedLang);
    setLangDropdownOpen(false);
  };

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'tw', label: 'Asante Twi', native: 'Twi' },
    { code: 'fr', label: 'Français', native: 'Français' },
    { code: 'ga', label: 'Ga', native: 'Gã' },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <nav id="nav" className={`nav-main ${scrolled ? 'scrolled' : ''}`}>
      <a
        href="#home"
        className="nav-logo"
        aria-label="Akademia home"
        onClick={(e) => handleNavClick(e, '#home')}
      >
        <img
          src={theme === 'dark' ? logoWhiteImg : logoImg}
          alt="Akademia"
          width="274"
          height="64"
        />
      </a>

      {/* Center Nav Links (Story mode REMOVED) */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>
            {t.nav.features}
          </a>
        </li>
        <li>
          <a href="#watch" onClick={(e) => handleNavClick(e, '#watch')}>
            {t.nav.screens}
          </a>
        </li>
        <li>
          <a href="#how" onClick={(e) => handleNavClick(e, '#how')}>
            {t.nav.howItWorks}
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')}>
            {t.nav.pricing}
          </a>
        </li>
        <li>
          <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>
            {t.nav.faq}
          </a>
        </li>
        <li className="mobile-only-cta">
          <a
            href="#store"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, '#store')}
          >
            <Laptop size={16} />
            <span>{t.nav.getApp}</span>
          </a>
        </li>
      </ul>

      {/* Right Controls: Language Selector + Theme Toggle + Sound Toggle + Windows CTA */}
      <div className="nav-actions">
        {/* Language Selector Dropdown */}
        <div className="nav-lang-picker" ref={langRef}>
          <button
            type="button"
            className="nav-lang-btn"
            onClick={() => {
              sound.playClick();
              setLangDropdownOpen(!langDropdownOpen);
            }}
            aria-expanded={langDropdownOpen}
            aria-label="Select your language"
            title="Select Language / Kasa Ahodoɔ"
          >
            <Globe size={15} className="lang-icon" />
            <span className="lang-code-text">{currentLangObj.native}</span>
            <ChevronDown size={13} className={`lang-chevron ${langDropdownOpen ? 'open' : ''}`} />
          </button>

          {langDropdownOpen && (
            <div className="nav-lang-dropdown" role="menu">
              <div className="lang-dropdown-header">Select Language</div>
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={`lang-option ${l.code === lang ? 'active' : ''}`}
                  onClick={() => handleLangSelect(l.code)}
                  role="menuitem"
                >
                  <span className="lang-native">{l.native}</span>
                  <span className="lang-english">{l.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dark / Light Theme Toggle (HCI Compliant) */}
        <button
          type="button"
          className="nav-theme-btn"
          onClick={() => {
            sound.playClick();
            toggleTheme();
          }}
          aria-label={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        >
          {theme === 'dark' ? (
            <Sun size={17} className="theme-icon sun" />
          ) : (
            <Moon size={17} className="theme-icon moon" />
          )}
        </button>

        {/* Audio Equalizer Toggle */}
        <SoundToggle />

        {/* Direct Desktop App CTA */}
        <a
          href="#store"
          className="nav-cta desktop-only-cta"
          onClick={(e) => handleNavClick(e, '#store')}
        >
          <Laptop size={15} />
          <span>{t.nav.getApp}</span>
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
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
