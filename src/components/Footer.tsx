import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <Link to="/" className="footer-logo">AP<span>13</span></Link>
                        <p className="footer-tagline">
                            Un duo d'experts spécialisé dans la création de sites web haute performance.
                            Précision, rapidité, approche technique rigoureuse.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.linkedin.com/company/studio-ap13/" target="_blank" rel="noreferrer" className="footer-social" aria-label="LinkedIn">in</a>
                            <a href="#" className="footer-social" aria-label="Twitter/X">𝕏</a>
                            <a href="#" className="footer-social" aria-label="GitHub">⌥</a>
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">Services</div>
                        <ul className="footer-links">
                            <li><Link to="/services/design">Design d'Interface</Link></li>
                            <li><Link to="/services/developpement">Développement Web</Link></li>
                            <li><Link to="/services/seo">Stratégie SEO</Link></li>
                            <li><Link to="/services/maintenance">Maintenance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className="footer-col-title">Agence</div>
                        <ul className="footer-links">
                            <li><a href="/#team">L'Équipe</a></li>
                            <li><a href="/#process">Notre Processus</a></li>
                            <li><a href="/#contact">Contact</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        © 2026 <span>AP13</span> — Tous droits réservés. Fait avec rigueur en France.
                    </p>
                    <div className="footer-legal">
                        <Link to="/mentions-legales">Mentions légales</Link>
                        <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
