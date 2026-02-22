import './TrustBar.css';

const stack = [
    { icon: '▲', label: 'Next.js' },
    { icon: '◎', label: 'React' },
    { icon: '◈', label: 'TypeScript' },
    { icon: '✦', label: 'Tailwind CSS' },
    { icon: '◉', label: 'Shopify' },
    { icon: '◆', label: 'SEO Pro' },
    { icon: '⬡', label: 'Node.js' },
    { icon: '◐', label: 'Figma' },
    { icon: '▣', label: 'Vercel' },
    { icon: '◈', label: 'Framer Motion' },
];

export default function TrustBar() {
    return (
        <div className="trust-bar" id="services">
            <div className="trust-bar-inner">
                <div className="trust-bar-label">The Stack</div>
                <div className="trust-bar-track">
                    <div className="trust-bar-items">
                        {[...stack, ...stack].map((item, i) => (
                            <span key={i} className="trust-badge">
                                <span className="trust-badge-icon">{item.icon}</span>
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
