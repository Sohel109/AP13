import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/ServicePage.css';

const features = [
    { icon: '◉', name: 'Monitoring 24/7', desc: 'Surveillance continue de votre site : disponibilité, temps de réponse, alertes automatiques en cas d\'incident.' },
    { icon: '◆', name: 'Mises à jour régulières', desc: 'CMS, plugins, dépendances — tout est maintenu à jour pour garantir sécurité et performance.' },
    { icon: '◈', name: 'Sauvegardes automatiques', desc: 'Sauvegarde quotidienne de votre site et de votre base de données. En cas de problème, on restaure en minutes.' },
    { icon: '▣', name: 'Corrections de bugs', desc: 'Bugs identifiés, correctifs déployés. Vous nous signalez un problème, on le résout — sans délai ni extra à facturer.' },
    { icon: '◎', name: 'Optimisation continue', desc: 'Analyse mensuelle des performances, ajustements SEO, nettoyage de code. Votre site s\'améliore dans le temps.' },
    { icon: '◐', name: 'Évolutions mineures', desc: 'Ajout de contenu, modification de pages, ajustements visuels — inclus dans votre forfait mensuel.' },
];

const process = [
    { num: '01', title: 'Audit d\'entrée', desc: 'Avant de prendre en charge votre site, on fait un état des lieux complet. On sait exactement ce qu\'on gère.' },
    { num: '02', title: 'Mise en place des outils', desc: 'Monitoring, sauvegardes automatiques, alertes. Votre site est sous surveillance dès le premier jour.' },
    { num: '03', title: 'Contrat de service (SLA)', desc: 'Délais de réponse garantis, plages de maintenance définies. Vous savez exactement à quoi vous attendre.' },
    { num: '04', title: 'Rapport mensuel', desc: 'Chaque mois, un rapport de maintenance : actions effectuées, performances, recommandations. Transparence totale.' },
    { num: '05', title: 'Évolutions & Support', desc: 'On reste disponibles pour vos questions et petites évolutions. Un mail, une réponse. Toujours.' },
];

export default function PageMaintenance() {
    return (
        <>
            <Navbar />
            <div className="service-page">
                <section className="sp-hero">
                    <div className="container">
                        <Link to="/" className="sp-back">← Retour à l'accueil</Link>
                        <div className="sp-hero-icon">◉</div>
                        <div className="sp-label">Service 04</div>
                        <h1 className="sp-title">Maintenance <span className="accent">sans stress.</span></h1>
                        <p className="sp-subtitle">
                            Sérénité totale, 24/7. Votre site est un outil business critique — il mérite d'être surveillé,
                            entretenu et amélioré en permanence. On s'en occupe à votre place.
                        </p>
                        <div className="sp-hero-actions">
                            <Link to="/#contact" className="btn-primary">Obtenir un forfait →</Link>
                            <Link to="/#ecosystem" className="btn-secondary">Voir nos autres services</Link>
                        </div>
                    </div>
                </section>

                <section className="sp-features">
                    <div className="container">
                        <div className="sp-label">Ce qui est inclus</div>
                        <div className="sp-features-title">Zéro downtime.<br />Zéro surprise.</div>
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
                        <div className="sp-label">Comment ça marche</div>
                        <div className="sp-features-title">On prend en charge.<br />Vous dormez tranquille.</div>
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
                                <div className="sp-cta-title">Qui s'occupe de votre site en ce moment ?</div>
                                <p className="sp-cta-text">Si la réponse est personne — ou vous-même entre deux dossiers — il est temps de déléguer. On reprend votre site en main dès cette semaine.</p>
                            </div>
                            <Link to="/#contact" className="btn-primary">Déléguer maintenant →</Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
