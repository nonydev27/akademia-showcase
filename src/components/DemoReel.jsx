import { useEffect, useState, useRef } from "react";
import { screens } from "../data/screens.js";

const DURATION = 4200;

export default function DemoReel() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const rafRef = useRef(null);
  const segStartRef = useRef(0);
  const pausedRef = useRef(0);

  useEffect(() => {
    if (!playing) return;
    segStartRef.current = performance.now() - pausedRef.current;
    const tick = (now) => {
      if (now - segStartRef.current >= DURATION) {
        pausedRef.current = 0;
        setIdx((i) => (i + 1) % screens.length);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      pausedRef.current = Math.min(
        DURATION,
        performance.now() - segStartRef.current,
      );
      cancelAnimationFrame(rafRef.current);
    };
  }, [playing, idx]);

  const togglePlay = () => setPlaying((p) => !p);
  const scene = screens[idx];

  return (
    <section className="watch" id="watch">
      <div className="container">
        <div className="watch-intro">
          <div className="section-label" data-reveal>
            Product Demo
          </div>
          <h2 className="section-title" data-reveal>
            See Akademia in motion
          </h2>
          <p className="section-sub" data-reveal>
            A guided reel through the exact screens your staff will use every
            day — dashboard, staff, subscriptions, and sign in.
          </p>
        </div>
        <div
          className={`demo-player${playing ? "" : " paused"}`}
          id="demoPlayer"
          data-reveal="scale"
        >
          <div className="demo-chrome">
            <span className="demo-live">
              <span className="dot" /> Live Demo
            </span>
            <span className="demo-chrome-title">
              Akademia — Windows Desktop App
            </span>
            <span className="demo-chrome-time">
              SCENE {idx + 1} / {screens.length}
            </span>
          </div>
          <div className="demo-frame">
            {screens.map((s, i) => (
              <div
                key={s.id}
                className={`demo-scene${i === idx ? " active" : ""}`}
              >
                <img src={s.image} alt={s.alt} loading="lazy" />
              </div>
            ))}
            <div className="demo-caption">
              <span className="tag">{scene.label}</span>
              <h4>{scene.title}</h4>
              <p>{scene.points[0]}</p>
            </div>
            <button
              className="demo-playbtn"
              onClick={togglePlay}
              aria-label={playing ? "Pause demo" : "Play demo"}
            >
              <svg
                className="ic-pause"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ display: playing ? "" : "none" }}
              >
                <rect x={6} y={5} width={4} height={14} rx={1} />
                <rect x={14} y={5} width={4} height={14} rx={1} />
              </svg>
              <svg
                className="ic-play"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ display: playing ? "none" : "" }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div className="demo-progress">
            {screens.map((s, i) => (
              <div
                key={s.id}
                className="demo-seg"
                onClick={() => {
                  setIdx(i);
                  pausedRef.current = 0;
                }}
              >
                <div
                  className="fill"
                  style={{
                    width: i < idx ? "100%" : i === idx ? undefined : "0%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
