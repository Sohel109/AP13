import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        AP<span>13</span>
      </a>
      <ul className="nav-links">
        <li><a href="#ecosystem">Services</a></li>
        <li><a href="#team">L'Équipe</a></li>
        <li><a href="#process">Processus</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Démarrer un projet</a>
    </nav>
  );
}
