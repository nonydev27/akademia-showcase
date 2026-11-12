import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, RotateCw, Pause, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { screens } from '../data/screens.js';
import { sound } from '../utils/audio.js';

export default function DemoReel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOrbiting, setIsOrbiting] = useState(true);
  const [radius, setRadius] = useState(380);
  const orbitAngleRef = useRef(0);
  const targetAngleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startAngleRef = useRef(0);
  const ringRef = useRef(null);
  const animFrameRef = useRef(null);

  const numScreens = screens.length;
  const anglePerItem = 360 / numScreens;

  // Responsive radius calculation
  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setRadius(230);
      } else if (width < 900) {
        setRadius(300);
      } else {
        setRadius(380);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Set active item and snap angle
  const selectScene = useCallback(
    (index) => {
      sound.playStep();
      setActiveIndex(index);
      // Snap target angle so that item is at 0 degrees (front)
      targetAngleRef.current = -index * anglePerItem;
    },
    [anglePerItem]
  );

  const nextScene = useCallback(() => {
    selectScene((activeIndex + 1) % numScreens);
  }, [activeIndex, numScreens, selectScene]);

  const prevScene = useCallback(() => {
    selectScene((activeIndex - 1 + numScreens) % numScreens);
  }, [activeIndex, numScreens, selectScene]);

  // Animation Loop for continuous smooth rotation & lerping
  useEffect(() => {
    const loop = () => {
      if (isOrbiting && !isDraggingRef.current) {
        // Slow continuous ambient drift when auto-orbiting
        targetAngleRef.current -= 0.08;
      }

      // Smooth lerp to target angle
      orbitAngleRef.current += (targetAngleRef.current - orbitAngleRef.current) * 0.08;

      if (ringRef.current) {
        ringRef.current.style.transform = `rotateX(-8deg) rotateY(${orbitAngleRef.current}deg)`;
      }

      // Compute which item is currently closest to the front (0 deg)
      const normalized = ((-orbitAngleRef.current % 360) + 360) % 360;
      const closestIndex = Math.round(normalized / anglePerItem) % numScreens;
      if (closestIndex !== activeIndex && !isDraggingRef.current) {
        setActiveIndex(closestIndex);
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isOrbiting, anglePerItem, numScreens, activeIndex]);

  // Drag interaction handlers
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    startAngleRef.current = targetAngleRef.current;
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - startXRef.current;
    targetAngleRef.current = startAngleRef.current + deltaX * 0.35;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    // Snap to nearest item
    const snapped = Math.round(targetAngleRef.current / anglePerItem) * anglePerItem;
    targetAngleRef.current = snapped;
    const normalized = ((-snapped % 360) + 360) % 360;
    const closest = Math.round(normalized / anglePerItem) % numScreens;
    setActiveIndex(closest);
    sound.playClick();
  };

  const activeScene = screens[activeIndex];

  return (
    <section className="watch-section" id="watch">
      <div className="section-watermark" aria-hidden="true">
        IN MOTION
      </div>

      <div className="container">
        <div className="watch-intro">
          <div className="section-label">
            <Sparkles size={14} className="label-icon-blue" />
            <span>Interactive Circular Showcase</span>
          </div>
          <h2 className="section-title">See Akademia in motion</h2>
          <p className="section-sub">
            Orbit through every Ghanaian school workspace below. Click any card in the
            continuous 3D carousel to project it directly onto the MacBook Pro above.
          </p>
        </div>

        {/* ── PART 1: THE MACBOOK PRO AT THE TOP ── */}
        <div className="macbook-showcase-wrap">
          <div className="macbook-ambient-glow" />

          <div className="macbook-device">
            {/* Screen Lid Assembly */}
            <div className="macbook-lid">
              {/* FaceTime HD Camera Notch */}
              <div className="macbook-notch">
                <span className="notch-camera" />
                <span className="notch-sensor" />
              </div>

              {/* Display Bezel */}
              <div className="macbook-screen">
                {/* Simulated macOS Menu Bar */}
                <div className="macbook-menubar">
                  <div className="macbook-dots">
                    <span className="dot dot-close" />
                    <span className="dot dot-min" />
                    <span className="dot dot-max" />
                  </div>
                  <div className="macbook-title">
                    <Sparkles size={13} className="app-icon" />
                    <span>Akademia Desktop — {activeScene.label}</span>
                  </div>
                  <div className="macbook-status-pill">
                    <span className="pulse-indicator" />
                    <span>60 FPS</span>
                  </div>
                </div>

                {/* Main Screen Viewport */}
                <div className="macbook-screen-canvas">
                  {screens.map((item, idx) => (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.alt}
                      className={`macbook-screen-img ${idx === activeIndex ? 'active' : ''}`}
                      loading={idx === activeIndex ? 'eager' : 'lazy'}
                    />
                  ))}

                  {/* High-tech Screen Scanline Sweep */}
                  <div className="screen-scanline" />

                  {/* Caption Overlay */}
                  <div className="macbook-caption-card">
                    <div className="caption-tag-row">
                      <span className="caption-badge">{activeScene.thumbLabel}</span>
                      <span className="caption-count">
                        0{activeIndex + 1} / 0{screens.length}
                      </span>
                    </div>
                    <h4>{activeScene.title}</h4>
                    <p>{activeScene.points[0]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aluminum MacBook Lower Base / Keyboard Deck */}
            <div className="macbook-base">
              <div className="macbook-notch-indent" />
            </div>
            <div className="macbook-shadow" />
          </div>

          {/* Interactive Controls Bar for the MacBook */}
          <div className="macbook-controls-bar">
            <button
              type="button"
              className="btn-orbit-control"
              onClick={prevScene}
              aria-label="Previous screen"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className={`btn-orbit-toggle ${isOrbiting ? 'active' : ''}`}
              onClick={() => {
                sound.playClick();
                setIsOrbiting(!isOrbiting);
              }}
            >
              {isOrbiting ? (
                <RotateCw size={14} className="orbit-spin-icon" />
              ) : (
                <Pause size={14} className="orbit-spin-icon" />
              )}
              <span>{isOrbiting ? 'Auto Orbit Active' : 'Orbit Paused'}</span>
            </button>

            <button
              type="button"
              className="btn-orbit-control"
              onClick={nextScene}
              aria-label="Next screen"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── PART 2: THE CONTINUOUS CIRCULAR 3D CAROUSEL BENEATH ── */}
        <div
          className="carousel-3d-cylinder-wrap"
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          <div className="cylinder-instruction">
            <span>Drag horizontally to rotate carousel • Click card to inspect</span>
          </div>

          <div className="cylinder-stage">
            <div ref={ringRef} className="cylinder-ring">
              {screens.map((item, idx) => {
                const itemAngle = idx * anglePerItem;
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={item.id}
                    className={`cylinder-card ${isActive ? 'active' : ''}`}
                    style={{
                      transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                    }}
                    onClick={() => selectScene(idx)}
                  >
                    <div className="cylinder-card-inner">
                      <div className="cylinder-card-header">
                        <span className="card-idx">0{idx + 1}</span>
                        <span className="card-name">{item.thumbLabel}</span>
                      </div>
                      <div className="cylinder-img-box">
                        <img src={item.image} alt={item.thumbLabel} />
                        <div className="card-hover-overlay">
                          <span>Inspect on MacBook</span>
                          <ArrowUpRight size={13} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
