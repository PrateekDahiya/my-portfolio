import React, { useState, useEffect } from "react";
import "./Projectsnew.css";
import ProjectModal from "./ProjectModal";

const Projectsnew = () => {
    const projectDetails = [
        {
            title: "EduTracker",
            technologies: "Next.js, Tailwind CSS, App Router, Vercel, Google Auth",
            date: "2024",
            image: "edutracker-screenshot.png",
            description: [
                "Modern, fully responsive student productivity and attendance tracker.",
                "Track classes, mark attendance, and view weekly or daily schedules.",
                "Organize tasks by course, set priorities, and mark completion.",
                "Dashboard with stats, upcoming classes/tasks, and activity timeline.",
                "Secure authentication (credentials & Google).",
                "Built with Next.js App Router, Tailwind CSS, and best practices for performance and accessibility.",
                "Fully responsive: works on all devices, mobile-first design.",
                "Theme support: switch between light/dark, all UI uses CSS variables for theming."
            ],
            links: [
                {
                    text: "Live",
                    url: "https://edutracker-pi.vercel.app/"
                },
                {
                    text: "GitHub",
                    url: "https://github.com/PrateekDahiya/edutracker"
                }
            ]
        },
        {
            title: "VidVault",
            technologies: "Express.js, React, MySQL, YouTube APIs",
            date: "June 2024 – July 2024",
            image: "vidvault-screenshot.jpg",
            description: [
                "Developed a full-stack web application with Flask serving a REST API with React as the frontend.",
                "YouTube clone with a custom video player, trending pages, and personalized feed algorithms.",
                "Implemented like/dislike, subscribe, watchlater, and history functionalities.",
            ],
            links: [
                {
                    text: "Live",
                    url: "https://canvas-fulcrum-386304.web.app/",
                },
                {
                    text: "GitHub: Frontend",
                    url: "https://github.com/PrateekDahiya/YouTube-Clone",
                },
                {
                    text: "GitHub: Node Server",
                    url: "https://github.com/PrateekDahiya/Youtube-clone-server",
                },
                {
                    text: "GitHub: Flask Server",
                    url: "https://github.com/PrateekDahiya/Flaskapp",
                },
            ],
        },
        {
            title: "LingoVerse",
            technologies: "HTML, CSS, JavaScript",
            date: "June 2023 – July 2023",
            image: "lingoverse-screenshot.png",
            description: [
                "Developed a language learning platform with categories organized by difficulty level.",
                "Added 20+ languages to the platform, enhancing its diversity and user accessibility.",
            ],
            links: [
                {
                    text: "Live",
                    url: "https://lingoverse-37674.web.app/",
                },
                {
                    text: "GitHub: LingoVerse GitHub",
                    url: "https://github.com/PrateekDahiya/LanguageLearning",
                },
            ],
        },
        {
            title: "Portfolio Website",
            technologies: "React, CSS , JavaScript, Firebase",
            date: "June 2025",
            image: "portfolio-screenshot.png",
            description: [
                "Designed and developed a personal portfolio website to showcase projects, skills, and achievements.",
                "Built with a responsive layout ensuring smooth performance across devices and browsers.",
                "Integrated Firebase for hosting and seamless deployment pipeline.",
                "Focused on clean UI/UX to reflect personal brand and enhance user navigation.",
            ],
            links: [
                {
                    text: "Live",
                    url: "https://dahiya-prtk.web.app/",
                },
                {
                    text: "GitHub Repository",
                    url: "https://github.com/PrateekDahiya/my-portfolio",
                },
            ],
        },
        {
            title: "Realtime AI Chat App",
            technologies: "Flask, Socket.IO, JavaScript, Groq API, HTML/CSS",
            date: "June 2025",
            image: "realtime-chat-screenshot.png",
            description: [
                "Built a real-time AI chatbot using Flask and WebSockets with dynamic conversation context handling.",
                "Integrated Groq API (LLaMA 3) to simulate a custom AI persona with memory and duplicate question filtering.",
                "Enabled voice input and text-to-speech responses using SpeechRecognition and pyttsx3.",
                "Deployed on Render with persistent JSON-based chat history and a clean, responsive UI.",
            ],
            links: [
                {
                    text: "Live",
                    url: "https://realtimeaichat-1wxn.onrender.com",
                },
                {
                    text: "GitHub Repository",
                    url: "https://github.com/PrateekDahiya/RealTimeAIchat",
                },
            ],
        },
        {
            title: "Lung and Colon Cancer Classification Web App",
            technologies: "Flask, React, CNN, TensorFlow, Python, JavaScript",
            date: "June 2025",
            image: "lung-cancer-classification.png", // Ensure this image exists in your assets
            description: [
                "Built a full-stack web app to classify histopathological images into lung_aca, lung_scc, and lung_n using a CNN model.",
                "Trained the model on real-world cancer image data using TensorFlow and served it with a Flask API.",
                "Created a responsive React frontend to upload images and visualize classification results.",
                "Implemented model training with data preprocessing, CNN architecture, and evaluation via accuracy and confusion matrix.",
            ],
            links: [
                {
                    text: "Model Dataset",
                    url: "https://www.kaggle.com/datasets/andrewmvd/lung-and-colon-cancer-histopathological-images",
                },
                {
                    text: "Model (.h5) Download",
                    url: "https://drive.google.com/file/d/1nfdXUg0Czbm-JBRPM9AQzRPFQEztvgxR/view?usp=sharing",
                },
                {
                    text: "GitHub: Frontend",
                    url: "https://github.com/PrateekDahiya/Lung-Cancer-Detection-Frontend",
                },
                {
                    text: "GitHub: Backend",
                    url: "https://github.com/PrateekDahiya/Lung-Cancer-Detection-Backend",
                },
                {
                    text: "Training Notebook (training.ipynb)",
                    url: "https://github.com/PrateekDahiya/Lung-Cancer-Detection-Backend/blob/main/training.ipynb",
                },
            ],
        },
        {
            title: "Pac-Man",
            technologies: "GameMaker",
            date: "June 2022 – July 2022",
            image: "pacman-screenshot.png", // Assuming a placeholder image for Pac-Man
            description: [
                "Developed Pac-Man mechanics and logic using the GameMaker programming language.",
                "Added various features for every character based on how they behaved in the original Pac-Man game.",
            ],
            links: [
                {
                    text: "Live",
                    url: "https://dahiya-prtk27.itch.io/pacman-clone",
                },
            ],
        },
        {
            title: "Automatic Garage Controller",
            technologies: "", // No specific technologies listed in resume for this project
            image: "autogarage-screenshot.png",
            description: [
                "Led a team of five members in the development of the device under the guidance of Prof. Shweta Sharma.",
                "Implemented advanced features using Arduino Uno R3 board, IR sensors, 16x2 LCD display to display output and IR remote to control manually as well.",
            ],
            links: [
                {
                    text: "Tinkercad",
                    url: "https://www.tinkercad.com/things/7rnUvI87Rk0-automatic-garage-opener",
                },
            ],
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    // Effect to prevent body scrolling when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
            console.log("Modal opened, setting body overflow to hidden");
        } else {
            document.body.style.overflow = "unset";
            console.log(
                "Modal closed (effect), setting body overflow to unset"
            );
        }
        // Cleanup function to ensure scroll is re-enabled if component unmounts
        return () => {
            document.body.style.overflow = "unset";
            console.log("Cleanup: body overflow to unset");
        };
    }, [showModal]);

    return (
        <section id="Projects" className="projects-section section animation">
            <h2 className="section-title animation-translate animation-item-1">
                Projects
            </h2>
            <div className=" projects-grid animation-translate animation-item-2">
                {projectDetails.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => openModal(project)}
                        tabIndex={0}
                        role="button"
                        aria-label={`Open details for ${project.title}`}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') openModal(project); }}
                    >
                        <div className="project-image-container">
                            <img
                                src={`/assets/img/${project.image}`}
                                alt={project.title}
                                className="project-image"
                            />
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-badges">
                                {project.technologies &&
                                    project.technologies
                                        .split(",")
                                        .map((tech, i) => (
                                            <span
                                                key={i}
                                                className="project-badge"
                                            >
                                                {tech.trim()}
                                            </span>
                                        ))}
                            </div>
                            <button
                                className="project-fab"
                                onClick={e => {
                                    e.stopPropagation();
                                    window.open(project.links[0].url, "_blank");
                                }}
                                title="Open project"
                                tabIndex={0}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="section-footer animation-translate animation-item-3">
                <a className="section-next goto-section" href="#Skills">
                    <span className="section-next-counter">05/06</span>
                    <span className="section-next-label">Next chapter</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>

            {showModal && selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </section>
    );
};

export default Projectsnew;
