import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            year: "January 2026 - May 2026",
            title: "Leap Finance",
            role: "Software Engineering Intern",
            location: "Bengaluru, Karnataka",
            highlights: [
                "Led the migration of core backend services to Java 21 and Spring Boot 3, and optimized Docker deployments.",
                "Built a unified CRM microservice (leap-crm-v2) by consolidating legacy services, integrating AWS Secrets Manager and managing PostgreSQL schemas via Liquibase.",
                "Developed WhatsApp group management APIs and updated Amazon S3 presigned URL signature duration format from 900 seconds to 15 minutes.",
                "Established Bitbucket CI/CD pipelines and resolved 100+ SonarQube code smells and bugs, significantly improving overall system reliability."
            ]
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
                                    <p className={`experience-role animation-translate animation-item-${animationItemCounter++}`}>{exp.role}</p>
                                    <p className={`experience-location animation-translate animation-item-${animationItemCounter++}`}>{exp.location}</p>
                                    <ul className={`experience-highlights animation-translate animation-item-${animationItemCounter++}`}>
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className={`animation-translate animation-item-${animationItemCounter++}`}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={`section-footer animation-translate animation-item-${animationItemCounter++}`}>
                <a className="section-next goto-section" href="#Skills">
                    <span className="section-next-counter">05/08</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Experience;