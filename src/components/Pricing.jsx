import React, { useState } from 'react';
import { Sparkles, ShieldCheck, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio.js';
import { useApp } from '../context/AppContext.jsx';

const TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Basic and Daycare',
    desc: 'Ideal for early childhood centers, primary academies, and newly opened basic schools.',
    priceTerm: 450,
    priceYear: 1080,
    popular: false,
    features: [
      'Up to 250 registered students',
      'Daily morning and afternoon attendance roll call',
      'Ghana GES 30/20/50 continuous assessment',
      'Paystack MoMo and card tuition collections',
      'Standard terminal report card PDF generation',
      'Community email and ticket support',
    ],
    ctaText: 'Get Started with Starter',
  },
  {
    id: 'standard',
    name: 'Growth and Standard',
    badge: 'Most Popular Choice',
    desc: 'The complete command center for established Primary, JHS, and growing schools.',
    priceTerm: 850,
    priceYear: 2040,
    popular: true,
    features: [
      'Up to 800 registered students',
      'Everything in Starter included',
      'Automated Result Fee Intercept protocol',
      'Tamper proof QR verification on report cards',
      'Automated guardian SMS and email broadcasts',
      'Staff role permission sandboxing',
      'Bulk CSV student import and ledger reconciliation',
      'Priority WhatsApp technical support',
    ],
    ctaText: 'Choose Growth Plan',
  },
  {
    id: 'enterprise',
    name: 'Senior High and Campus',
    badge: 'Senior High and Multi Campus',
    desc: 'For large Senior High Schools, multi campus groups, and institutions requiring custom integrations.',
    priceTerm: 1600,
    priceYear: 3840,
    popular: false,
    features: [
      'Unlimited students, teachers, and staff',
      'Everything in Standard included',
      'Custom school branded SMS sender ID',
      'Multi campus unified governance dashboard',
      'Custom school crest and verification seal embedding',
      'Automated daily cloud backups and offsite export',
      'Dedicated local account manager in Accra and Kumasi',
      'Custom staff training workshop on site',
    ],
    ctaText: 'Deploy Enterprise',
  },
];

export default function Pricing() {
  const { t } = useApp();
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-watermark" aria-hidden="true">
        INVESTMENT
      </div>

      <div className="container">
        <div className="pricing-intro">
          <div className="section-label">
            <CreditCard size={15} className="label-icon-blue" />
            <span>{t.pricing.label}</span>
          </div>
          <h2 className="section-title">{t.pricing.title}</h2>
          <p className="section-sub">{t.pricing.subtitle}</p>

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
              {t.pricing.termly}
            </button>
            <button
              type="button"
              className={`toggle-option ${isAnnual ? 'active' : ''}`}
              onClick={() => {
                sound.playClick();
                setIsAnnual(true);
              }}
            >
              <span>{t.pricing.annual}</span>
              <span className="save-pill">{t.pricing.save}</span>
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
                    <Sparkles size={12} className="ribbon-star" />
                    <span>RECOMMENDED</span>
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
                      <CheckCircle2 size={16} className="tier-check-icon" />
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
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Pricing Reassurance Banner */}
        <div className="pricing-reassurance">
          <div className="reassurance-item">
            <ShieldCheck size={20} className="reassurance-svg" />
            <span><strong>30-Day Money-Back Guarantee:</strong> Try Akademia risk-free during your first term.</span>
          </div>
          <div className="reassurance-item">
            <CreditCard size={20} className="reassurance-svg" />
            <span><strong>Local Ghanaian Payment:</strong> Pay easily with MTN MoMo, Telecel Cash, or local Bank Cards.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
