import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            category: "Languages",
            skills: [
                { name: "Java", percentage: 85, url: "https://www.java.com/" },
                { name: "Python", percentage: 90, url: "https://www.python.org/" },
                { name: "C/C++", percentage: 80, url: "https://isocpp.org/" },
                { name: "SQL (MySQL)", percentage: 75, url: "https://www.mysql.com/" },
                { name: "JavaScript", percentage: 90, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                { name: "HTML/CSS", percentage: 95, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                { name: "GML", percentage: 70, url: "https://manual.gamemaker.io/" }
            ]
        },
        {
            category: "Frontend",
            skills: [
                { name: "React JS", percentage: 85, url: "https://react.dev/" },
                { name: "EJS", percentage: 70, url: "https://ejs.co/" },
                { name: "CSS", percentage: 90, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { name: "HTML", percentage: 95, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node JS", percentage: 80, url: "https://nodejs.org/" },
                { name: "Express JS", percentage: 80, url: "https://expressjs.com/" },
                { name: "MongoDB", percentage: 70, url: "https://www.mongodb.com/" },
                { name: "MySQL", percentage: 75, url: "https://www.mysql.com/" }
            ]
        },
        {
            category: "Developer Tools",
            skills: [
                { name: "Git", percentage: 85, url: "https://git-scm.com/" },
                { name: "Google Cloud Platform", percentage: 70, url: "https://cloud.google.com/" },
                { name: "VS Code", percentage: 95, url: "https://code.visualstudio.com/" },
                { name: "PyCharm", percentage: 90, url: "https://www.jetbrains.com/pycharm/" },
                { name: "IntelliJ", percentage: 85, url: "https://www.jetbrains.com/idea/" }
            ]
        },
        {
            category: "Libraries",
            skills: [
                { name: "pandas", percentage: 80, url: "https://pandas.pydata.org/" },
                { name: "NumPy", percentage: 80, url: "https://numpy.org/" },
                { name: "Tensorflow", percentage: 75, url: "https://www.tensorflow.org/" }
            ]
        }
    ];

    let animationItemCounter = 3; // Start counter after title and row

    return (
        <section id="Skills" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">Skills</h2>
                <div className="row animation-translate animation-item-2">
                    {skillCategories.map((cat, index) => {
                        const categoryAnimationItem = animationItemCounter++;
                        return (
                            <div key={index} className={`col-12 col-md-6 skill-category-col animation-translate animation-item-${categoryAnimationItem}`}>
                                <h3 className={`skill-category-title animation-translate animation-item-${animationItemCounter++}`}>{cat.category}</h3>
                                <ul className="skill-list">
                                    {cat.skills.map((skill, skillIndex) => {
                                        const skillAnimationItem = animationItemCounter++;
                                        return (
                                            skill.url ? (
                                                <a href={skill.url} target="_blank" rel="noopener noreferrer" className="skill-link">
                                                    <li key={skillIndex} className={`animation-translate animation-item-${skillAnimationItem}`}>
                                                        <strong className="skill-name">{skill.name}</strong>
                                                        <div className="skill-progress-bar">
                                                            <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                                                        </div>
                                                    </li>
                                                </a>
                                            ) : (
                                                <li key={skillIndex} className={`animation-translate animation-item-${skillAnimationItem}`}>
                                                    <strong className="skill-name">{skill.name}</strong>
                                                    <div className="skill-progress-bar">
                                                        <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                                                    </div>
                                                </li>
                                            )
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div >
            <div className={`section-footer animation-translate animation-item-${animationItemCounter++}`}>
                <a className="section-next goto-section" href="#Projects">
                    <span className="section-next-counter">05/07</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section >
    );
};

export default Skills; 