export default function Roles() {
  return (
  <section className="roles" id="roles">
    <div className="container">
      <div className="section-label" data-reveal>Three Roles, One System</div>
      <h2 className="section-title" data-reveal>Everyone has exactly<br />the access they need</h2>
      <div className="roles-grid">
        <div className="role-card superadmin" data-reveal>
          <div className="role-tag">Platform Admin</div>
          <h3>Super Admin</h3>
          <p>The platform owner. Manages all schools, subscriptions, and has a bird's-eye view of every tenant on the system.</p>
          <ul className="role-perms">
            <li>Create and manage school tenants</li>
            <li>Set subscription plans and expiry</li>
            <li>View platform-wide audit logs</li>
            <li>Onboard new School Admins</li>
            <li>Monitor subscription health</li>
          </ul>
        </div>
        <div className="role-card schooladmin" data-reveal>
          <div className="role-tag">School Admin</div>
          <h3>School Administrator</h3>
          <p>The principal or administrator of a single school. Full control over their school's data, staff, and operations.</p>
          <ul className="role-perms">
            <li>Manage students and enrolments</li>
            <li>Manage staff and class assignments</li>
            <li>Set up fee structures and record payments</li>
            <li>Publish and withhold report cards</li>
            <li>Send communications to guardians</li>
            <li>View attendance and grade overviews</li>
          </ul>
        </div>
        <div className="role-card staff" data-reveal>
          <div className="role-tag">Teacher / Staff</div>
          <h3>Staff Member</h3>
          <p>A teacher assigned to specific classes and subjects. Clean, focused interface — no clutter from areas they don't own.</p>
          <ul className="role-perms">
            <li>Mark daily attendance for assigned classes</li>
            <li>Enter grades for assigned subjects</li>
            <li>View their subject &amp; class assignments</li>
            <li>PIN-gated secure grade entry</li>
            <li>Self-service PIN reset</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
}
