import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/ServicePage.css';

const features = [
    { icon: '▲', name: 'Next.js & React', desc: 'Applications web modernes, ultra-rapides, Server Side Rendering et génération statique pour un SEO optimal.' },
    { icon: '◎', name: 'API & Intégrations', desc: 'Connexion à vos outils existants : CRM, ERP, paiement, e-mail marketing. On construit des ponts, pas des silos.' },
    { icon: '◆', name: 'Performance Lighthouse 100', desc: 'Optimisation poussée : lazy loading, code splitting, images optimisées. Un score parfait sur tous les indicateurs.' },
    { icon: '◉', name: 'Architecture évolutive', desc: 'Code propre, modulaire, documenté. Votre site pourra grandir sans qu\'il faille tout reconstruire dans 18 mois.' },
    { icon: '◈', name: 'TypeScript & Tests', desc: 'Typage strict et tests automatisés pour garantir la stabilité de votre application en production.' },
    { icon: '▣', name: 'Shopify & E-commerce', desc: 'Boutiques en ligne sur-mesure avec Shopify ou solution sur-mesure : paiement, gestion stocks, thème unique.' },
];

const process = [
    { num: '01', title: 'Audit & Architecture', desc: 'Analyse de l\'existant, choix du stack technique, architecture de l\'API et des données. Zéro dette technique dès le départ.' },
    { num: '02', title: 'Développement Itératif', desc: 'Sprints de 2 semaines avec démo à chaque fin de sprint. Vous voyez avancer le projet en temps réel.' },
    { num: '03', title: 'Intégration du Design', desc: 'Chaque composant est intégré au pixel près selon les maquettes validées. Fidelité maximum entre design et code.' },
    { num: '04', title: 'Tests & Qualité', desc: 'Tests unitaires, tests d\'intégration, tests de performance. On livre du code qu\'on assume.' },
    { num: '05', title: 'Déploiement & Monitoring', desc: 'Mise en production maîtrisée avec CI/CD, monitoring temps réel et alertes. Zéro surprise le jour J.' },
];

export default function PageDev() {
    return (
        <>
            <Navbar />
            <div className="service-page">
                <section className="sp-hero">
                    <div className="container">
                        <Link to="/" className="sp-back">← Retour à l'accueil</Link>
                        <div className="sp-hero-icon">▲</div>
                        <div className="sp-label">Service 02</div>
                        <h1 className="sp-title">Développement Web <span className="accent">sans compromis.</span></h1>
                        <p className="sp-subtitle">
                            Code propre, rapide et évolutif. On ne livre pas un site — on livre une infrastructure
                            solide sur laquelle votre business peut s'appuyer pendant des années.
                        </p>
                        <div className="sp-hero-actions">
                            <Link to="/#contact" className="btn-primary">Démarrer le développement →</Link>
                            <Link to="/#ecosystem" className="btn-secondary">Voir nos autres services</Link>
                        </div>
                    </div>
                </section>

                <section className="sp-features">
                    <div className="container">
                        <div className="sp-label">Technologies & Expertises</div>
                        <div className="sp-features-title">Du code qui tourne.<br />Des stacks qui durent.</div>
                        <div className="sp-grid">
                            {features.map((f) => (
                                <div className="sp-feature-card" key={f.name}>
                                    <div className="sp-feature-icon">{f.icon}</div>
                                    <div className="sp-feature-name">{f.name}</div>
                                    <p className="sp-feature-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="sp-process">
                    <div className="container">
                        <div className="sp-label">Notre méthode</div>
                        <div className="sp-features-title">5 phases. Une livraison sans stress.</div>
                        <div className="sp-process-list">
                            {process.map((p) => (
                                <div className="sp-process-item" key={p.num}>
                                    <div className="sp-process-num">{p.num}</div>
                                    <div>
                                        <div className="sp-process-content-title">{p.title}</div>
                                        <p className="sp-process-content-desc">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="sp-cta">
                    <div className="container">
                        <div className="sp-cta-box">
                            <div>
                                <div className="sp-cta-title">Un projet de développement en tête ?</div>
                                <p className="sp-cta-text">Décrivez-nous votre projet. On revient avec une estimation et une approche technique concrète sous 24h.</p>
                            </div>
                            <Link to="/#contact" className="btn-primary">Démarrer →</Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
