import React from 'react';
import './Process.css';

const steps = [
    {
        num: '01',
        label: 'Phase 1',
        title: 'Analyse Stratégique',
        desc: 'Audit de l\'existant, benchmark concurrentiel, définition des KPIs et de la roadmap technique. On ne code pas avant de comprendre.',
        deliverable: 'Cahier des charges',
    },
    {
        num: '02',
        label: 'Phase 2',
        title: 'Développement Itératif',
        desc: 'Sprints courts, démos hebdomadaires, feedback intégré en temps réel. Vous voyez, vous validez, on avance.',
        deliverable: 'Démos hebdomadaires',
    },
    {
        num: '03',
        label: 'Phase 3',
        title: 'Déploiement & Impact',
        desc: 'Mise en ligne maîtrisée, monitoring post-lancement, optimisation SEO immédiate et mesure des premiers résultats.',
        deliverable: 'Rapport de performance',
    },
];

export default function Process() {
    return (
        <section className="process" id="process">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Notre Processus</div>
                    <h2 className="section-title">De l'idée au résultat.<br />Un chemin structuré.</h2>
                    <p className="section-desc">Pas de surprise, pas de dérive. Chaque étape a un objectif, un livrable, et une date.</p>
                </div>

                <div className="process-steps">
                    {steps.map((step, i) => (
                        <React.Fragment key={step.num}>
                            <div className="process-step">
                                <div className="process-num">{step.num}</div>
                                <div className="process-step-label">{step.label}</div>
                                <div className="process-step-title">{step.title}</div>
                                <p className="process-step-desc">{step.desc}</p>
                                <span className="process-deliverable">{step.deliverable}</span>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="process-arrow">›</div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
