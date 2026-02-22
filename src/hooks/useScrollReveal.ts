import { useEffect } from 'react';

/**
 * Adds an IntersectionObserver that adds the `visible` class
 * to any element with the `reveal` class when it enters the viewport.
 */
export function useScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.12 }
        );

        const targets = document.querySelectorAll('.reveal');
        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}
