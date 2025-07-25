import React from "react";
import "./Skills.css";

const Skills = () => {
    const skills = [
        // Frontend
        {
            name: "HTML/CSS",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            description: "Markup & styling",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "JavaScript",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            description: "Client-side logic",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "React JS",
            url: "https://react.dev/",
            description: "UI framework",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Next.js",
            url: "https://nextjs.org/",
            description: "React framework",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },

        // Backend
        {
            name: "Node JS",
            url: "https://nodejs.org/",
            description: "JavaScript runtime",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "Express JS",
            url: "https://expressjs.com/",
            description: "Web framework",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },

        // Database
        {
            name: "MongoDB",
            url: "https://www.mongodb.com/",
            description: "NoSQL database",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
            name: "MySQL",
            url: "https://www.mysql.com/",
            description: "Relational DB",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },

        // Tools
        {
            name: "Git",
            url: "https://git-scm.com/",
            description: "Version control",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
                    <ul className="skill-list">
                        {skills.map((skill, index) => {
                            const skillAnimationItem = animationItemCounter++;
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
                                        <img
                                            src={skill.logo}
                                            alt={skill.name}
                                            className="skill-logo"
                                        />
                                        <div className="skill-text">
                                            <strong className="skill-name">
                                                {skill.name}
                                            </strong>
                                            <div className="skill-description">
                                                {skill.description}
                                            </div>
                                        </div>
                                    </li>
                                </a>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div
                className={`section-footer animation-translate animation-item-${animationItemCounter++}`}
            >
                <a className="section-next goto-section" href="#Contact">
                    <span className="section-next-counter">06/06</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Skills;
