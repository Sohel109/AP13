import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/ServicePage.css';

const features = [
    { icon: '◎', name: 'Audit SEO Technique', desc: 'Analyse complète : Core Web Vitals, balises, crawlabilité, liens cassés, duplicate content. Un bilan honnête et exhaustif.' },
    { icon: '◑', name: 'Recherche de mots-clés', desc: 'Identification des requêtes à fort potentiel pour votre secteur. On cible les mots-clés qui ramènent des clients, pas du trafic inutile.' },
    { icon: '◆', name: 'SEO On-Page', desc: 'Optimisation des titres, méta-descriptions, structure Hn, maillage interne. Chaque page est optimisée pour les moteurs et les humains.' },
    { icon: '◉', name: 'Netlinking & Autorité', desc: 'Construction d\'un profil de backlinks de qualité. On développe l\'autorité de domaine sur le long terme.' },
    { icon: '◈', name: 'SEO Local', desc: 'Google Business Profile, citations locales, géo-targeting. On vous positionne là où vos clients vous cherchent.' },
    { icon: '▣', name: 'Suivi & Reporting', desc: 'Tableau de bord mensuel avec positions, trafic, conversions et recommandations actionnables. Vous savez toujours où vous en êtes.' },
];

const process = [
    { num: '01', title: 'Audit Initial', desc: 'Analyse de votre site, de votre marché et de vos concurrents. On identifie les freins et les opportunités prioritaires.' },
    { num: '02', title: 'Stratégie & Roadmap', desc: 'Un plan d\'action clair avec des priorités, des délais et des résultats attendus. Pas de promesses vagues, que des objectifs mesurables.' },
    { num: '03', title: 'Optimisations Techniques', desc: 'Corrections on-page, améliorations de vitesse, structure de données structurées. La fondation technique est posée.' },
    { num: '04', title: 'Production de Contenu', desc: 'Articles, pages de service, pages piliers — le contenu qui répond aux questions de vos prospects et plait à Google.' },
    { num: '05', title: 'Suivi & Optimisation Continue', desc: 'Le SEO n\'est pas un projet ponctuel. On surveille, ajuste et améliore en continu pour maintenir et accroître vos positions.' },
];

export default function PageSEO() {
    return (
        <>
            <Navbar />
            <div className="service-page">
                <section className="sp-hero">
                    <div className="container">
                        <Link to="/" className="sp-back">← Retour à l'accueil</Link>
                        <div className="sp-hero-icon">◎</div>
                        <div className="sp-label">Service 03</div>
                        <h1 className="sp-title">Stratégie SEO <span className="accent">qui génère.</span></h1>
                        <p className="sp-subtitle">
                            Dominez les résultats de recherche. Le SEO est le seul canal marketing qui travaille
                            pour vous 24h/24 sans budget publicitaire. On vous aide à en faire votre levier principal de croissance.
                        </p>
                        <div className="sp-hero-actions">
                            <Link to="/#contact" className="btn-primary">Auditer mon site →</Link>
                            <Link to="/#ecosystem" className="btn-secondary">Voir nos autres services</Link>
                        </div>
                    </div>
                </section>

                <section className="sp-features">
                    <div className="container">
                        <div className="sp-label">Nos leviers SEO</div>
                        <div className="sp-features-title">Une stratégie complète.<br />Des résultats durables.</div>
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
                        <div className="sp-features-title">5 phases pour dominer votre marché.</div>
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
                                <div className="sp-cta-title">Où en est votre SEO aujourd'hui ?</div>
                                <p className="sp-cta-text">On fait un audit gratuit de votre site et on vous dit en toute honnêteté où les opportunités se trouvent.</p>
                            </div>
                            <Link to="/#contact" className="btn-primary">Audit gratuit →</Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
