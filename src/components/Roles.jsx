import React from 'react';
import { Building, GraduationCap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/audio.js';
import { useApp } from '../context/AppContext.jsx';

const ROLES = [
  {
    id: 'schooladmin',
    roleTag: 'School Administrator',
    title: 'Principal and Headteacher',
    badgeClass: 'tag-blue',
    cardClass: 'schooladmin',
    icon: Building,
    desc: 'Full administrative control over a single institution. Configures academic calendars, fee structures, staff assignments, and publishes terminal exam results.',
    perms: [
      'Configure academic years, terms, and classes for Primary, JHS, and SHS',
      'Assign teachers to specific class and subject combinations',
      'Configure fee categories for tuition, feeding, PTA, and ICT levies',
      'Authorize terminal exam publication and Result Fee Intercept status',
      'Dispatch automated SMS and email broadcasts to registered guardians',
    ],
  },
  {
    id: 'staff',
    roleTag: 'Staff and Teachers',
    title: 'Classroom Educators',
    badgeClass: 'tag-sage',
    cardClass: 'staff',
    icon: GraduationCap,
    desc: 'Dedicated daily workspace for educators. Teachers can only view and modify grades for their assigned subjects and classes, strictly safeguarding assessment integrity.',
    perms: [
      'Record morning and afternoon roll call attendance in seconds',
      'Enter assessment scores across Continuous Assessment 30%, Mid Term 20%, Exam 50%',
      'Record conduct remarks and behavioral observations per student',
      'Strict isolation: teachers cannot view or edit marks of other classes',
      'Export class rosters and attendance performance summaries',
    ],
  },
];

export default function Roles() {
  const { t } = useApp();

  return (
    <section className="roles-section" id="roles">
      <div className="section-watermark" aria-hidden="true">
        PERMISSIONS
      </div>

      <div className="container">
        <div className="roles-intro">
          <div className="section-label">
            <ShieldCheck size={16} className="label-icon-blue" />
            <span>{t.roles.label}</span>
          </div>
          <h2 className="section-title">{t.roles.title}</h2>
          <p className="section-sub">{t.roles.subtitle}</p>
        </div>

        {/* Roles 2-Column Clean Grid */}
        <div className="roles-grid roles-two-col">
          {ROLES.map((role) => {
            const RoleIcon = role.icon;
            return (
              <div
                key={role.id}
                className={`role-card ${role.cardClass} interactive-3d-card`}
                onMouseEnter={() => sound.playStep()}
              >
                <div className="role-card-header">
                  <div className="role-tag-box">
                    <RoleIcon size={16} className="role-icon-header" />
                    <span className={`role-tag ${role.badgeClass}`}>{role.roleTag}</span>
                  </div>
                </div>

                <h3>{role.title}</h3>
                <p>{role.desc}</p>

                <div className="role-perms-title">Granted Capabilities</div>
                <ul className="role-perms">
                  {role.perms.map((perm) => (
                    <li key={perm}>
                      <CheckCircle2 size={16} className="perm-check-icon" />
                      <span>{perm}</span>
                    </li>
                  ))}
                </ul>

                <div className="role-card-accent-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
