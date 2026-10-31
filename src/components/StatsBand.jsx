export default function StatsBand() {
  return (
  <section className="stats">
    <div className="container">
      <div className="stats-inner" data-reveal="scale">
        <div className="stat"><div className="num"><span className="count" data-target={3}>0</span></div><div className="lbl">Clear roles — Platform Admin, School Admin, Staff</div></div>
        <div className="stat"><div className="num"><span className="count" data-target={3}>0</span><span className="suffix">×</span></div><div className="lbl">Grading components: CA, Mid-term &amp; Exam</div></div>
        <div className="stat"><div className="num"><span className="count" data-target={100}>0</span><span className="suffix">%</span></div><div className="lbl">Tenant data isolation on every request</div></div>
        <div className="stat"><div className="num"><span className="count" data-target={2}>0</span></div><div className="lbl">Channels — Email &amp; SMS, fully logged</div></div>
      </div>
    </div>
  </section>
  );
}
