import React from 'react';
import './Contact.css';

const Contact = () => {
    let animationItemCounter = 3;

    return (
        <section id="Contact" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">Contact</h2>
                <div className="row  animation-translate animation-item-2">
                    <div className={`col-12 contact-details-row col-md-4 animation-translate animation-item-${animationItemCounter++}`}>
                        <p className={`contact-heading animation-translate animation-item-${animationItemCounter++}`}>Stay in touch</p>
                        <p className={`animation-translate animation-item-${animationItemCounter++}`}>
                            <a href="mailto:dahiyaprateek27@gmail.com">dahiyaprateek27@gmail.com</a><br />
                            <a href="tel:+918307434738">+91 8307434738</a>
                        </p>
                    </div>
                    <div className={`col-12 contact-details-row col-md-4 animation-translate animation-item-${animationItemCounter++}`}>
                        <p className={`contact-heading animation-translate animation-item-${animationItemCounter++}`}>Social</p>
                        <p className={`animation-translate animation-item-${animationItemCounter++}`}>
                            <a href="https://www.linkedin.com/in/dahiyaprtk27" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
                            <a href="https://github.com/PrateekDahiya" target="_blank" rel="noopener noreferrer">GitHub</a><br />
                            <a href="https://www.instagram.com/dahiya_prtk27/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </p>
                    </div>
                    
                </div>

                <h2 className={`section-title animation-translate animation-item-${animationItemCounter++}`}>Leave a message</h2>
                <form className={`animation-translate animation-item-${animationItemCounter++}`}>
                    <div className="row">
                        <div className={`col-12 col-md-6 mb-3 animation-translate animation-item-${animationItemCounter++}`}>
                            <input type="text" className="form-control" placeholder="Your name" />
                        </div>
                        <div className={`col-12 col-md-6 mb-3 animation-translate animation-item-${animationItemCounter++}`}>
                            <input type="email" className="form-control" placeholder="Your email" />
                        </div>
                        <div className={`col-12 mb-3 animation-translate animation-item-${animationItemCounter++}`}>
                            <textarea className="form-control" rows="5" placeholder="Your message"></textarea>
                        </div>
                        <div className={`col-12 animation-translate animation-item-${animationItemCounter++}`}>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact; 