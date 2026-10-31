import { useEffect, useState, useCallback, useRef } from "react";
import { screens } from "../data/screens.js";

export default function Carousel() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const go = useCallback(
    (n) => setIdx((n + screens.length) % screens.length),
    [],
  );

  const restart = useCallback(() => {
    clearInterval(timerRef.current);
    if (!reduceMotion)
      timerRef.current = setInterval(
        () => setIdx((i) => (i + 1) % screens.length),
        5000,
      );
  }, [reduceMotion]);

  useEffect(() => {
    restart();
    return () => clearInterval(timerRef.current);
  }, [restart]);

  const screen = screens[idx];

  return (
    <section
      className="action"
      id="action"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={restart}
    >
      <div className="container">
        <div className="action-intro">
          <div className="section-label" data-reveal>
            See It In Action
          </div>
          <h2 className="section-title" data-reveal>
            A look inside Akademia
          </h2>
          <p className="section-sub" data-reveal>
            Every screen is purpose-built. These are real captures from the
            desktop app — clean, fast, and focused so administrators and
            teachers can get their work done without friction.
          </p>
        </div>
        <div className="carousel" id="screensCarousel" data-reveal="scale">
          <div className="carousel-stage">
            <button
              className="car-arrow car-prev"
              aria-label="Previous screenshot"
              onClick={() => {
                go(idx - 1);
                restart();
              }}
            >
              ‹
            </button>
            <div className="carousel-track">
              {screens.map((s, i) => (
                <div
                  key={s.id}
                  className={`carousel-slide${i === idx ? " active" : ""}`}
                >
                  <img src={s.image} alt={s.alt} loading="lazy" />
                </div>
              ))}
            </div>
            <button
              className="car-arrow car-next"
              aria-label="Next screenshot"
              onClick={() => {
                go(idx + 1);
                restart();
              }}
            >
              ›
            </button>
            <div className="carousel-dots">
              {screens.map((s, i) => (
                <button
                  key={s.id}
                  className={`car-dot${i === idx ? " active" : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    go(i);
                    restart();
                  }}
                />
              ))}
            </div>
          </div>
          <div className="carousel-meta">
            <h4>{screen.label}</h4>
            <p className="car-tagline">{screen.title}</p>
            <ul className="car-points">
              {screen.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="carousel-thumbs">
            {screens.map((s, i) => (
              <button
                key={s.id}
                className={`car-thumb${i === idx ? " active" : ""}`}
                aria-label={s.label}
                onClick={() => {
                  go(i);
                  restart();
                }}
              >
                <img src={s.image} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
