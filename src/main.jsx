import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Failsafe: if IntersectionObserver is unavailable or setup ever fails,
// never leave the page blank — show all data-reveal content immediately.
if (!('IntersectionObserver' in window)) {
  document.documentElement.classList.add('no-observer');
}

console.log('AKADEMIA_MAIN_START');
createRoot(document.getElementById('root')).render(<App />);
