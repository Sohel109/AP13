import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const services = [
  { icon: '◈', label: 'Design d\'Interface', path: '/services/design', desc: 'UI/UX · Figma · Design System' },
  { icon: '▲', label: 'Développement Web', path: '/services/developpement', desc: 'Next.js · TypeScript · API' },
  { icon: '◎', label: 'Stratégie SEO', path: '/services/seo', desc: 'SEO · Analytics · Core Web Vitals' },
  { icon: '◉', label: 'Maintenance', path: '/services/maintenance', desc: 'SLA · Monitoring · 24/7' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without jumping
        window.history.pushState(null, '', `/${hash}`);
      }
    }
    // If not on homepage, let the Link navigate naturally to /#hash
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        AP<span>13</span>
      </Link>

      <ul className="nav-links">
        {/* Services with dropdown */}
        <li
          className="nav-item-dropdown"
          onMouseEnter={() => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
            setDropdownOpen(true);
          }}
          onMouseLeave={() => {
            closeTimer.current = setTimeout(() => setDropdownOpen(false), 200);
          }}
        >
          <button className={`nav-dropdown-trigger ${dropdownOpen ? 'open' : ''}`}>
            Services
            <span className="nav-chevron">›</span>
          </button>

          <div className={`nav-dropdown ${dropdownOpen ? 'visible' : ''}`}>
            {services.map((s) => (
              <Link to={s.path} key={s.path} className="nav-dropdown-item">
                <span className="nav-dropdown-icon">{s.icon}</span>
                <div>
                  <div className="nav-dropdown-label">{s.label}</div>
                  <div className="nav-dropdown-desc">{s.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </li>

        <li><Link to="/#team" onClick={(e) => handleNavClick(e, '#team')}>L'Équipe</Link></li>
        <li><Link to="/#process" onClick={(e) => handleNavClick(e, '#process')}>Processus</Link></li>
      </ul>

      <Link to="/#contact" className="nav-cta" onClick={(e) => handleNavClick(e, '#contact')}>Démarrer un projet</Link>
    </nav>
  );
}
