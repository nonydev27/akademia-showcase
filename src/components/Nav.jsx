export default function Nav() {
  return (
  {/* ══════════════════ NAV ══════════════════ */}
  <nav id="nav">
    <a href="#" className="nav-logo">
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Akademia">
        <defs>
          <linearGradient id="navlogo-bg" x1={0} y1={0} x2={40} y2={40} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e3a8a" /><stop offset="100%" stopColor="#312e81" />
          </linearGradient>
          <linearGradient id="navlogo-cap" x1={0} y1={0} x2={40} y2={20} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
          <linearGradient id="navlogo-tassel" x1={0} y1={0} x2={6} y2={6} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fcd34d" /><stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect width={40} height={40} rx={10} fill="url(#navlogo-bg)" />
        <polygon points="20,9 30,13.8 20,18.6 10,13.8" fill="url(#navlogo-cap)" />
        <path d="M13,15 L13,20.5 C13,23.3 16.1,25.6 20,25.6 C23.9,25.6 27,23.3 27,20.5 L27,15 L20,18.6 Z" fill="#ffffff" fillOpacity="0.9" />
        <line x1={30} y1="13.8" x2={30} y2={20} stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
        <circle className="logo-orb" cx={30} cy="21.2" r="1.8" fill="url(#navlogo-tassel)" />
        <line x1="28.8" y1={23} x2="28.8" y2={27} stroke="#fcd34d" strokeWidth="0.9" strokeLinecap="round" />
        <line x1={30} y1={23} x2={30} y2={27} stroke="#fcd34d" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="31.2" y1={23} x2="31.2" y2={27} stroke="#fcd34d" strokeWidth="0.9" strokeLinecap="round" />
        <rect x="19.3" y="27.5" width="1.4" height={7} rx="0.6" fill="#ffffff" fillOpacity="0.85" />
        <path d="M19.3,28 C16,27.5 13,28.5 12,29.5 L12,34.5 C13.2,33.5 16.2,32.8 19.3,33.3 Z" fill="#ffffff" fillOpacity="0.55" />
        <path d="M20.7,28 C24,27.5 27,28.5 28,29.5 L28,34.5 C26.8,33.5 23.8,32.8 20.7,33.3 Z" fill="#ffffff" fillOpacity="0.55" />
      </svg>
      Akademia
    </a>
    <ul className="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#watch">Demo</a></li>
      <li><a href="#action">Screenshots</a></li>
      <li><a href="#how">How It Works</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#store" className="nav-cta"><span>Get the App</span></a></li>
    </ul>
  </nav>
  );
}
