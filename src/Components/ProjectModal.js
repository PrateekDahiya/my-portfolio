import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div
                className="project-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {" "}
                {/* Prevent clicks inside from closing modal */}
                <button className="project-modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="row">
                    <div className="col-12">
                        <h2 className="project-modal-title">{project.title}</h2>

                        {project.date && (
                            <p className="project-modal-date">{project.date}</p>
                        )}
                        {project.technologies && (
                            <p className="project-modal-technologies">
                                {project.technologies}
                            </p>
                        )}
                        <div className="project-modal-links">
                            {project.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link me-3"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                        <img
                            src={`/assets/img/${project.image}`}
                            alt={project.title}
                            className="img-fluid project-modal-image"
                        />
                        <ul className="project-modal-description-list">
                            {project.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
