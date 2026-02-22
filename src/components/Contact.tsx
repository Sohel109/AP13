import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Connect</div>
                    <h2 className="section-title">Prêt à passer<br />à l'étape AP13 ?</h2>
                </div>

                <div className="contact-grid">
                    <div>
                        <h3 className="contact-info-title">
                            Parlons de votre projet.<br />
                            <span className="accent">Zéro engagement</span>, 100% concret.
                        </h3>
                        <p className="contact-info-text">
                            On répond dans les 24h. Pas de commercial, pas de processus à rallonge.
                            Directement avec les deux associés qui réaliseront votre projet.
                        </p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <div className="contact-detail-icon">✉</div>
                                <span>contact@ap13.studio</span>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon">◎</div>
                                <span>Réponse sous 24h garantie</span>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon">◆</div>
                                <span>1er appel stratégique offert (30 min)</span>
                            </div>
                        </div>
                    </div>

                    {sent ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', padding: '3rem', border: '1px solid rgba(204,255,0,0.2)', borderRadius: '10px', background: 'rgba(204,255,0,0.04)' }}>
                            <div style={{ fontSize: '2.5rem' }}>✓</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent)' }}>Message envoyé !</div>
                            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center' }}>On revient vers vous dans les 24h. À très vite.</div>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Prénom</label>
                                    <input className="form-input" type="text" placeholder="Alexandre" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Société</label>
                                    <input className="form-input" type="text" placeholder="Votre entreprise" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input className="form-input" type="email" placeholder="vous@entreprise.com" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Type de projet</label>
                                <select className="form-select">
                                    <option value="">Sélectionnez...</option>
                                    <option>Site vitrine haute performance</option>
                                    <option>E-commerce Shopify</option>
                                    <option>Application web sur-mesure</option>
                                    <option>Refonte complète + SEO</option>
                                    <option>Maintenance & évolution</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Votre projet en 2-3 lignes</label>
                                <textarea className="form-textarea" placeholder="Décrivez ce que vous souhaitez accomplir..." required />
                            </div>
                            <button type="submit" className="btn-submit">
                                Envoyer le brief →
                            </button>
                            <p className="form-disclaimer">En soumettant ce formulaire, vous acceptez d'être recontacté par AP13. Aucun spam, promis.</p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
