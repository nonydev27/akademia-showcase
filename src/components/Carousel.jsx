import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { screens } from '../data/screens.js';

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion] = useState(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
  );
  const touchStartX = useRef(null);
  const screen = screens[index];

  useEffect(() => {
    if (paused || reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % screens.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const select = (nextIndex) => {
    setIndex((nextIndex + screens.length) % screens.length);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
  };

  return (
    <section
      className="action"
      id="action"
      aria-roledescription="carousel"
      aria-label="Akademia screenshots"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={handleBlur}
    >
      <div className="container">
        <div className="action-intro">
          <div className="section-label" data-reveal>See It In Action</div>
          <h2 className="section-title" data-reveal>A look inside Akademia</h2>
          <p className="section-sub" data-reveal>Explore real screens from the desktop app, with notes explaining what each one shows.</p>
        </div>
        <div className="carousel" id="screensCarousel" data-reveal="scale">
          <div
            className="carousel-stage"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const distance = event.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(distance) > 40) select(index + (distance < 0 ? 1 : -1));
              touchStartX.current = null;
            }}
          >
            <button type="button" className="car-arrow car-prev" aria-label="Previous screenshot" onClick={() => select(index - 1)}>‹</button>
            <div className="carousel-track">
              {screens.map((item, itemIndex) => (
                <div
                  key={item.id}
                  className={`carousel-slide${itemIndex === index ? ' active' : ''}`}
                  aria-hidden={itemIndex !== index}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
              ))}
            </div>
            <button type="button" className="car-arrow car-next" aria-label="Next screenshot" onClick={() => select(index + 1)}>›</button>
            <div className="carousel-dots">
              {screens.map((item, itemIndex) => (
                <button
                  type="button"
                  key={item.id}
                  className={`car-dot${itemIndex === index ? ' active' : ''}`}
                  aria-label={`Show ${item.label}`}
                  aria-current={itemIndex === index ? 'true' : undefined}
                  onClick={() => select(itemIndex)}
                />
              ))}
            </div>
          </div>
          <div className="carousel-meta" aria-live="polite">
            <h4>{screen.label}</h4>
            <p className="car-tagline">{screen.title}</p>
            <ul className="car-points">
              {screen.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
          <div className="carousel-thumbs">
            {screens.map((item, itemIndex) => (
              <button
                type="button"
                key={item.id}
                className={`car-thumb${itemIndex === index ? ' active' : ''}`}
                aria-label={`Show ${item.label}`}
                aria-current={itemIndex === index ? 'true' : undefined}
                onClick={() => select(itemIndex)}
              >
                <img src={item.image} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
