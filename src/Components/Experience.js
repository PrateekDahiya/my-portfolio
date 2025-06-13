import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            year: "2018 - now",
            title: "Freelance",
            description: "Full stack web developer"
        },
        {
            year: "2015 - 2018",
            title: "Facebook",
            description: "Senior front-end coder, team leader"
        }
    ];

    let animationItemCounter = 3; // Start counter after title and row

    return (
        <section id="Experience" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">Experiences</h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12">
                        {experiences.map((exp, index) => {
                            const experienceAnimationItem = animationItemCounter++;
                            return (
                                <div key={index} className={`experience-timeline-item animation-translate animation-item-${experienceAnimationItem}`}>
                                    <p className={`experience-year animation-translate animation-item-${animationItemCounter++}`}>{exp.year}</p>
                                    <h3 className={`animation-translate animation-item-${animationItemCounter++}`}>{exp.title}</h3>
                                    <p className={`experience-description animation-translate animation-item-${animationItemCounter++}`}>{exp.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={`section-footer animation-translate animation-item-${animationItemCounter++}`}>
                <a className="section-next goto-section" href="#Extracurricular">
                    <span className="section-next-counter">06/08</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Experience; 