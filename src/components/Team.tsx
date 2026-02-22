import './Team.css';

export default function Team() {
    return (
        <section className="team" id="team">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-label">L'Équation AP13</div>
                    <h2 className="section-title">Deux esprits.<br />Une structure agile.</h2>
                    <p className="section-desc">Nous traitons chaque projet comme si c'était le nôtre. Parce que votre succès, c'est notre référence.</p>
                </div>

                <div className="equation-grid reveal reveal-delay-1">
                    <div className="team-card">
                        <div className="team-avatar">A</div>
                        <div className="team-role">Co-fondateur · Design Lead</div>
                        <div className="team-name">Le Stratège Visuel</div>
                        <p className="team-bio">
                            Obsédé par les interfaces qui convertissent. Transforme les briefs complexes
                            en expériences utilisateur mémorables — avec un sens aigu du détail et une vision
                            business derrière chaque pixel.
                        </p>
                        <div className="team-skills">
                            <span className="team-skill">Figma</span>
                            <span className="team-skill">UI/UX</span>
                            <span className="team-skill">Branding</span>
                            <span className="team-skill">Shopify</span>
                        </div>
                    </div>

                    <div className="equation-divider">+</div>

                    <div className="team-card">
                        <div className="team-avatar">P</div>
                        <div className="team-role">Co-fondateur · Dev Lead</div>
                        <div className="team-name">L'Architecte du Code</div>
                        <p className="team-bio">
                            Écrit du code comme d'autres écrivent de la prose — propre, structuré, performant.
                            Spécialiste des stacks modernes, il garantit que chaque livrable est prêt
                            pour la production et pour l'avenir.
                        </p>
                        <div className="team-skills">
                            <span className="team-skill">Next.js</span>
                            <span className="team-skill">TypeScript</span>
                            <span className="team-skill">Node.js</span>
                            <span className="team-skill">API</span>
                        </div>
                    </div>
                </div>

                <div className="why-block">
                    <div className="why-quote">
                        Pourquoi choisir AP13 ? Parce que nous traitons chaque projet
                        comme si c'était <span className="highlight">le nôtre.</span>
                    </div>
                    <div className="why-reasons">
                        {[
                            { icon: '✓', text: 'Interlocuteur direct — pas de chef de projet intermédiaire' },
                            { icon: '✓', text: 'Délais respectés, budget maîtrisé, résultats mesurables' },
                            { icon: '✓', text: 'Expertise design + dev réunies dans un seul duo' },
                            { icon: '✓', text: 'Support post-lancement inclus systématiquement' },
                        ].map((r, i) => (
                            <div className="why-reason" key={i}>
                                <div className="why-reason-icon">{r.icon}</div>
                                <div className="why-reason-text">{r.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
