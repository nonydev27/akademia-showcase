export default function HowItWorks() {
  return (
  <section className="how" id="how">
    <div className="container">
      <div className="section-label" data-reveal>How It Works</div>
      <h2 className="section-title" data-reveal>From setup to running<br />in under an hour</h2>
      <div className="how-steps">
        <div className="step" data-reveal="left">
          <div className="step-num">1</div>
          <div className="step-body">
            <h3>School registers and gets onboarded</h3>
            <p>The Platform Admin creates a school tenant with a unique code (e.g., VIS for Vilaworld International School), sets the subscription plan, and creates the School Admin account. The school is live immediately.</p>
          </div>
        </div>
        <div className="step" data-reveal="left">
          <div className="step-num">2</div>
          <div className="step-body">
            <h3>Admin sets up classes, subjects, and staff</h3>
            <p>The School Admin creates academic years, terms, class divisions (JHS 2A, JHS 2B, SHS 1…), subjects, and staff accounts. Teachers are assigned specific class-subject combinations so they only see what's relevant to them.</p>
          </div>
        </div>
        <div className="step" data-reveal="left">
          <div className="step-num">3</div>
          <div className="step-body">
            <h3>Students are enrolled (bulk or one by one)</h3>
            <p>Import students from a CSV or add them individually. Akademia assigns clean admission numbers automatically. Guardians are linked to students for notifications. Students are enrolled into classes per term.</p>
          </div>
        </div>
        <div className="step" data-reveal="left">
          <div className="step-num">4</div>
          <div className="step-body">
            <h3>Daily operations begin — attendance, grades, fees</h3>
            <p>Teachers mark attendance each morning. Grades are entered at end of assessment periods. Fee payments are recorded as they come in. Everything updates in real-time across the admin dashboard.</p>
          </div>
        </div>
        <div className="step" data-reveal="left">
          <div className="step-num">5</div>
          <div className="step-body">
            <h3>Report cards generated and released</h3>
            <p>At end of term, the Admin publishes results. The Result-Fee Intercept holds cards for students with outstanding fees. Once cleared, PDFs are generated and dispatched to guardians via email and SMS automatically.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
