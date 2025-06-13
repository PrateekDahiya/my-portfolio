import React from 'react';
import './Facts.css';

const Facts = () => {
    const factItems = [
        { label: "COFFEES / PER DAY", value: "6" },
        { label: "LAUNCHED WEBSITES", value: "64" },
        { label: "LINES OF CODE", value: "12,000" },
        { label: "HAPPY CLIENTS", value: "160" },
    ];

    let animationItemCounter = 3; // Start counter after title and row

    return (
        <section id="Facts" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">Facts</h2>
                <div className="row animation-translate animation-item-2">
                    {factItems.map((item, index) => {
                        const factAnimationItem = animationItemCounter++;
                        return (
                            <div key={index} className={`col-6 col-md-3 fact-item animation-translate animation-item-${factAnimationItem}`}>
                                <strong className={`fact-value animation-translate animation-item-${animationItemCounter++}`}>{item.value}</strong>
                                <span className={`fact-label animation-translate animation-item-${animationItemCounter++}`}>{item.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={`section-footer animation-translate animation-item-${animationItemCounter++}`}>
                <a className="section-next goto-section" href="#Achievements">
                    <span className="section-next-counter">05/08</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Facts; 