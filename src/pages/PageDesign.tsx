import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/ServicePage.css';

const features = [
    { icon: '◈', name: 'Design System complet', desc: 'Tokens, composants, règles typographiques — une bibliothèque cohérente et réutilisable pour toute votre équipe.' },
    { icon: '◑', name: 'Prototypage haute fidélité', desc: 'Maquettes interactives Figma avant le premier pixel de code. Vous validez, on construit.' },
    { icon: '◉', name: 'UX Research & Tests', desc: 'Tests utilisateurs, heatmaps, parcours critique — chaque décision design est basée sur des données.' },
    { icon: '◆', name: 'Responsive & Accessible', desc: 'Chaque interface est pensée pour tous les écrans et conforme aux standards WCAG d\'accessibilité.' },
    { icon: '▣', name: 'Animation & Micro-interactions', desc: 'Des effets subtils qui guident l\'attention et rendent l\'interface vivante sans surcharger l\'expérience.' },
    { icon: '◐', name: 'Handoff Développeur', desc: 'Livrables prêts pour le développement : specs précises, assets exportés, documentation complète.' },
];

const process = [
    { num: '01', title: 'Brief & Immersion', desc: 'On plonge dans votre univers : cibles, concurrents, objectifs. Pour designer juste, il faut d\'abord comprendre.' },
    { num: '02', title: 'Wireframes & Architecture', desc: 'On structure avant de styliser. L\'arborescence et les maquettes fil de fer définissent la logique de navigation.' },
    { num: '03', title: 'Design Haute Fidélité', desc: 'Charte graphique, typographie, couleurs, composants. Chaque écran est designé pixel par pixel dans Figma.' },
    { num: '04', title: 'Tests & Itérations', desc: 'Retours, ajustements, boucles de feedback rapides. Le design final est celui qui a été validé par de vrais utilisateurs.' },
    { num: '05', title: 'Handoff & Accompagnement', desc: 'On livre le design prêt à coder et on reste disponibles pendant le développement pour répondre à chaque question.' },
];

export default function PageDesign() {
    return (
        <>
            <Navbar />
            <div className="service-page">
                {/* Hero */}
                <section className="sp-hero">
                    <div className="container">
                        <Link to="/" className="sp-back">← Retour à l'accueil</Link>
                        <div className="sp-hero-icon">◈</div>
                        <div className="sp-label">Service 01</div>
                        <h1 className="sp-title">Design d'Interface <span className="accent">qui convertit.</span></h1>
                        <p className="sp-subtitle">
                            L'esthétique au service de l'usage. On ne crée pas de belles interfaces par vanité —
                            on les crée pour que vos utilisateurs atteignent leur objectif en un minimum de clics.
                        </p>
                        <div className="sp-hero-actions">
                            <Link to="/#contact" className="btn-primary">Lancer mon projet design →</Link>
                            <Link to="/#ecosystem" className="btn-secondary">Voir nos autres services</Link>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="sp-features">
                    <div className="container">
                        <div className="sp-label">Ce qu'on livre</div>
                        <div className="sp-features-title">Tout ce dont vous avez besoin,<br />rien de superflu.</div>
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

                {/* Process */}
                <section className="sp-process">
                    <div className="container">
                        <div className="sp-label">Notre méthode</div>
                        <div className="sp-features-title">5 étapes. Du brief au design final.</div>
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

                {/* CTA */}
                <section className="sp-cta">
                    <div className="container">
                        <div className="sp-cta-box">
                            <div>
                                <div className="sp-cta-title">Prêt pour un design qui performe ?</div>
                                <p className="sp-cta-text">Premier appel stratégique offert. On analyse votre problème et on vous propose une approche concrète — sans engagement.</p>
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
