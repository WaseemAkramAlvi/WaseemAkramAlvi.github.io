import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                const scrolled = (scrollTop / docHeight) * 100;
                setScrollPercent(scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="quantum-scroll-progress-bar" aria-hidden="true">
            <div 
                className="quantum-scroll-progress-indicator" 
                style={{ width: `${scrollPercent}%` }}
            >
                <div className="quantum-scroll-sparkle"></div>
            </div>
        </div>
    );
};

export default ScrollProgress;
