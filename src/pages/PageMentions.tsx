import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

export default function PageMentions() {
    return (
        <>
            <Navbar />
            <div className="legal-page">
                <div className="container">
                    <div className="legal-hero">
                        <Link to="/" className="legal-back">← Retour à l'accueil</Link>
                        <div className="section-label">Informations légales</div>
                        <h1 className="legal-title">Mentions légales</h1>
                        <p className="legal-updated">Dernière mise à jour : 23 février 2026</p>
                    </div>

                    <div className="legal-body">

                        <div className="legal-section">
                            <h2>1. Éditeur du site</h2>
                            <p>Le site <strong>ap13.studio</strong> est édité par la structure AP13, duo d'experts en ingénierie web.</p>
                            <p>
                                <strong>Dénomination :</strong> AP13<br />
                                <strong>Statut :</strong> Freelances / Structure en cours de constitution<br />
                                <strong>Email de contact :</strong> <a href="mailto:contact@ap13.studio">contact@ap13.studio</a>
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>2. Hébergement</h2>
                            <p>
                                Le site est hébergé par :<br />
                                <strong>Vercel Inc.</strong><br />
                                440 N Barranca Ave #4133<br />
                                Covina, CA 91723, États-Unis<br />
                                Site web : <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>3. Propriété intellectuelle</h2>
                            <p>
                                L'ensemble du contenu présent sur ce site (textes, images, logos, graphismes, code source) est la propriété
                                exclusive d'AP13 et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                            </p>
                            <p>
                                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site,
                                quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation préalable écrite d'AP13.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>4. Responsabilité</h2>
                            <p>
                                AP13 s'efforce de maintenir les informations publiées sur ce site aussi précises que possible.
                                Toutefois, AP13 ne peut garantir l'exactitude, la complétude et l'actualité des informations diffusées sur ce site.
                            </p>
                            <p>
                                AP13 décline toute responsabilité pour tout dommage résultant directement ou indirectement de l'accès au site ou
                                de l'utilisation des informations qu'il contient.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>5. Liens hypertextes</h2>
                            <p>
                                Le site peut contenir des liens vers d'autres sites internet. AP13 n'exerce aucun contrôle sur ces sites et
                                décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de confidentialité.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>6. Droit applicable</h2>
                            <p>
                                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront
                                seuls compétents.
                            </p>
                        </div>

                        <hr className="legal-divider" />

                        <div className="legal-section">
                            <h2>7. Contact</h2>
                            <p>
                                Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante :<br />
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
