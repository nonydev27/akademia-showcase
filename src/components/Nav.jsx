import React from 'react';
import logoImg from '../assets/images/brand-logo-horizontal.svg';

export default function Nav() {
  return (
  <nav id="nav">
    <a href="#home" className="nav-logo" aria-label="Akademia home">
      <img src={logoImg} alt="Akademia" width="274" height="64" />
    </a>
    <ul className="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#watch">Demo</a></li>
      <li><a href="#action">Screenshots</a></li>
      <li><a href="#how">How It Works</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#store" className="nav-cta"><span>Get the App</span></a></li>
    </ul>
  </nav>
  );
}
