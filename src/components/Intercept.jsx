export default function Intercept() {
  return (
  {/* ══════════════════ RESULT-FEE INTERCEPT ══════════════════ */}
  <section className="intercept">
    <div className="container">
      <div className="intercept-inner" data-reveal="scale">
        <div>
          <div className="intercept-label">✦ Signature Feature</div>
          <h2>The Result-Fee Intercept</h2>
          <p>The most powerful financial tool in Akademia. Report cards are automatically withheld until a student's outstanding fee balance reaches zero. No manual tracking. No awkward conversations. The system handles it.</p>
          <p>The moment a payment clears through Paystack, the card is released — the PDF is generated, uploaded, and the guardian is notified by both email and SMS. Instantly.</p>
        </div>
        <div className="intercept-flow">
          <div className="flow-step">
            <div className="flow-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" /><path d="M22 10v6" /></svg></div>
            <div className="flow-step-text"><strong>Exam scores finalized</strong>Report card is generated and placed in WITHHELD state</div>
          </div>
          <div className="flow-step">
            <div className="flow-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={2} y={5} width={20} height={14} rx={2} /><line x1={2} y1={10} x2={22} y2={10} /></svg></div>
            <div className="flow-step-text"><strong>Guardian makes payment</strong>Paystack webhook confirms payment in real-time</div>
          </div>
          <div className="flow-step">
            <div className="flow-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
            <div className="flow-step-text"><strong>Balance clears</strong>System automatically triggers report card release</div>
          </div>
          <div className="flow-step">
            <div className="flow-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
            <div className="flow-step-text"><strong>Notification sent</strong>Guardian receives email + SMS with PDF download link</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
