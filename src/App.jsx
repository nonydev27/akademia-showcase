import React, { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import StoryScroller from './components/StoryScroller.jsx';
import Features from './components/Features.jsx';
import StatsBand from './components/StatsBand.jsx';
import Intercept from './components/Intercept.jsx';
import Roles from './components/Roles.jsx';
import DemoReel from './components/DemoReel.jsx';
import Carousel from './components/Carousel.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Store from './components/Store.jsx';
import Footer from './components/Footer.jsx';
import { setupSiteInteractions } from './site-interactions.js';

export default function App() {
  useEffect(() => {
    const cleanup = setupSiteInteractions();
    return () => cleanup && cleanup();
  }, []);

  return (
    <div className="app-shell">
      {/* Top Reading Progress Bar */}
      <div className="progress" id="progress" />

      {/* Floating Cursor Glow */}
      <div className="cursor-glow" id="cursorGlow" />

      {/* Navigation */}
      <Nav />

      {/* 1. Hero with Three.js 3D Laptop Canvas & Scrubbed Parallax */}
      <Hero />

      {/* 2. Marquee */}
      <Marquee />

      {/* 3. Flagship Pinned Scroll-Scrubbed Storytelling Experience */}
      <StoryScroller />

      {/* 4. Features Bento Grid with 3D Tilt */}
      <Features />

      {/* 5. Metrics & Isolated Tenant Architecture Stats */}
      <StatsBand />

      {/* 6. Signature Technology: Result-Fee Intercept & Interactive Simulator */}
      <Intercept />

      {/* 7. Roles: Super Admin, School Admin & Teachers */}
      <Roles />

      {/* 8. Cinematic Demo Reel */}
      <DemoReel />

      {/* 9. Interactive 8-Screen Tour Carousel */}
      <Carousel />

      {/* 10. Turnkey Workflow Timeline */}
      <HowItWorks />

      {/* 11. Predictable Local Pricing in Cedis (GHS) */}
      <Pricing />

      {/* 12. FAQ Accordion */}
      <Faq />

      {/* 13. Native Desktop App Store & MSIX Download */}
      <Store />

      {/* 14. Footer with Live Operational Status */}
      <Footer />
    </div>
  );
}
