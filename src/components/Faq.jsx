export default function Faq() {
  return (
  {/* ══════════════════ FAQ ══════════════════ */}
  <section className="faq" id="faq">
    <div className="container">
      <div className="faq-intro">
        <div className="section-label" data-reveal>FAQ</div>
        <h2 className="section-title" data-reveal>Questions we've been asked</h2>
        <p className="section-sub" data-reveal>Everything you need to know before getting started.</p>
      </div>
      <div className="faq-list">
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            What types of schools is Akademia designed for?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia is built specifically for Ghanaian Primary, JHS (Junior High School), and SHS (Senior High School) schools. The grading system, curriculum structure, terminology, and integrations (Paystack for fees, Arkesel for SMS) are all tailored to how Ghanaian schools operate — not a generic global template adapted for Africa.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            How does the Result-Fee Intercept work exactly?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">When grades are finalized for a term, Akademia generates a report card PDF for each student and places it in a WITHHELD state. It stays withheld until the student's full fee balance for that term is paid. The moment a payment is verified through Paystack (via webhook), the system automatically releases the card — generates the PDF, uploads it to storage, and sends the guardian a download link by both email and SMS. No admin intervention required.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            Can one Akademia installation serve multiple schools?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Yes — Akademia is built on a multi-tenant architecture. A single deployment can serve many schools simultaneously, each operating in complete data isolation. Students, staff, grades, and fees from School A are never visible to School B. Each school's data is scoped at the API level on every single request, making cross-school data leakage architecturally impossible.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            Is there an offline mode? What happens when the internet goes down?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia is packaged as a native Windows desktop app via Tauri — it's a real installed application, not a web browser shortcut. Offline support for core functions like attendance and grade entry is on our near-term roadmap, with sync happening automatically when the connection is restored. This is especially important for schools in areas with unreliable internet in Ghana.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            How does the grading system work?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Grades are made up of three components: Continuous Assessment (CA) at 30%, Mid-term at 20%, and End-of-term Exam at 50%. Akademia computes the weighted aggregate automatically. Grade bands (e.g., A1 for 80–100, B2 for 70–79, etc.) are fully configurable by the School Admin. Teachers can only enter grades for the specific class-subject combinations they've been assigned — preventing accidental or unauthorized edits.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            What payment methods are supported for school fees?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia integrates with Paystack as the primary payment processor — which supports mobile money (MTN MoMo, Vodafone Cash, AirtelTigo Money), card payments, and bank transfers for Ghanaian payers. Flutterwave is available as a secondary option. Payments are verified via webhook with a polling-based fallback to handle webhook delivery failures.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            How does SMS notification work? Do Ghanaian numbers work?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Yes — Akademia uses Arkesel as the primary SMS provider, which is built for Ghana and covers MTN, Vodafone, and AirtelTigo numbers reliably. Hubtel is available as a fallback. Phone numbers are automatically normalized to the correct format (e.g., 0244123456 → +233244123456) before sending. Every SMS dispatch is logged with its status, so you always know what was sent and to whom.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            What subscription plans are available?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia offers three plans: Basic, Standard, and Premium — each with different student capacity limits and feature access. Subscriptions are annual and managed per school (tenant). Schools that miss a renewal get a configurable grace period with read-only access before being locked out. Renewal is handled directly through Paystack from within the app itself.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            Is Akademia available on Mac or mobile?
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">Akademia is currently a Windows desktop application, launching on the Microsoft Store. A macOS version packaged via the App Store is in active development. A mobile companion app (PWA or native) for guardians to check fees, attendance, and results is on our product roadmap. The core web application runs in any modern browser as well.</div></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">
            How secure is student data? These are minors.
            <span className="faq-chevron">
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
          <div className="faq-a"><div className="faq-a-inner">We take data security seriously, especially given that student data involves minors. All data is encrypted in transit (HTTPS/TLS) and at rest (Supabase PostgreSQL with encryption). Authentication uses short-lived JWTs via Supabase Auth. Every action in the system is logged in the audit trail. Tenant isolation prevents any cross-school data access. We're aligned with Ghana's Data Protection Act, 2012 (Act 843), and are building toward a full data protection compliance posture.</div></div>
        </div>
      </div>
    </div>
  </section>
  );
}
