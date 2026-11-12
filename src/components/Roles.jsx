import React, { useState } from 'react';
import { sound } from '../utils/audio.js';

const ROLES = [
  {
    id: 'superadmin',
    roleTag: 'Platform Super Admin',
    title: 'Multi-Tenant Operator',
    badgeClass: 'tag-gold',
    cardClass: 'superadmin',
    desc: 'The master tenant owner. Manages multiple school tenants, sets subscription tiers, monitors platform health, and audits global activity logs.',
    perms: [
      'Provision new school tenants with custom prefixes (e.g. VIS, BFA)',
      'Manage subscription licenses, renewal dates & Paystack plans',
      'Inspect encrypted platform-wide audit & security logs',
      'Onboard and assign school principal administrator accounts',
      'System-wide data isolation and backup governance',
    ],
  },
  {
    id: 'schooladmin',
    roleTag: 'School Administrator',
    title: 'Principal & Headteacher',
    badgeClass: 'tag-blue',
    cardClass: 'schooladmin',
    desc: 'Full executive control over a single institution. Configures academic calendars, fee structures, staff assignments, and publishes terminal exam results.',
    perms: [
      'Configure academic years, terms, and classes (Primary, JHS, SHS)',
      'Assign teachers to specific class & subject combinations',
      'Configure fee categories (Tuition, Feeding, PTA, ICT levies)',
      'Authorize terminal exam publication & Result-Fee Intercept locks',
      'Trigger bulk SMS and email broadcasts to all registered guardians',
    ],
  },
  {
    id: 'staff',
    roleTag: 'Staff & Teachers',
    title: 'Classroom Educators',
    badgeClass: 'tag-sage',
    cardClass: 'staff',
    desc: 'Dedicated daily workspace for educators. Teachers can only view and modify grades for their assigned subjects and classes, preventing unauthorized mark alterations.',
    perms: [
      'Take morning and afternoon roll-call attendance in seconds',
      'Enter assessment scores (CA 30%, Mid-Term 20%, Exam 50%)',
      'Provide conduct remarks and behavioral observations per learner',
      'Strict isolation: teachers cannot alter grades of other classes',
      'Export class rosters and attendance performance summaries',
    ],
  },
];

export default function Roles() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="roles-section" id="roles">
      <div className="section-watermark" aria-hidden="true">
        PERMISSIONS
      </div>

      <div className="container">
        <div className="roles-intro">
          <div className="section-label">
            <span className="label-gem" /> Three Roles, One Cohesive System
          </div>
          <h2 className="section-title">
            Everyone has exactly the access <br />
            they need — and nothing more
          </h2>
          <p className="section-sub">
            Strict role-based access control guarantees exam integrity, financial privacy,
            and operational efficiency across your school hierarchy.
          </p>
        </div>

        {/* Roles 3D Bento Grid */}
        <div className="roles-grid">
          {ROLES.map((role, idx) => (
            <div
              key={role.id}
              className={`role-card ${role.cardClass} interactive-3d-card`}
              onMouseEnter={() => sound.playStep()}
            >
              <div className="role-card-header">
                <span className={`role-tag ${role.badgeClass}`}>{role.roleTag}</span>
                <span className="role-level-indicator">Tier 0{idx + 1}</span>
              </div>

              <h3>{role.title}</h3>
              <p>{role.desc}</p>

              <div className="role-perms-title">Granted Capabilities</div>
              <ul className="role-perms">
                {role.perms.map((perm) => (
                  <li key={perm}>{perm}</li>
                ))}
              </ul>

              <div className="role-card-accent-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
