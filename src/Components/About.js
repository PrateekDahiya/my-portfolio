import React from "react";
import { usePortfolio } from "../context/PortfolioContext";
import "./About.css";

const DEFAULT_PARAGRAPHS = [
    "Hi, I’m Prateek Dahiya — a Full-Stack Web Developer with a strong foundation in computer science and a focus on building scalable, user-friendly web applications.",
    "I create intuitive interfaces and robust back-end systems, applying modern technologies and best practices to solve real-world problems. This portfolio showcases my skills, creativity, and commitment to quality.",
    "Take a look around—and if you're looking to collaborate or build something great, let’s connect.",
];

const About = () => {
    const { data } = usePortfolio();
    const about = data.about || {};
    const heading = about.heading || "About Me";
    const paragraphs = about.paragraphs?.length ? about.paragraphs : DEFAULT_PARAGRAPHS;

    return (
        <section id="About-me" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">
                    {heading}
                </h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12 col-xl-9">
                        {paragraphs.map((p, i) => (
                            <p key={i} className={`about-text animation-translate animation-item-${3 + i}`}>
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`section-footer animation-translate animation-item-${3 + paragraphs.length}`}>
                <a className="section-next goto-section" href="#Education">
                    <span className="section-next-counter">03/08</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default About;
