import React from 'react';
import './Education.css';

const Education = () => {
    const educationDetails = [
        {
            degree: "Bachelor of Technology in Information Technology",
            institution: "National Institute of Technology Kurukshetra, Haryana",
            period: "Nov. 2022 – June 2026",
            details: "CGPA: 8.00"
        },
        {
            degree: "High School Diploma in PCM stream",
            institution: "Rao Pahlad Singh Sr Sec School Mahendergarh, Haryana",
            period: "April 2018 – April 2022",
            details: "Class 12th Percentage: 94% 2022\nClass 10th Percentage: 96.4% 2020"
        }
    ];

    return (
        <section id="Education" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">Education</h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12">
                        {educationDetails.map((edu, index) => (
                            <div key={index} className={`education-item mb-4 animation-translate animation-item-${3 + index}`}>
                                <h3 className={`animation-translate animation-item-${4 + index}`}>{edu.degree}</h3>
                                <p className={`institution animation-translate animation-item-${5 + index}`}>{edu.institution}</p>
                                <p className={`period animation-translate animation-item-${6 + index}`}>{edu.period}</p>
                                {edu.details && edu.details.split('\n').map((detail, i) => (
                                    <p key={i} className={`details animation-translate animation-item-${7 + index + i}`}>{detail}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`section-footer animation-translate animation-item-${7 + educationDetails.length * 2 }`}>
                <a className="section-next goto-section" href="#Projects">
                    <span className="section-next-counter">04/06</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Education; 