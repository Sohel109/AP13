import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

export default function PagePrivacy() {
    return (
        <>
            <Navbar />
            <div className="legal-page">
                <div className="container">
                    <div className="legal-hero">
                        <Link to="/" className="legal-back">← Retour à l'accueil</Link>
                        <div className="section-label">Vos données</div>
                        <h1 className="legal-title">Politique de confidentialité</h1>
                        <p className="legal-updated">Dernière mise à jour : 23 février 2026</p>
                    </div>

                    <div className="legal-body">

                        <div className="legal-section">
                            <h2>1. Responsable du traitement</h2>
                            <p>
                                AP13, joignable à l'adresse <a href="mailto:contact@ap13.studio">contact@ap13.studio</a>,
                                est responsable du traitement des données personnelles collectées via ce site.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>2. Données collectées</h2>
                            <p>Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact :</p>
                            <ul>
                                <li>Prénom</li>
                                <li>Nom de votre société (optionnel)</li>
                                <li>Adresse email</li>
                                <li>Type de projet sélectionné</li>
                                <li>Description libre de votre projet</li>
                            </ul>
                            <p style={{ marginTop: '0.75rem' }}>
                                Nous ne collectons aucune donnée de navigation (cookies de tracking, pixels publicitaires)
                                sans votre consentement explicite.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>3. Finalité du traitement</h2>
                            <p>Les données collectées sont utilisées exclusivement pour :</p>
                            <ul>
                                <li>Répondre à vos demandes de contact et de devis</li>
                                <li>Établir un suivi de la relation commerciale</li>
                                <li>Améliorer la qualité de nos services</li>
                            </ul>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>4. Base légale</h2>
                            <p>
                                Le traitement de vos données est fondé sur votre consentement (article 6.1.a du RGPD),
                                exprimé lors de la soumission du formulaire de contact.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>5. Conservation des données</h2>
                            <p>
                                Vos données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter
                                de votre dernière prise de contact, sauf obligation légale contraire.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>6. Partage des données</h2>
                            <p>
                                AP13 ne vend ni ne loue vos données personnelles à des tiers. Vos données peuvent être
                                accessibles à nos éventuels sous-traitants techniques (hébergeur, outil d'email) dans le
                                strict cadre de la prestation et sous couvert d'accords de confidentialité.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>7. Vos droits (RGPD)</h2>
                            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
                            <ul>
                                <li><strong>Droit d'accès</strong> — consulter les données vous concernant</li>
                                <li><strong>Droit de rectification</strong> — corriger des données inexactes</li>
                                <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données</li>
                                <li><strong>Droit d'opposition</strong> — vous opposer au traitement de vos données</li>
                                <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format lisible</li>
                            </ul>
                            <p style={{ marginTop: '0.75rem' }}>
                                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@ap13.studio">contact@ap13.studio</a><br />
                                Vous avez également le droit d'introduire une réclamation auprès de la
                                <a href="https://www.cnil.fr" target="_blank" rel="noreferrer"> CNIL</a>.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>8. Cookies</h2>
                            <p>
                                Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement
                                (pas de cookies publicitaires ou de tracking tiers). Aucun consentement n'est requis pour ces cookies.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>9. Contact DPO</h2>
                            <p>
                                Pour toute question relative à la protection de vos données personnelles :<br />
                                <a href="mailto:contact@ap13.studio">contact@ap13.studio</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
