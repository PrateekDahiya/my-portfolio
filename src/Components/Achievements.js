import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import './Achievements.css';

const DEFAULT_ACHIEVEMENTS = [
    {
        title: "Problem Solving",
        description: "Solved 200+ questions on coding platforms (LeetCode, GeeksforGeeks)"
    },
    {
        title: "Adobe India Hackathon",
        description: "Cleared 2 rounds in the national-level Adobe India Hackathon"
    },
    {
        title: "Flipkart GRiD 6.0",
        description: "Successfully cleared 2 rounds of the Flipkart GRiD 6.0 competition"
    }
];

const Achievements = () => {
    const { data } = usePortfolio();
    const achievementsDetails = data.achievements?.items?.length ? data.achievements.items : DEFAULT_ACHIEVEMENTS;

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