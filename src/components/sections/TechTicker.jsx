import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const TechTicker = () => {
    const { techStack } = portfolioData;

    return (
        <div className="tech-ticker-section">
            <div className="tech-track">
                {/* Double the list for seamless looping */}
                {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="tech-item">{tech}</div>
                ))}
            </div>
        </div>
    );
};

export default TechTicker;
