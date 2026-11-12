import React, { useState } from 'react';
import { sound } from '../utils/audio.js';

const questions = [
  {
    question: 'What types of schools is Akademia designed for?',
    answer: 'Akademia is built specifically for Ghanaian Primary, JHS (Junior High School), and SHS (Senior High School) schools. The grading system, curriculum structure, terminology, and integrations (Paystack for fees, Arkesel for SMS) are tailored to how Ghanaian schools operate.',
  },
  {
    question: 'How does the Result-Fee Intercept work exactly?',
    answer: 'When grades are finalized for a term, Akademia generates a report card PDF for each student and places it in a WITHHELD state. It stays withheld until the student’s full fee balance for that term is paid. Once a payment is verified through Paystack, the system releases the card and notifies the guardian by email and SMS.',
  },
  {
    question: 'Can one Akademia installation serve multiple schools?',
    answer: 'Yes. Akademia uses a multi-tenant architecture: one deployment can serve many schools, with student, staff, grade, and fee data scoped and strictly isolated to each school.',
  },
  {
    question: 'Is there an offline mode? What happens when the internet goes down?',
    answer: 'Akademia is packaged as a native Windows desktop app via Tauri. Offline support for core functions like attendance and grade entry is on the roadmap, with local caching and automated cloud synchronization when connectivity restores.',
  },
  {
    question: 'How does the grading system work for Ghanaian schools?',
    answer: 'Grades combine Continuous Assessment (CA) at 30%, Mid-term at 20%, and End-of-term Exam at 50%. Akademia computes the weighted aggregate, and School Admins can configure grade bands. Teachers can enter grades only for their assigned class-subject combinations.',
  },
  {
    question: 'What payment methods are supported for school fees?',
    answer: 'Akademia integrates with Paystack, which supports MTN Mobile Money, Telecel Cash, card payments, and direct bank transfers for Ghanaian payers. Payments are verified in real time by secure webhook with a polling-based fallback.',
  },
  {
    question: 'How does SMS notification work? Do Ghanaian numbers work?',
    answer: 'Akademia uses Arkesel as its primary SMS provider for Ghanaian networks, with Hubtel available as a high-availability fallback. Phone numbers are normalized with international prefix (+233) before sending, and each dispatch is audited in the logs.',
  },
  {
    question: 'What subscription plans are available?',
    answer: 'Akademia offers Starter, Growth/Standard, and Enterprise tiers billed termly or annually in Ghana Cedis (GHS). Grace periods and renewals are managed directly within the app.',
  },
  {
    question: 'Is Akademia available on Mac or mobile?',
    answer: 'Akademia is currently available for Windows (64-bit desktop). macOS and an iOS/Android guardian portal are on the active development roadmap.',
  },
  {
    question: 'How secure is student data? These are minors.',
    answer: 'Akademia is designed with tenant isolation, TLS encryption, role-based access control, and complete audit logging. The architecture adheres to Ghana’s Data Protection Act, 2012 (Act 843).',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    sound.playStep();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="section-watermark" aria-hidden="true">
        ANSWERS
      </div>

      <div className="container">
        <div className="faq-intro">
          <div className="section-label">
            <span className="label-gem" /> Common Inquiries
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know about implementing Akademia at your school.</p>
        </div>

        <div className="faq-list">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={question}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggle(index)}
                >
                  <span>{question}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className="faq-a" id={answerId} aria-hidden={!isOpen}>
                  <div className="faq-a-inner">{answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
