import { useState, useEffect } from 'react';
import './Hero.css';

const TYPED_WORDS = ['convertissent.', 'performent.', 'durent.', 'impactent.'];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = TYPED_WORDS[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setWordIndex((wordIndex + 1) % TYPED_WORDS.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, wordIndex]);

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
                    Un duo, deux expertises, zéro compromis. Nous bâtissons des expériences numériques qui{' '}
                    <span className="hero-typed">
                        {displayed}<span className="hero-cursor">|</span>
                    </span>
                </p>

                <div className="hero-actions animate-fadeInUp animate-delay-4">
                    <a href="#contact" className="btn-primary">
                        Démarrer un projet →
                    </a>
                    <a href="#ecosystem" className="btn-secondary">
                        Découvrir l'expertise
                    </a>
                </div>

                {/* Trust badges — inspired by Jalis */}
                <div className="hero-trust animate-fadeInUp animate-delay-5">
                    {[
                        { icon: '◆', label: 'Made in France' },
                        { icon: '◎', label: 'Google-ready SEO' },
                        { icon: '✦', label: 'Livré en 3–6 semaines' },
                        { icon: '◉', label: '100% satisfaction' },
                    ].map((b) => (
                        <div className="hero-trust-badge" key={b.label}>
                            <span className="hero-trust-icon">{b.icon}</span>
                            {b.label}
                        </div>
                    ))}
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
