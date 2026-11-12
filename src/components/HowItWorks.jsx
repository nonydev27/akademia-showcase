import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sound } from '../utils/audio.js';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: '01',
    title: 'School registers and tenant is provisioned',
    desc: 'The Platform Admin creates an isolated school tenant with a unique local code (e.g., VIS for Vilaworld International School, BFA for Brightfield Academy). The school is live immediately with zero server setup required.',
  },
  {
    num: '02',
    title: 'Admin configures classes, subjects, and staff accounts',
    desc: 'The School Admin defines academic terms, class divisions (Primary 1-6, JHS 1-3, SHS 1-3), subjects, and teacher credentials. Educators are assigned specific class-subject pairs so marking permissions remain strictly isolated.',
  },
  {
    num: '03',
    title: 'Learners are enrolled via bulk CSV or manual intake',
    desc: 'Import hundreds of students from an existing Excel/CSV sheet in seconds or register them individually. Clean admission numbers are automatically generated, and guardians are linked for SMS and fee billing.',
  },
  {
    num: '04',
    title: 'Daily operations commence — attendance, grades, fees',
    desc: 'Teachers take morning roll call on their laptops. Continuous Assessment (CA) scores and terminal marks are entered as terms progress. Fees paid via MTN MoMo or Telecel Cash reflect on the ledger in sub-second time.',
  },
  {
    num: '05',
    title: 'Report cards generated & released via Result-Fee Intercept',
    desc: 'At term completion, administrators publish final results. The Result-Fee Intercept automatically holds cards with unpaid balances. Once cleared, official PDF reports with tamper-proof QR verification are dispatched instantly.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Animate steps with glowing reveal
      gsap.from('.how-step-item', {
        x: -45,
        opacity: 0,
        stagger: 0.18,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.how-steps-track',
          start: 'top 80%',
        },
      });

      // Animate connector line height scrubbing
      gsap.fromTo(
        '.how-connector-line-fill',
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.how-steps-track',
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="how-section" id="how">
      <div className="section-watermark" aria-hidden="true">
        WORKFLOW
      </div>

      <div className="container">
        <div className="how-intro">
          <div className="section-label">
            <span className="label-gem" /> Turnkey Deployment
          </div>
          <h2 className="section-title">
            From setup to operational <br />
            in under sixty minutes
          </h2>
          <p className="section-sub">
            Designed to require zero technical gymnastics. Your school administration
            can be fully onboarded and running within an hour.
          </p>
        </div>

        <div className="how-steps-track">
          <div className="how-connector-line">
            <div className="how-connector-line-fill" />
          </div>

          {STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="how-step-item"
              onMouseEnter={() => sound.playStep()}
            >
              <div className="step-num-pill">
                <span>{step.num}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
