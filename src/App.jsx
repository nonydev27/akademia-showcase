import React, { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Features from './components/Features.jsx';
import StatsBand from './components/StatsBand.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Roles from './components/Roles.jsx';
import Intercept from './components/Intercept.jsx';
import DemoReel from './components/DemoReel.jsx';
import Carousel from './components/Carousel.jsx';
import Faq from './components/Faq.jsx';
import Store from './components/Store.jsx';
import Footer from './components/Footer.jsx';
import { setupSiteInteractions } from './site-interactions.js';

export default function App() {
  useEffect(() => setupSiteInteractions(), []);

  return (
    <div>
      <div className="progress" id="progress" />
      <div className="cursor-glow" id="cursorGlow" />
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <StatsBand />
      <HowItWorks />
      <Roles />
      <Intercept />
      <DemoReel />
      <Carousel />
      <Faq />
      <Store />
      <Footer />
    </div>
  );
}
