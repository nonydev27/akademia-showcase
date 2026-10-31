import dashboardImg from '../assets/images/dashboard.jpg';
import staffImg from '../assets/images/staff.jpg';
import subscriptionImg from '../assets/images/subscription.jpg';
import signInImg from '../assets/images/signin.png';

// Shared screen descriptions used by the demo and screenshot carousel.
export const screens = [
  {
    id: 'dashboard',
    image: dashboardImg,
    thumbLabel: 'Admin Dashboard',
    label: 'Admin Dashboard',
    title: 'Real-time school overview',
    alt: 'Akademia school dashboard showing subscription status, summary cards, quick actions and outstanding fees',
    points: [
      'The summary cards show student count, outstanding fees, students with balances, and today’s date.',
      'A subscription banner calls out the active grace period and remaining days.',
      'Quick actions surface common tasks such as adding a student, recording a payment, and publishing results.',
      'The outstanding-fees panel provides a place to review balances.',
    ],
  },
  {
    id: 'staff',
    image: staffImg,
    thumbLabel: 'Staff & Assignments',
    label: 'Staff & Assignments',
    title: 'Teachers, class assignments & staff details',
    alt: 'Akademia staff screen showing a teacher list, account status, assignment column and teacher details panel',
    points: [
      'The teacher table shows names, email addresses, assignments, and account status.',
      'The details panel identifies the selected teacher and shows their role and join date.',
      'Assignment controls let an administrator assign a teacher to classes.',
      'The screen makes it easy to scan staff status without opening each account.',
    ],
  },
  {
    id: 'subscription',
    image: subscriptionImg,
    thumbLabel: 'Subscriptions & Licensing',
    label: 'Subscriptions & Licensing',
    title: 'Licensing, plan tiers & renewal',
    alt: 'Akademia subscription screen showing a grace-period notice, plan cards, annual prices and renewal controls',
    points: [
      'A prominent notice shows the subscription is in its grace period and gives the remaining time.',
      'Basic, Standard, and Premium plans are compared side by side with annual prices and included features.',
      'The selected plan is highlighted, and renewal controls remain visible at the bottom.',
      'The screen keeps subscription status and plan selection together.',
    ],
  },
  {
    id: 'signin',
    image: signInImg,
    thumbLabel: 'Secure Sign In',
    label: 'Secure Sign In',
    title: 'Sign in to your school workspace',
    alt: 'Akademia sign-in screen with product benefits, email and password fields, forgot-password link and sign-in button',
    points: [
      'The branded panel introduces Akademia and lists the main school-management benefits.',
      'The form provides email and password fields, plus a forgot-password link.',
      'A visibility control lets users check their password before submitting.',
      'A prominent sign-in button anchors the form.',
    ],
  },
];
