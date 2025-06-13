import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="About-me" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">About Me</h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12 col-xl-9">
                        <p className="about-text animation-translate animation-item-3">
                            Hello! I'm Prateek Dahiya, a passionate and dedicated Full-Stack Web Developer. With a solid foundation in computer science and hands-on experience in building robust web applications, I thrive on bringing innovative ideas to life through code. My journey in development has equipped me with a diverse skill set, allowing me to tackle challenges across both front-end and back-end landscapes.
                        </p>
                        <p className="about-text animation-translate animation-item-4">
                            I specialize in crafting engaging user interfaces and building scalable server-side solutions. I'm always eager to learn new technologies and apply best practices to deliver high-quality, efficient, and user-friendly products. Whether it's designing intuitive interfaces, optimizing database performance, or integrating complex APIs, I approach each task with enthusiasm and a commitment to excellence.
                        </p>
                        <p className="about-text animation-translate animation-item-5">
                            This portfolio is a reflection of my dedication, creativity, and technical abilities. Feel free to explore my projects and get in touch if you're looking for a driven developer to join your team or collaborate on an exciting new venture.
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