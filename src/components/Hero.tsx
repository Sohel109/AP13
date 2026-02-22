import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg" />
            <div className="hero-content">

                <div className="hero-badge animate-fadeInUp animate-delay-1">
                    <span className="hero-badge-dot" />
                    Disponible pour de nouveaux projets — 2026
                </div>

                <h1 className="hero-title animate-fadeInUp animate-delay-2">
                    <span className="accent">AP13</span> : L'Ingénierie Web<br />
                    au service de votre Vision.
                </h1>

                <p className="hero-subtitle animate-fadeInUp animate-delay-3">
                    Un duo, deux expertises, zéro compromis. Nous bâtissons des expériences
                    numériques qui convertissent — et qui durent.
                </p>

                <div className="hero-actions animate-fadeInUp animate-delay-4">
                    <a href="#contact" className="btn-primary">
                        Démarrer un projet →
                    </a>
                    <a href="#ecosystem" className="btn-secondary">
                        Découvrir l'expertise
                    </a>
                </div>

                <div className="hero-stats animate-fadeInUp animate-delay-5">
                    <div>
                        <div className="hero-stat-value">40<span>+</span></div>
                        <div className="hero-stat-label">Projets livrés</div>
                    </div>
                    <div>
                        <div className="hero-stat-value">100<span>%</span></div>
                        <div className="hero-stat-label">Taux de satisfaction</div>
                    </div>
                    <div>
                        <div className="hero-stat-value">2<span>×</span></div>
                        <div className="hero-stat-label">Plus vite que l'agence</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
