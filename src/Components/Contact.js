import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
    let animationItemCounter = 3;
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        subject: "Portfolio Contact Form",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    // Auto-dismiss status messages after 5 seconds
    useEffect(() => {
        if (submitStatus) {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Log form data for debugging
        console.log("Form data being sent:", formData);

        // EmailJS configuration
        // You'll need to replace these with your actual EmailJS credentials
        const serviceId = "service_17o88so";
        const templateId = "template_ph2enxb";
        const publicKey = "zqDodEPIXAY9UzD7N";

        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    setSubmitStatus("success");
                    setFormData({
                        user_name: "",
                        user_email: "",
                        subject: "Portfolio Contact Form",
                        message: "",
                    });
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    console.log("Error details:", error);
                    setSubmitStatus("error");
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="Contact" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate animation-item-1">
                    Contact
                </h2>
                <div className="row  animation-translate animation-item-2">
                    <div
                        className={`col-12 contact-details-row col-md-4 animation-translate animation-item-${animationItemCounter++}`}
                    >
                        <p
                            className={`contact-heading animation-translate animation-item-${animationItemCounter++}`}
                        >
                            Stay in touch
                        </p>
                        <p
                            className={`animation-translate animation-item-${animationItemCounter++}`}
                        >
                            <a href="mailto:dahiyaprateek27@gmail.com">
                                dahiyaprateek27@gmail.com
                            </a>
                            <br />
                            <a href="tel:+918307434738">+91 8307434738</a>
                        </p>
                    </div>
                    <div
                        className={`col-12 contact-details-row col-md-4 animation-translate animation-item-${animationItemCounter++}`}
                    >
                        <p
                            className={`contact-heading animation-translate animation-item-${animationItemCounter++}`}
                        >
                            Social
                        </p>
                        <p
                            className={`animation-translate animation-item-${animationItemCounter++}`}
                        >
                            <a
                                href="https://www.linkedin.com/in/dahiyaprtk27"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <br />
                            <a
                                href="https://github.com/PrateekDahiya"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <br />
                            <a
                                href="https://www.instagram.com/dahiya_prtk27/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </p>
                    </div>
                </div>

                <h2
                    className={`section-title animation-translate animation-item-${animationItemCounter++}`}
                >
                    Leave a message
                </h2>
                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className={`animation-translate animation-item-${animationItemCounter++}`}
                >
                    <div className="row">
                        <div
                            className={`col-12 col-md-6 mb-3 animation-translate animation-item-${animationItemCounter++}`}
                        >
                            <input
                                type="text"
                                name="user_name"
                                className="form-control"
                                placeholder="Your name"
                                value={formData.user_name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div
                            className={`col-12 col-md-6 mb-3 animation-translate animation-item-${animationItemCounter++}`}
                        >
                            <input
                                type="email"
                                name="user_email"
                                className="form-control"
                                placeholder="Your email"
                                value={formData.user_email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {/* Hidden subject field */}
                        <input
                            type="hidden"
                            name="subject"
                            value={formData.subject}
                        />
                        <div
                            className={`col-12 mb-3 animation-translate animation-item-${animationItemCounter++}`}
                        >
                            <textarea
                                name="message"
                                className="form-control"
                                rows="5"
                                placeholder="Your message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div
                            className={`col-12 animation-translate animation-item-${animationItemCounter++}`}
                        >
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === "success" && (
                            <div className="col-12 mt-3">
                                <div className="contact-alert contact-alert-success">
                                    <span>
                                        ✅ Thank you! Your message has been sent
                                        successfully.
                                    </span>
                                    <button
                                        className="alert-close"
                                        onClick={() => setSubmitStatus(null)}
                                        aria-label="Close"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="col-12 mt-3">
                                <div className="contact-alert contact-alert-error">
                                    <span>
                                        ❌ Sorry! There was an error sending
                                        your message. Please try again.
                                    </span>
                                    <button
                                        className="alert-close"
                                        onClick={() => setSubmitStatus(null)}
                                        aria-label="Close"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
