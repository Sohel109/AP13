import { useState, useEffect } from 'react';
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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        AP<span>13</span>
      </Link>

      <ul className="nav-links">
        {/* Services with dropdown */}
        <li
          className="nav-item-dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
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

        <li><Link to="/#team">L'Équipe</Link></li>
        <li><Link to="/#process">Processus</Link></li>
      </ul>

      <Link to="/#contact" className="nav-cta">Démarrer un projet</Link>
    </nav>
  );
}
