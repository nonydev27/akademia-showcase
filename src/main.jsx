import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

if (typeof window.IntersectionObserver !== 'function') {
  document.documentElement.classList.add('no-observer');
}

createRoot(document.getElementById('root')).render(<App />);
