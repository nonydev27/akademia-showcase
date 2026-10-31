import dashboardImg from '../assets/images/store/macbook-2880x1800/1-dashboard.png';
import reportCardImg from '../assets/images/store/macbook-2880x1800/2-report-card.png';
import publishResultsImg from '../assets/images/store/macbook-2880x1800/3-publish-results.png';
import gradeSheetImg from '../assets/images/store/macbook-2880x1800/4-grade-sheet.png';
import studentResultsImg from '../assets/images/store/macbook-2880x1800/5-student-results.png';
import feesImg from '../assets/images/store/macbook-2880x1800/6-fees.png';
import attendanceImg from '../assets/images/store/macbook-2880x1800/7-attendance.png';
import studentsImg from '../assets/images/store/macbook-2880x1800/8-students.png';

// Shared screen descriptions used by the demo reel and screenshot carousel.
export const screens = [
  {
    id: 'dashboard',
    image: dashboardImg,
    thumbLabel: 'Admin Dashboard',
    label: 'Admin Dashboard',
    title: 'Real-time school overview & key metrics',
    alt: 'Akademia admin dashboard showing Brightfield Academy KPIs, active grace period banner, student count, outstanding fees, and quick actions',
    points: [
      'Live KPI metric cards display total students, outstanding fees (GHS), students with balances, and the active term.',
      'Subscription banner tracks active grace period status with an exact countdown to renewal.',
      'Quick action buttons allow administrators to immediately add students, record fee payments, publish exam results, or dispatch announcements.',
      'Recent activity feed and outstanding fee tables let school leaders audit operations at a glance.',
    ],
  },
  {
    id: 'students',
    image: studentsImg,
    thumbLabel: 'Students Directory',
    label: 'Students Directory',
    title: 'Comprehensive student registry & enrollment',
    alt: 'Akademia student directory listing Ghanaian learners with official admission numbers, class designations, enrollment status, and guardian contacts',
    points: [
      'Centralized directory organizes every learner with official school admission numbers (e.g. BFA-001) and assigned class levels.',
      'Multi-parameter search and filters enable instant lookup by student name, class, gender, and enrollment status.',
      'Inline actions provide immediate access to view student profiles, academic history, fee balances, and guardian contacts.',
      'Clean enrollment workflow facilitates registering new learners with full bio-data and parent communication details.',
    ],
  },
  {
    id: 'grade-sheet',
    image: gradeSheetImg,
    thumbLabel: 'Grade Sheet',
    label: 'Grade Sheet & Assessment',
    title: 'Ghanaian curriculum grading with 30/20/50 weighting',
    alt: 'Akademia grade sheet showing scores for Ghanaian curriculum subjects with CA 30%, Mid-term 20%, and Exam 50% breakdown',
    points: [
      'Purpose-built for the Ghanaian basic education curriculum, covering English Language, Mathematics, Integrated Science, Asante Twi, French, and Computing.',
      'Enforces Ghana’s official assessment weights: Continuous Assessment (CA) at 30%, Mid-term at 20%, and End-of-Term Exam at 50%.',
      'Instant aggregate computation automatically tallies student total marks, class grade bands, and subject rankings.',
      'Strict role permissions ensure teachers can only enter and edit scores for their assigned classes and subjects.',
    ],
  },
  {
    id: 'publish-results',
    image: publishResultsImg,
    thumbLabel: 'Publish & Intercept',
    label: 'Publish Results & Intercept',
    title: 'Automated Result-Fee Intercept workflow',
    alt: 'Akademia publish results screen illustrating the 3-step publishing process and automatic result withholding for unpaid fees',
    points: [
      'Visual 3-step publishing pipeline: grades entered by teachers, reviewed by administrators, and dispatched to guardians.',
      'Automatic Result-Fee Intercept withholds report cards for students with outstanding fee balances.',
      'Students with cleared fee accounts are marked as RELEASED for immediate report card download and viewing.',
      'Automated notifications trigger SMS and email alerts directly to guardians the moment results are published.',
    ],
  },
  {
    id: 'report-card',
    image: reportCardImg,
    thumbLabel: 'Terminal Report',
    label: 'Terminal Report Card',
    title: 'Official printable PDF report cards with QR verification',
    alt: 'Akademia terminal report card PDF preview featuring school crest, continuous assessment marks, remarks, and tamper-proof verification QR code',
    points: [
      'Generates clean, printable official report cards complete with school crest, student credentials, and term attendance summary.',
      'Provides transparent score breakdowns across CA (30%), Mid-term (20%), and Exam (50%) alongside teacher remarks and class positions.',
      'Tamper-proof QR code enables instant online authenticity verification of report card data by third parties.',
      'Automated grading summaries provide conduct assessments and headteacher promotion recommendations.',
    ],
  },
  {
    id: 'fees',
    image: feesImg,
    thumbLabel: 'Fee Ledger',
    label: 'Fee Ledger & Collections',
    title: 'Paystack-powered tuition and dues collection',
    alt: 'Akademia fees management screen showing student billing, payment history, outstanding balances, and Paystack settlement',
    points: [
      'Flexible fee schedules accommodate tuition, PTA levies, feeding, ICT fees, and extra-curricular dues.',
      'Native Paystack integration supports seamless Ghanaian payment methods including MTN Mobile Money, Telecel Cash, and bank cards.',
      'Real-time ledger updates student balances immediately upon webhook payment verification.',
      'Targeted SMS reminders can be dispatched to guardians with outstanding arrears in a single click.',
    ],
  },
  {
    id: 'attendance',
    image: attendanceImg,
    thumbLabel: 'Attendance Register',
    label: 'Attendance Register',
    title: 'Daily morning & afternoon class roll call',
    alt: 'Akademia attendance tracking interface showing class roll call, presence status, and attendance rate statistics',
    points: [
      'Quick roll-call interface enables teachers to record morning and afternoon attendance in seconds.',
      'Standardized status tracking records Present, Absent, Late, and Excused entries with automated tallying.',
      'Aggregated attendance analytics highlight chronic absenteeism and term-wide attendance percentages.',
      'Automatic guardian alerts can notify parents when an unexplained absence is recorded.',
    ],
  },
  {
    id: 'student-results',
    image: studentResultsImg,
    thumbLabel: 'Student Breakdown',
    label: 'Student Academic Profile',
    title: 'In-depth learner performance & historical analytics',
    alt: 'Akademia student grade modal showing detailed performance breakdown across all registered subjects and historical terms',
    points: [
      'Granular modal view displays an individual learner’s performance across all enrolled subjects for the term.',
      'Comparative indicators showcase class rank, subject percentiles, and subject-by-subject performance trends.',
      'Direct administrative controls allow reviewing audit trails for grade modifications before final sign-off.',
      'Immediate preview of the generated terminal report card directly from the student profile.',
    ],
  },
];
