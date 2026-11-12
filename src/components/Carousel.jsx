import React, { useState, useEffect, useCallback, useRef } from 'react';
import { screens } from '../data/screens.js';
import { sound } from '../utils/audio.js';

export default function Carousel() {
  const [idx, setIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  const go = useCallback((n) => {
    sound.playClick();
    setIdx((n + screens.length) % screens.length);
  }, []);

  const next = useCallback(() => {
    go(idx + 1);
  }, [idx, go]);

  const prev = useCallback(() => {
    go(idx - 1);
  }, [idx, go]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % screens.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying]);

  const currentScreen = screens[idx];

  return (
    <section className="action" id="action">
      <div className="section-watermark" aria-hidden="true">
        GALLERY
      </div>

      <div className="container">
        <div className="action-intro">
          <div className="section-label">
            <span className="label-gem" /> Detailed Screen Tour
          </div>
          <h2 className="section-title">
            Every screen engineered for speed, <br />
            clarity, and ease of use
          </h2>
          <p className="section-sub">
            Take a deep-dive tour into the eight primary workspaces of the Akademia desktop application.
          </p>
        </div>

        <div
          className="carousel-unified"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Showcase Stage */}
          <div className="carousel-stage-box">
            <div className="window-bar">
              <div className="dots">
                <span className="wdot" />
                <span className="wdot" />
                <span className="wdot" />
              </div>
              <div className="window-title">
                Akademia — {currentScreen.label}
              </div>
              <span className="window-pill">Screen {idx + 1} of {screens.length}</span>
            </div>

            <div className="carousel-view-area">
              <img
                src={currentScreen.image}
                alt={currentScreen.alt}
                className="carousel-main-image"
                loading="eager"
              />

              {/* Prev / Next Floating Navigation Arrows */}
              <button
                type="button"
                className="car-arrow car-prev"
                onClick={prev}
                aria-label="Previous screenshot"
              >
                ‹
              </button>
              <button
                type="button"
                className="car-arrow car-next"
                onClick={next}
                aria-label="Next screenshot"
              >
                ›
              </button>
            </div>
          </div>

          {/* Screen Details & Key Feature Points */}
          <div className="carousel-details-panel">
            <div className="carousel-details-header">
              <span className="car-tagline">
                ✦ Feature Workspace: {currentScreen.thumbLabel}
              </span>
              <h3>{currentScreen.title}</h3>
            </div>

            <ul className="car-points-grid">
              {currentScreen.points.map((point) => (
                <li key={point}>
                  <span className="point-check">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Thumbnails Selector */}
          <div className="carousel-thumbs-track">
            {screens.map((screen, i) => (
              <button
                key={screen.id}
                type="button"
                className={`car-thumb-item ${i === idx ? 'active' : ''}`}
                onClick={() => {
                  sound.playStep();
                  setIdx(i);
                }}
                aria-label={`View ${screen.thumbLabel}`}
              >
                <div className="thumb-img-wrap">
                  <img src={screen.image} alt={screen.thumbLabel} />
                </div>
                <span className="thumb-name">{screen.thumbLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
