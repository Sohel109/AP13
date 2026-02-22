import './BentoGrid.css';

export default function BentoGrid() {
    return (
        <section className="ecosystem" id="ecosystem">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-label">L'Écosystème AP13</div>
                    <h2 className="section-title">Quatre piliers.<br />Un résultat exceptionnel.</h2>
                    <p className="section-desc">Chaque service est pensé comme un levier de croissance, pas comme une case à cocher.</p>
                </div>

                <div className="bento-grid">

                    {/* Card 1 — Large: Design */}
                    <div className="bento-card bento-card-large reveal reveal-delay-1">
                        <div className="bento-card-number">01 — Design</div>
                        <div className="bento-icon-wrap">◈</div>
                        <div className="bento-card-title">Design d'Interface</div>
                        <p className="bento-card-desc">
                            L'esthétique au service de l'usage. Nous créons des interfaces qui captent l'attention
                            en 0,3 seconde et guident l'utilisateur vers l'action. Design system, prototypage haute fidélité,
                            et tests utilisateurs inclus.
                        </p>
                        <span className="bento-card-tag">UI/UX · Figma · Design System</span>
                        <div className="bento-card-visual">
                            <div className="visual-bar" style={{ width: '80%' }} />
                            <div className="visual-bar-sm" style={{ width: '60%' }} />
                            <div className="visual-bar-sm" style={{ width: '45%' }} />
                        </div>
                        <a href="#contact" className="bento-cta">Lancer un projet design →</a>
                    </div>

                    {/* Card 3 — Tall: Maintenance */}
                    <div className="bento-card bento-card-tall reveal reveal-delay-2">
                        <div className="bento-card-number">04 — Support</div>
                        <div className="bento-icon-wrap">◉</div>
                        <div className="bento-card-title">Maintenance</div>
                        <p className="bento-card-desc">
                            Sérénité totale, 24/7. Votre site est surveillé, mis à jour, et optimisé en continu.
                            Zéro downtime. Zero stress.
                        </p>
                        <span className="bento-card-tag">SLA · Monitoring</span>
                        <div className="bento-card-metrics">
                            <div>
                                <div className="bento-metric-val">99.9<span style={{ fontSize: '1rem' }}>%</span></div>
                                <div className="bento-metric-label">Uptime</div>
                            </div>
                            <div>
                                <div className="bento-metric-val">&lt;2h</div>
                                <div className="bento-metric-label">Réponse</div>
                            </div>
                        </div>
                        <a href="#contact" className="bento-cta bento-cta-sm">Demander un devis →</a>
                    </div>

                    {/* Card 2 — Medium: Dev */}
                    <div className="bento-card reveal reveal-delay-3">
                        <div className="bento-card-number">02 — Dev</div>
                        <div className="bento-icon-wrap">◆</div>
                        <div className="bento-card-title">Développement Hardcore</div>
                        <p className="bento-card-desc">
                            Code propre, rapide et évolutif. Performance maximale (Lighthouse 100), architecture moderne,
                            et intégrations sur-mesure.
                        </p>
                        <span className="bento-card-tag">Next.js · TypeScript · API</span>
                        <a href="#contact" className="bento-cta bento-cta-sm">Créer mon site →</a>
                    </div>

                    {/* Card 4 — Medium: SEO */}
                    <div className="bento-card reveal reveal-delay-4">
                        <div className="bento-card-number">03 — SEO</div>
                        <div className="bento-icon-wrap">◎</div>
                        <div className="bento-card-title">Stratégie SEO</div>
                        <p className="bento-card-desc">
                            Dominez les résultats de recherche. Audit technique, stratégie de contenu, et netlinking —
                            pour un trafic organique durable.
                        </p>
                        <span className="bento-card-tag">SEO · Analytics · Core Web Vitals</span>
                        <a href="#contact" className="bento-cta bento-cta-sm">Booster mon SEO →</a>
                    </div>

                </div>
            </div>
        </section>
    );
}
