import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-logo">AP<span>13</span></div>
                        <p className="footer-tagline">
                            Un duo d'experts spécialisé dans la création de sites web haute performance.
                            Précision, rapidité, approche technique rigoureuse.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="footer-social" aria-label="LinkedIn">in</a>
                            <a href="#" className="footer-social" aria-label="Twitter/X">𝕏</a>
                            <a href="#" className="footer-social" aria-label="GitHub">⌥</a>
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">Services</div>
                        <ul className="footer-links">
                            <li><a href="#ecosystem">Design d'Interface</a></li>
                            <li><a href="#ecosystem">Développement Web</a></li>
                            <li><a href="#ecosystem">Stratégie SEO</a></li>
                            <li><a href="#ecosystem">Maintenance</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className="footer-col-title">Agence</div>
                        <ul className="footer-links">
                            <li><a href="#team">L'Équipe</a></li>
                            <li><a href="#process">Notre Processus</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        © 2026 <span>AP13</span> — Tous droits réservés. Fait avec rigueur en France.
                    </p>
                    <div className="footer-legal">
                        <a href="#">Mentions légales</a>
                        <a href="#">Politique de confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
