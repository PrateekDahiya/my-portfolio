import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    useEffect(() => {
        // Add animate-in class to elements after a small delay
        const elements = document.querySelectorAll('.hero-animate');
        elements.forEach(element => {
            element.classList.add('animate-in');
        });
    }, []);

    return (
        <section id="Top" className="section section-sub-header">
            <div className="section-body">
                <div className="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
                    <img src="/assets/img/avatar.jpg" className="jumbotron-img hero-animate" alt="Avatar" />
                    <h1 className="display-1 hero-animate">
                        Prateek<br />Dahiya
                    </h1>
                    <p className="lead hero-animate">FULL STACK WEB DEVELOPER</p>
                    <a 
                        href="/assets/documents/Prateek_Dahiya_Resume.pdf" 
                        className="resume-download-btn hero-animate"
                        download="Prateek_Dahiya_Resume.pdf"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="section-footer hero-animate">
                <a className="section-next goto-section" href="#About-me">
                    <span className="section-next-counter">02/07</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Hero; 