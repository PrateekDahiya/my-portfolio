import React, { useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  useEffect(() => {
    // Add animate-in class to elements after a small delay
    const elements = document.querySelectorAll('.nav-animate');
    elements.forEach(element => {
      element.classList.add('animate-in');
    });
  }, []);

  return (
    <nav className="sections-nav-container">
      <ul id="sections-nav" className="nav sections-nav nav-animate">
        <li className="sections-nav-item">
          <a href="#Top" className="nav-link sections-nav-link  ">
            <span className="sections-nav-counter">01</span>
            Top
          </a>
        </li>
        <li className="sections-nav-item">
          <a href="#About-me" className="nav-link sections-nav-link  ">
            <span className="sections-nav-counter">02</span>
            About me
          </a>
        </li>
        <li className="sections-nav-item">
          <a href="#Education" className="nav-link sections-nav-link  ">
            <span className="sections-nav-counter">03</span>
            Education
          </a>
        </li>
        <li className="sections-nav-item">
          <a href="#Skills" className="nav-link sections-nav-link  ">
            <span className="sections-nav-counter">04</span>
            Skills
          </a>
        </li>

        <li className="sections-nav-item">
          <a href="#Projects" className="nav-link sections-nav-link  ">
            <span className="sections-nav-counter">05</span>
            Projects
          </a>
        </li>
        <li className="sections-nav-item">
          <a href="#Extracurricular" className="nav-link sections-nav-link  ">
            <span className="sections-nav-counter">06</span>
            Extracurricular Engagements
          </a>
        </li>
        {/* <li className="sections-nav-item">
          <a href="#Achievements" className="nav-link sections-nav-link  ">
            <span className="sections-nav-counter">07</span>
            Achievements
          </a>
        </li> */}
        <li className="sections-nav-item">
          <a href="#Contact" className="nav-link sections-nav-link  ">
            <span className="sections-nav-counter">07</span>
            Contact
          </a>
        </li>
        <li className="sections-nav-item">
          <div className="sections-nav-info">
            <a href="mailto:dahiyaprateek27@gmail.com">dahiyaprateek27@gmail.com</a><br />
            <a href="tel:+918307434738">+91 8307434738</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation; 