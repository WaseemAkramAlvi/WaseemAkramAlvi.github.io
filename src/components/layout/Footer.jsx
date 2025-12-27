import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
    const { personalInfo } = portfolioData;

    return (
        <footer className="py-5">
            <div className="container text-center">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
                <p className="footer-tagline mt-2 text-muted">
                    Crafting digital excellence through code and design.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
