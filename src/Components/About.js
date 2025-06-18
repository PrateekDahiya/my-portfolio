import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="About-me" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">
                    About Me
                </h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12 col-xl-9">
                        <p className="about-text animation-translate animation-item-3">
                            Hi, I’m Prateek Dahiya — a Full-Stack Web Developer
                            with a strong foundation in computer science and a
                            focus on building scalable, user-friendly web
                            applications.
                        </p>
                        <p className="about-text animation-translate animation-item-4">
                            I create intuitive interfaces and robust back-end
                            systems, applying modern technologies and best
                            practices to solve real-world problems. This
                            portfolio showcases my skills, creativity, and
                            commitment to quality.
                        </p>
                        <p className="about-text animation-translate animation-item-5">
                            Take a look around—and if you're looking to
                            collaborate or build something great, let’s connect.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-6">
                <a className="section-next goto-section" href="#Education">
                    <span className="section-next-counter">03/07</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default About;
