import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, BookOpen, ShieldCheck, Bell } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StatsBand() {
  const bandRef = useRef(null);

  useEffect(() => {
    const el = bandRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Parallax tilt on the stats card
      gsap.to('.stats-inner', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Animated number counters on reveal
      const counters = el.querySelectorAll('.count');
      counters.forEach((counter) => {
        const target = parseFloat(counter.dataset.target || '0');
        gsap.fromTo(
          counter,
          { textContent: '0' },
          {
            textContent: target,
            duration: 1.8,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={bandRef} className="stats-section">
      <div className="container">
        <div className="stats-inner">
          <div className="stats-ambient-glow" />

          <div className="stat">
            <div className="stat-top-icon">
              <Users size={22} className="stat-icon-gold" />
            </div>
            <div className="num">
              <span className="count" data-target={2}>0</span>
            </div>
            <div className="lbl">
              <strong>Dedicated School Roles</strong>
              <span>School Administrator and Classroom Educators</span>
            </div>
          </div>

          <div className="stat">
            <div className="stat-top-icon">
              <BookOpen size={22} className="stat-icon-blue" />
            </div>
            <div className="num">
              <span className="count" data-target={3}>0</span>
              <span className="suffix">×</span>
            </div>
            <div className="lbl">
              <strong>Official Ghana Weights</strong>
              <span>Continuous Assessment 30%, Mid Term 20%, Exam 50%</span>
            </div>
          </div>

          <div className="stat">
            <div className="stat-top-icon">
              <ShieldCheck size={22} className="stat-icon-sage" />
            </div>
            <div className="num">
              <span className="count" data-target={100}>0</span>
              <span className="suffix">%</span>
            </div>
            <div className="lbl">
              <strong>Tenant Data Privacy</strong>
              <span>Complete cryptographic database isolation</span>
            </div>
          </div>

          <div className="stat">
            <div className="stat-top-icon">
              <Bell size={22} className="stat-icon-cyan" />
            </div>
            <div className="num">
              <span className="count" data-target={2}>0</span>
            </div>
            <div className="lbl">
              <strong>Automated Alert Channels</strong>
              <span>Integrated SMS and Email direct to parents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
