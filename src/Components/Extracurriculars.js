import React from 'react';
import './Extracurriculars.css';

const Extracurriculars = () => {
    const experienceDetails = [
        {
            "title": "Fine Arts and Modelling",
            "organization": "NIT Kurukshetra, Haryana",
            "role": "Secretary (Member since Nov. 2022)",
            "period": "Nov. 2022 – Present",
            "description": [
                "Serving as the Secretary of the Fine Arts and Modelling Club, leading planning and coordination efforts for events and activities.",
                "Originally joined as a Member in Nov. 2022 and contributed to organizing and executing the college's annual Cultural Fest.",
                "Played a key role in team management during the fest, ensuring effective collaboration among the team members."
            ]
        }
        
    ];

    let animationItemCounter = 3; // Start counter after title and row

    return (
        <section id="Extracurricular" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">Extracurricular Engagements</h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12">
                        {experienceDetails.map((exp, index) => {
                            const expAnimationItem = animationItemCounter++;
                            return (
                                <div key={index} className={`experience-item mb-4 animation-translate animation-item-${expAnimationItem}`}>
                                    <h3 className={`animation-translate animation-item-${animationItemCounter++}`}>{exp.title}</h3>
                                    <p className={`organization animation-translate animation-item-${animationItemCounter++}`}>{exp.organization}</p>
                                    <p className={`role animation-translate animation-item-${animationItemCounter++}`}>{exp.role}</p>
                                    <p className={`period animation-translate animation-item-${animationItemCounter++}`}>{exp.period}</p>
                                    <ul className="description-list">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className={`animation-translate animation-item-${animationItemCounter++}`}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={`section-footer animation-translate animation-item-${animationItemCounter++}`}>
                <a className="section-next goto-section" href="#Contact">
                    <span className="section-next-counter">07/07</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Extracurriculars;