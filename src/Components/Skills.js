import React from "react";
import "./Skills.css";

const Skills = () => {
    const skills = [
        // Frontend
        {
            name: "HTML/CSS",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            description: "Markup & styling",
        },
        {
            name: "JavaScript",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            description: "Client-side logic",
        },
        {
            name: "React JS",
            url: "https://react.dev/",
            description: "UI framework",
        },

        // Backend
        {
            name: "Node JS",
            url: "https://nodejs.org/",
            description: "JavaScript runtime",
        },
        {
            name: "Express JS",
            url: "https://expressjs.com/",
            description: "Web framework",
        },

        // Database
        {
            name: "MongoDB",
            url: "https://www.mongodb.com/",
            description: "NoSQL database",
        },
        {
            name: "MySQL",
            url: "https://www.mysql.com/",
            description: "Relational DB",
        },

        // Tools
        {
            name: "Git",
            url: "https://git-scm.com/",
            description: "Version control",
        },
        {
            name: "VS Code",
            url: "https://code.visualstudio.com/",
            description: "Code editor",
        },
    ];

    let animationItemCounter = 3;

    return (
        <section id="Skills" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">
                    Skills
                </h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12 skill-category-col">
                        <ul className="skill-list">
                            {skills.map((skill, index) => {
                                const skillAnimationItem =
                                    animationItemCounter++;
                                return (
                                    <a
                                        key={index}
                                        href={skill.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="skill-link"
                                    >
                                        <li
                                            className={`animation-translate animation-item-${skillAnimationItem}`}
                                        >
                                            <strong className="skill-name">
                                                {skill.name}
                                            </strong>
                                            <div className="skill-description">
                                                {skill.description}
                                            </div>
                                        </li>
                                    </a>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={`section-footer animation-translate animation-item-${animationItemCounter++}`}
            >
                <a className="section-next goto-section" href="#Projects">
                    <span className="section-next-counter">05/07</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Skills;
