import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { screens } from '../data/screens.js';

const DURATION = 4200;

export default function DemoReel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  );
  const elapsedRef = useRef(0);
  const startedAtRef = useRef(0);
  const scene = screens[index];

  useEffect(() => {
    if (!playing) return undefined;

    startedAtRef.current = performance.now();
    const timer = window.setTimeout(() => {
      elapsedRef.current = 0;
      setIndex((current) => (current + 1) % screens.length);
    }, Math.max(0, DURATION - elapsedRef.current));

    return () => window.clearTimeout(timer);
  }, [playing, index]);

  const togglePlay = () => {
    if (playing) {
      elapsedRef.current = Math.min(
        DURATION,
        elapsedRef.current + performance.now() - startedAtRef.current,
      );
    }
    setPlaying((current) => !current);
  };

  const selectScene = (nextIndex) => {
    elapsedRef.current = 0;
    setIndex(nextIndex);
  };

  return (
    <section className="watch" id="watch">
      <div className="container">
        <div className="watch-intro">
          <div className="section-label" data-reveal>Product Demo</div>
          <h2 className="section-title" data-reveal>See Akademia in motion</h2>
          <p className="section-sub" data-reveal>A guided reel through real Akademia screens, with an explanation of what each one shows.</p>
        </div>
        <div className={`demo-player${playing ? '' : ' paused'}`} id="demoPlayer" data-reveal="scale">
          <div className="demo-chrome">
            <span className="demo-live"><span className="dot" /> Product tour</span>
            <span className="demo-chrome-title">Akademia — Windows Desktop App</span>
            <span className="demo-chrome-time">SCENE {index + 1} / {screens.length}</span>
          </div>
          <div className="demo-frame">
            {screens.map((item, itemIndex) => (
              <div
                key={item.id}
                className={`demo-scene${itemIndex === index ? ' active' : ''}`}
                aria-hidden={itemIndex !== index}
              >
                <img src={item.image} alt={item.alt} loading={itemIndex === index ? 'eager' : 'lazy'} />
              </div>
            ))}
            <div className="demo-caption" aria-live="polite">
              <span className="tag">{scene.label}</span>
              <h4>{scene.title}</h4>
              <p>{scene.points[0]}</p>
            </div>
            <button
              type="button"
              className="demo-playbtn"
              onClick={togglePlay}
              aria-label={playing ? 'Pause demo' : 'Play demo'}
            >
              <svg className="ic-pause" width={22} height={22} viewBox="0 0 24 24" fill="currentColor" style={{ display: playing ? '' : 'none' }}>
                <rect x={6} y={5} width={4} height={14} rx={1} />
                <rect x={14} y={5} width={4} height={14} rx={1} />
              </svg>
              <svg className="ic-play" width={22} height={22} viewBox="0 0 24 24" fill="currentColor" style={{ display: playing ? 'none' : '' }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div className="demo-progress" aria-label="Choose a demo scene">
            {screens.map((item, itemIndex) => (
              <button
                type="button"
                key={item.id}
                className={`demo-seg${itemIndex === index ? ' active' : itemIndex < index ? ' complete' : ''}`}
                aria-label={`Show ${item.label}`}
                aria-current={itemIndex === index ? 'true' : undefined}
                onClick={() => selectScene(itemIndex)}
              >
                <span className="fill" style={{ '--duration': `${DURATION}ms` }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
