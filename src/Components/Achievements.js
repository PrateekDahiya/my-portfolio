import React from 'react';
import './Achievements.css';

const Achievements = () => {
    const achievementsDetails = [
        {
            title: "Problem Solving",
            description: "Solved 200+ questions on numerous platforms(LeetCode, Coding Studios, GFG etc)"
        }
    ];

    let animationItemCounter = 3; // Start counter after title and row

    return (
        <section id="Achievements" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">Achievements</h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12">
                        {achievementsDetails.map((achievement, index) => {
                            const achievementAnimationItem = animationItemCounter++;
                            return (
                                <div key={index} className={`achievement-item mb-4 animation-translate animation-item-${achievementAnimationItem}`}>
                                    <h3 className={`animation-translate animation-item-${animationItemCounter++}`}>{achievement.title}</h3>
                                    <p className={`description animation-translate animation-item-${animationItemCounter++}`}>{achievement.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={`section-footer animation-translate animation-item-${animationItemCounter++}`}>
                <a className="section-next goto-section" href="#Contact">
                    <span className="section-next-counter">07/08</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Achievements; 