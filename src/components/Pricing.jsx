import React, { useState } from 'react';
import { sound } from '../utils/audio.js';

const TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Basic / Daycare',
    desc: 'Ideal for early childhood centers, primary academies, and newly opened schools.',
    priceTerm: 450,
    priceYear: 1080,
    popular: false,
    features: [
      'Up to 250 registered students',
      'Daily morning & afternoon attendance roll call',
      'Ghana GES 30/20/50 continuous assessment',
      'Paystack MoMo & card tuition collections',
      'Standard terminal report card PDF generation',
      'Community email & ticket support',
    ],
    ctaText: 'Get Started with Starter',
  },
  {
    id: 'standard',
    name: 'Growth & Standard',
    badge: 'Most Popular',
    desc: 'The complete command center for established Primary, JHS, and growing schools.',
    priceTerm: 850,
    priceYear: 2040,
    popular: true,
    features: [
      'Up to 800 registered students',
      'Everything in Starter included',
      'Automated Result-Fee Intercept protocol',
      'Tamper-proof QR verification on report cards',
      'Automated guardian SMS & email broadcasts',
      'Staff role permission sandboxing',
      'Bulk CSV student import & ledger reconciliation',
      'Priority WhatsApp technical support',
    ],
    ctaText: 'Choose Growth Plan',
  },
  {
    id: 'enterprise',
    name: 'Enterprise / SHS',
    badge: 'Senior High & Multi-Campus',
    desc: 'For large Senior High Schools, multi-campus groups, and institutions requiring custom integrations.',
    priceTerm: 1600,
    priceYear: 3840,
    popular: false,
    features: [
      'Unlimited students, teachers, and staff',
      'Everything in Standard included',
      'Custom school branded SMS sender ID (e.g. VIS-ACADEMY)',
      'Multi-campus unified governance dashboard',
      'Custom school crest & verification seal embedding',
      'Automated daily cloud backups & offsite export',
      'Dedicated local account manager (Accra / Kumasi)',
      'Custom training workshop for school staff',
    ],
    ctaText: 'Deploy Enterprise',
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-watermark" aria-hidden="true">
        INVESTMENT
      </div>

      <div className="container">
        <div className="pricing-intro">
          <div className="section-label">
            <span className="label-gem" /> Predictable Local Pricing
          </div>
          <h2 className="section-title">
            Transparent pricing in Cedis. <br />
            No hidden fees.
          </h2>
          <p className="section-sub">
            Invest in peace of mind. Every plan includes Paystack MoMo integration,
            continuous software updates, and reliable data security.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pricing-billing-toggle">
            <button
              type="button"
              className={`toggle-option ${!isAnnual ? 'active' : ''}`}
              onClick={() => {
                sound.playClick();
                setIsAnnual(false);
              }}
            >
              Termly Billing (3 Terms / Year)
            </button>
            <button
              type="button"
              className={`toggle-option ${isAnnual ? 'active' : ''}`}
              onClick={() => {
                sound.playClick();
                setIsAnnual(true);
              }}
            >
              Annual Billing
              <span className="save-pill">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {TIERS.map((tier) => {
            const price = isAnnual ? tier.priceYear : tier.priceTerm;
            const periodLabel = isAnnual ? '/ academic year' : '/ term';

            return (
              <div
                key={tier.id}
                className={`pricing-card ${tier.popular ? 'popular' : ''} interactive-3d-card`}
                onMouseEnter={() => sound.playStep()}
              >
                {tier.popular && (
                  <div className="popular-ribbon">
                    <span>★ RECOMMENDED CHOICE</span>
                  </div>
                )}

                <div className="pricing-card-header">
                  <span className="tier-badge">{tier.badge}</span>
                  <h3 className="tier-name">{tier.name}</h3>
                  <p className="tier-desc">{tier.desc}</p>
                </div>

                <div className="pricing-price-box">
                  <span className="currency">GHS</span>
                  <span className="amount">{price.toLocaleString()}</span>
                  <span className="period">{periodLabel}</span>
                </div>

                <div className="pricing-divider" />

                <ul className="tier-features-list">
                  {tier.features.map((feat) => (
                    <li key={feat}>
                      <span className="check-icon">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#store"
                  className={`btn-tier-cta ${tier.popular ? 'primary' : 'outline'}`}
                  onClick={() => sound.playClick()}
                >
                  <span>{tier.ctaText}</span>
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* Pricing Reassurance Banner */}
        <div className="pricing-reassurance">
          <div className="reassurance-item">
            <span className="reassurance-icon">🔒</span>
            <span><strong>30-Day Money-Back Guarantee:</strong> Try Akademia risk-free during your first term.</span>
          </div>
          <div className="reassurance-item">
            <span className="reassurance-icon">💳</span>
            <span><strong>Local Ghanaian Payment:</strong> Pay easily with MTN MoMo, Telecel Cash, or local Bank Cards.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
