// Shared data for the demo reel and the "See It In Action" carousel.
// Every point is grounded in what is actually visible on the screenshot.
export const screens = [
  {
    id: 'dashboard',
    image: 'images/Dashboard (Windows)-selection.png',
    thumbLabel: 'Admin Dashboard',
    label: 'Admin Dashboard',
    title: 'Real-time school overview',
    alt: 'Akademia admin dashboard with KPI cards, charts and the students table',
    // What the screenshot actually shows, one bullet per thing:
    points: [
      'Top KPI cards show total students, attendance rate today, fee collections, and pending results.',
      'The sidebar lists every module — Students, Attendance, Fees, Grades, Report Cards, Settings — and highlights the active one.',
      'A class-level breakdown shows how each class is performing at a glance.',
      'The students table at the bottom shows admission numbers like VIS-001 — no UUIDs anywhere.',
    ],
  },
  {
    id: 'staff',
    image: 'images/Staff (Windows)-selection.png',
    thumbLabel: 'Staff & Assignments',
    label: 'Staff & Assignments',
    title: 'Teachers, classes, subjects, PINs',
    alt: 'Akademia staff management screen listing teachers with their class and subject assignments',
    points: [
      'Every staff row shows the teacher\'s name alongside their assigned class and subject.',
      'Access codes follow the readable format T-AO-ENGLP2-JHS2A — subject and class are legible in the code itself.',
      'Grade entry is PIN-gated, so no one records grades on an unlocked machine.',
      'Teachers can reset their own PIN — no admin round-trip needed.',
    ],
  },
  {
    id: 'subscription',
    image: 'images/Subscription (Windows)-selection.png',
    thumbLabel: 'Subscriptions & Licensing',
    label: 'Subscriptions & Licensing',
    title: 'Licensing, plan tiers & renewal',
    alt: 'Akademia subscription and licensing screen with plan cards and renewal actions',
    points: [
      'A status banner states the tenant\'s license state at the top of the screen.',
      'Plan cards show the tier limits and features side by side for easy comparison.',
      'Renewal runs through Paystack directly inside the app — no external portal.',
      'Expired schools in the grace period keep read-only access until renewal.',
    ],
  },
  {
    id: 'signin',
    image: 'images/Sign In (Windows)-selection.png',
    thumbLabel: 'Secure Sign In',
    label: 'Secure Sign In',
    title: 'Role-aware authentication',
    alt: 'Akademia sign in screen with email and password fields',
    points: [
      'A clean email + password form against the Akademia brand panel.',
      'Sign-in routes each user to the workspace that matches their role.',
      'Sessions are short-lived JWTs issued by Supabase Auth.',
      'Every login is written to the audit trail with actor and timestamp.',
    ],
  },
];
