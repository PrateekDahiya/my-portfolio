import React from "react";
import { usePortfolio } from "../context/PortfolioContext";
import "./Skills.css";

const DEFAULT_SKILLS = [
        // Languages
        {
            name: "Java",
            url: "https://www.java.com/",
            description: "Backend development",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
            name: "Kotlin",
            url: "https://kotlinlang.org/",
            description: "JVM language",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
        {
            name: "Python",
            url: "https://www.python.org/",
            description: "Scripting & ML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "JavaScript",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            description: "Client-side logic",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "C/C++",
            url: "https://cplusplus.com/",
            description: "Systems programming",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },

        // Frontend
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
        {
            name: "Tailwind CSS",
            url: "https://tailwindcss.com/",
            description: "Styling framework",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "HTML/CSS",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            description: "Markup & styling",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },

        // Backend
        {
            name: "Spring Boot",
            url: "https://spring.io/projects/spring-boot",
            description: "Java framework",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
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
        {
            name: "Flask",
            url: "https://flask.palletsprojects.com/",
            description: "Python framework",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        },

        // Databases
        {
            name: "PostgreSQL",
            url: "https://www.postgresql.org/",
            description: "SQL database",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
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
        {
            name: "Redis",
            url: "https://redis.io/",
            description: "Cache & DB",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },

        // Cloud & DevOps
        {
            name: "AWS",
            url: "https://aws.amazon.com/",
            description: "Cloud services",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        },
        {
            name: "Docker",
            url: "https://www.docker.com/",
            description: "Containerization",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
            name: "Google Cloud",
            url: "https://cloud.google.com/",
            description: "Cloud platform",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        },

        // Tools & Others
        {
            name: "Git",
            url: "https://git-scm.com/",
            description: "Version control",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "GitHub",
            url: "https://github.com/",
            description: "Repository hosting",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
            name: "Maven",
            url: "https://maven.apache.org/",
            description: "Build automation",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
        },
];

const Skills = () => {
    const { data } = usePortfolio();
    const skills = data.skills?.items?.length ? data.skills.items : DEFAULT_SKILLS;

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
                <a className="section-next goto-section" href="#Achievements">
                    <span className="section-next-counter">07/08</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Skills;
