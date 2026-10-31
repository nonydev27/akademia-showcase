import React from 'react';
import { useState } from 'react';

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
    answer: 'Yes. Akademia uses a multi-tenant architecture: one deployment can serve many schools, with student, staff, grade, and fee data scoped to each school.',
  },
  {
    question: 'Is there an offline mode? What happens when the internet goes down?',
    answer: 'Akademia is packaged as a native Windows desktop app via Tauri. Offline support for core functions like attendance and grade entry is on the roadmap, with sync planned when the connection is restored.',
  },
  {
    question: 'How does the grading system work?',
    answer: 'Grades combine Continuous Assessment (CA) at 30%, Mid-term at 20%, and End-of-term Exam at 50%. Akademia computes the weighted aggregate, and School Admins can configure grade bands. Teachers can enter grades only for their assigned class-subject combinations.',
  },
  {
    question: 'What payment methods are supported for school fees?',
    answer: 'Akademia integrates with Paystack, which supports mobile money, card payments, and bank transfers for Ghanaian payers. Payments are verified by webhook with a polling-based fallback.',
  },
  {
    question: 'How does SMS notification work? Do Ghanaian numbers work?',
    answer: 'Akademia uses Arkesel as its primary SMS provider for Ghanaian numbers, with Hubtel available as a fallback. Phone numbers are normalized before sending, and each dispatch is logged.',
  },
  {
    question: 'What subscription plans are available?',
    answer: 'Akademia offers Basic, Standard, and Premium annual plans, managed per school. Grace periods and renewal are managed in the app.',
  },
  {
    question: 'Is Akademia available on Mac or mobile?',
    answer: 'Akademia is currently available for Windows. macOS and a mobile companion app are on the product roadmap.',
  },
  {
    question: 'How secure is student data? These are minors.',
    answer: 'Akademia is designed with tenant isolation, encrypted connections, authentication, and audit logging. The team is building toward a full data-protection compliance posture under Ghana’s Data Protection Act, 2012 (Act 843).',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-intro">
          <div className="section-label" data-reveal>FAQ</div>
          <h2 className="section-title" data-reveal>Questions we&apos;ve been asked</h2>
          <p className="section-sub" data-reveal>Everything you need to know before getting started.</p>
        </div>
        <div className="faq-list" data-reveal>
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
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {question}
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
