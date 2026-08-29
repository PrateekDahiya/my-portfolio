-- 02_seed_data.sql
-- Seed data for all portfolio sections based on current component data.

INSERT INTO `portfolio_content` (`section`, `content`) VALUES
('hero', JSON_OBJECT(
    'name', 'Prateek Dahiya',
    'title', 'FULL STACK WEB DEVELOPER',
    'avatar', '/assets/img/avatar.jpg',
    'social', JSON_ARRAY(
        JSON_OBJECT('label','LinkedIn','url','https://www.linkedin.com/in/dahiyaprtk27','icon','linkedin'),
        JSON_OBJECT('label','Instagram','url','https://www.instagram.com/dahiya_prtk27/','icon','instagram'),
        JSON_OBJECT('label','GitHub','url','https://github.com/PrateekDahiya','icon','github')
    ),
    'resumeUrl', '/assets/documents/Prateek_Dahiya_Resume.pdf'
)),
('profile', JSON_OBJECT(
    'name', 'Prateek Dahiya',
    'title', 'FULL STACK WEB DEVELOPER',
    'intro', 'Hi, I’m Prateek Dahiya — a Full-Stack Web Developer with a strong foundation in computer science and a focus on building scalable, user-friendly web applications.',
    'email', 'dahiyaprateek27@gmail.com',
    'phone', '+91 8307434738',
    'location', 'India',
    'avatar', '/assets/img/avatar.jpg',
    'resumeUrl', '/assets/documents/Prateek_Dahiya_Resume.pdf',
    'social', JSON_ARRAY(
        JSON_OBJECT('label','LinkedIn','url','https://www.linkedin.com/in/dahiyaprtk27','icon','linkedin'),
        JSON_OBJECT('label','Instagram','url','https://www.instagram.com/dahiya_prtk27/','icon','instagram'),
        JSON_OBJECT('label','GitHub','url','https://github.com/PrateekDahiya','icon','github')
    )
)),
('about', JSON_OBJECT(
    'heading', 'About Me',
    'paragraphs', JSON_ARRAY(
        'Hi, I’m Prateek Dahiya — a Full-Stack Web Developer with a strong foundation in computer science and a focus on building scalable, user-friendly web applications.',
        'I create intuitive interfaces and robust back-end systems, applying modern technologies and best practices to solve real-world problems. This portfolio showcases my skills, creativity, and commitment to quality.',
        'Take a look around—and if you\'re looking to collaborate or build something great, let’s connect.'
    ),
    'highlights', JSON_ARRAY(
        'Backend Development',
        'Frontend Development',
        'Database Design',
        'Cloud & DevOps'
    )
)),
('education', JSON_OBJECT(
    'items', JSON_ARRAY(
        JSON_OBJECT(
            'degree', 'Bachelor of Technology in Information Technology',
            'institution', 'National Institute of Technology Kurukshetra, Haryana',
            'period', 'Nov. 2022 – June 2026',
            'details', JSON_ARRAY('CGPA: 8.00'),
            'logo', ''
        ),
        JSON_OBJECT(
            'degree', 'High School Diploma in PCM stream',
            'institution', 'Rao Pahlad Singh Sr Sec School Mahendergarh, Haryana',
            'period', 'April 2018 – April 2022',
            'details', JSON_ARRAY('Class 12th Percentage: 94% 2022', 'Class 10th Percentage: 96.4% 2020'),
            'logo', ''
        )
    )
)),
('experience', JSON_OBJECT(
    'items', JSON_ARRAY(
        JSON_OBJECT(
            'title', 'Leap Finance',
            'company', 'Leap Finance',
            'type', 'Internship',
            'location', 'Bengaluru, Karnataka',
            'period', 'January 2026 - May 2026',
            'role', 'Software Engineering Intern',
            'description', 'Led the migration of core backend services to Java 21 and Spring Boot 3, and optimized Docker deployments.',
            'responsibilities', JSON_ARRAY(
                'Built a unified CRM microservice (leap-crm-v2) by consolidating legacy services, integrating AWS Secrets Manager and managing PostgreSQL schemas via Liquibase.',
                'Developed WhatsApp group management APIs and updated Amazon S3 presigned URL signature duration format from 900 seconds to 15 minutes.',
                'Established Bitbucket CI/CD pipelines and resolved 100+ SonarQube code smells and bugs, significantly improving overall system reliability.'
            ),
            'technologies', JSON_ARRAY('Java 21', 'Spring Boot 3', 'Docker', 'PostgreSQL', 'Liquibase', 'AWS Secrets Manager', 'Bitbucket'),
            'logo', ''
        )
    )
)),
('projects', JSON_OBJECT(
    'items', JSON_ARRAY(
        JSON_OBJECT(
            'title', 'EduTracker',
            'subtitle', 'Student productivity and attendance tracker',
            'shortDescription', 'Modern, fully responsive student productivity and attendance tracker.',
            'fullDescription', 'Track classes, mark attendance, and view weekly or daily schedules. Organize tasks by course, set priorities, and mark completion. Dashboard with stats, upcoming classes/tasks, and activity timeline. Secure authentication (credentials & Google). Built with Next.js App Router, Tailwind CSS, and best practices for performance and accessibility. Fully responsive: works on all devices, mobile-first design. Theme support: switch between light/dark, all UI uses CSS variables for theming.',
            'technologies', JSON_ARRAY('Next.js', 'Tailwind CSS', 'App Router', 'Vercel', 'Google Auth'),
            'links', JSON_ARRAY(
                JSON_OBJECT('text', 'Live', 'url', 'https://edutracker-pi.vercel.app/'),
                JSON_OBJECT('text', 'GitHub', 'url', 'https://github.com/PrateekDahiya/edutracker')
            ),
            'images', JSON_ARRAY('/assets/img/edutracker-screenshot.png'),
            'thumbnail', '/assets/img/edutracker-screenshot.png',
            'featured', true,
            'displayOrder', 1,
            'date', '2024'
        ),
        JSON_OBJECT(
            'title', 'VidVault',
            'subtitle', 'YouTube clone with custom video player',
            'shortDescription', 'Developed a full-stack web application with Flask serving a REST API with React as the frontend.',
            'fullDescription', 'YouTube clone with a custom video player, trending pages, and personalized feed algorithms. Implemented like/dislike, subscribe, watchlater, and history functionalities.',
            'technologies', JSON_ARRAY('Express.js', 'React', 'MySQL', 'YouTube APIs'),
            'links', JSON_ARRAY(
                JSON_OBJECT('text', 'Live', 'url', 'https://canvas-fulcrum-386304.web.app/'),
                JSON_OBJECT('text', 'GitHub: Frontend', 'url', 'https://github.com/PrateekDahiya/YouTube-Clone'),
                JSON_OBJECT('text', 'GitHub: Node Server', 'url', 'https://github.com/PrateekDahiya/Youtube-clone-server'),
                JSON_OBJECT('text', 'GitHub: Flask Server', 'url', 'https://github.com/PrateekDahiya/Flaskapp')
            ),
            'images', JSON_ARRAY('/assets/img/vidvault-screenshot.jpg'),
            'thumbnail', '/assets/img/vidvault-screenshot.jpg',
            'featured', true,
            'displayOrder', 2,
            'date', 'June 2024 – July 2024'
        ),
        JSON_OBJECT(
            'title', 'LingoVerse',
            'subtitle', 'Language learning platform',
            'shortDescription', 'Developed a language learning platform with categories organized by difficulty level.',
            'fullDescription', 'Developed a language learning platform with categories organized by difficulty level. Added 20+ languages to the platform, enhancing its diversity and user accessibility.',
            'technologies', JSON_ARRAY('HTML', 'CSS', 'JavaScript'),
            'links', JSON_ARRAY(
                JSON_OBJECT('text', 'Live', 'url', 'https://lingoverse-37674.web.app/'),
                JSON_OBJECT('text', 'GitHub', 'url', 'https://github.com/PrateekDahiya/LanguageLearning')
            ),
            'images', JSON_ARRAY('/assets/img/lingoverse-screenshot.png'),
            'thumbnail', '/assets/img/lingoverse-screenshot.png',
            'featured', false,
            'displayOrder', 3,
            'date', 'June 2023 – July 2023'
        ),
        JSON_OBJECT(
            'title', 'Portfolio Website',
            'subtitle', 'Personal portfolio website',
            'shortDescription', 'Designed and developed a personal portfolio website to showcase projects, skills, and achievements.',
            'fullDescription', 'Designed and developed a personal portfolio website to showcase projects, skills, and achievements. Built with a responsive layout ensuring smooth performance across devices and browsers. Integrated Firebase for hosting and seamless deployment pipeline. Focused on clean UI/UX to reflect personal brand and enhance user navigation.',
            'technologies', JSON_ARRAY('React', 'CSS', 'JavaScript', 'Firebase'),
            'links', JSON_ARRAY(
                JSON_OBJECT('text', 'Live', 'url', 'https://dahiya-prtk.web.app/'),
                JSON_OBJECT('text', 'GitHub Repository', 'url', 'https://github.com/PrateekDahiya/my-portfolio')
            ),
            'images', JSON_ARRAY('/assets/img/portfolio-screenshot.png'),
            'thumbnail', '/assets/img/portfolio-screenshot.png',
            'featured', true,
            'displayOrder', 4,
            'date', 'June 2025'
        ),
        JSON_OBJECT(
            'title', 'Realtime AI Chat App',
            'subtitle', 'Real-time AI chatbot with voice',
            'shortDescription', 'Built a real-time AI chatbot using Flask and WebSockets with dynamic conversation context handling.',
            'fullDescription', 'Built a real-time AI chatbot using Flask and WebSockets with dynamic conversation context handling. Integrated Groq API (LLaMA 3) to simulate a custom AI persona with memory and duplicate question filtering. Enabled voice input and text-to-speech responses using SpeechRecognition and pyttsx3. Deployed on Render with persistent JSON-based chat history and a clean, responsive UI.',
            'technologies', JSON_ARRAY('Flask', 'Socket.IO', 'JavaScript', 'Groq API', 'HTML/CSS'),
            'links', JSON_ARRAY(
                JSON_OBJECT('text', 'Live', 'url', 'https://realtimeaichat-1wxn.onrender.com'),
                JSON_OBJECT('text', 'GitHub Repository', 'url', 'https://github.com/PrateekDahiya/RealTimeAIchat')
            ),
            'images', JSON_ARRAY('/assets/img/realtime-chat-screenshot.png'),
            'thumbnail', '/assets/img/realtime-chat-screenshot.png',
            'featured', true,
            'displayOrder', 5,
            'date', 'June 2025'
        ),
        JSON_OBJECT(
            'title', 'Lung and Colon Cancer Classification Web App',
            'subtitle', 'CNN-based histopathology classification',
            'shortDescription', 'Built a full-stack web app to classify histopathological images into lung_aca, lung_scc, and lung_n using a CNN model.',
            'fullDescription', 'Built a full-stack web app to classify histopathological images into lung_aca, lung_scc, and lung_n using a CNN model. Trained the model on real-world cancer image data using TensorFlow and served it with a Flask API. Created a responsive React frontend to upload images and visualize classification results. Implemented model training with data preprocessing, CNN architecture, and evaluation via accuracy and confusion matrix.',
            'technologies', JSON_ARRAY('Flask', 'React', 'CNN', 'TensorFlow', 'Python', 'JavaScript'),
            'links', JSON_ARRAY(
                JSON_OBJECT('text', 'Model Dataset', 'url', 'https://www.kaggle.com/datasets/andrewmvd/lung-and-colon-cancer-histopathological-images'),
                JSON_OBJECT('text', 'Model (.h5) Download', 'url', 'https://drive.google.com/file/d/1nfdXUg0Czbm-JBRPM9AQzRPFQEztvgxR/view?usp=sharing'),
                JSON_OBJECT('text', 'GitHub: Frontend', 'url', 'https://github.com/PrateekDahiya/Lung-Cancer-Detection-Frontend'),
                JSON_OBJECT('text', 'GitHub: Backend', 'url', 'https://github.com/PrateekDahiya/Lung-Cancer-Detection-Backend'),
                JSON_OBJECT('text', 'Training Notebook', 'url', 'https://github.com/PrateekDahiya/Lung-Cancer-Detection-Backend/blob/main/training.ipynb')
            ),
            'images', JSON_ARRAY('/assets/img/lung-cancer-classification.png'),
            'thumbnail', '/assets/img/lung-cancer-classification.png',
            'featured', true,
            'displayOrder', 6,
            'date', 'June 2025'
        ),
        JSON_OBJECT(
            'title', 'Pac-Man',
            'subtitle', 'GameMaker clone',
            'shortDescription', 'Developed Pac-Man mechanics and logic using the GameMaker programming language.',
            'fullDescription', 'Developed Pac-Man mechanics and logic using the GameMaker programming language. Added various features for every character based on how they behaved in the original Pac-Man game.',
            'technologies', JSON_ARRAY('GameMaker'),
            'links', JSON_ARRAY(
                JSON_OBJECT('text', 'Live', 'url', 'https://dahiya-prtk27.itch.io/pacman-clone')
            ),
            'images', JSON_ARRAY('/assets/img/pacman-screenshot.png'),
            'thumbnail', '/assets/img/pacman-screenshot.png',
            'featured', false,
            'displayOrder', 7,
            'date', 'June 2022 – July 2022'
        ),
        JSON_OBJECT(
            'title', 'Automatic Garage Controller',
            'subtitle', 'Arduino-based garage opener',
            'shortDescription', 'Led a team of five members in the development of the device under the guidance of Prof. Shweta Sharma.',
            'fullDescription', 'Led a team of five members in the development of the device under the guidance of Prof. Shweta Sharma. Implemented advanced features using Arduino Uno R3 board, IR sensors, 16x2 LCD display to display output and IR remote to control manually as well.',
            'technologies', JSON_ARRAY('Arduino', 'IR Sensors', 'LCD'),
            'links', JSON_ARRAY(
                JSON_OBJECT('text', 'Tinkercad', 'url', 'https://www.tinkercad.com/things/7rnUvI87Rk0-automatic-garage-opener')
            ),
            'images', JSON_ARRAY('/assets/img/autogarage-screenshot.png'),
            'thumbnail', '/assets/img/autogarage-screenshot.png',
            'featured', false,
            'displayOrder', 8,
            'date', ''
        )
    )
)),
('skills', JSON_OBJECT(
    'items', JSON_ARRAY(
        -- Languages
        JSON_OBJECT('name','Java','url','https://www.java.com/','description','Backend development','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg','category','Languages'),
        JSON_OBJECT('name','Kotlin','url','https://kotlinlang.org/','description','JVM language','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg','category','Languages'),
        JSON_OBJECT('name','Python','url','https://www.python.org/','description','Scripting & ML','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg','category','Languages'),
        JSON_OBJECT('name','JavaScript','url','https://developer.mozilla.org/en-US/docs/Web/JavaScript','description','Client-side logic','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg','category','Languages'),
        JSON_OBJECT('name','C/C++','url','https://cplusplus.com/','description','Systems programming','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg','category','Languages'),
        -- Frontend
        JSON_OBJECT('name','React JS','url','https://react.dev/','description','UI framework','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','category','Frontend'),
        JSON_OBJECT('name','Next.js','url','https://nextjs.org/','description','React framework','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg','category','Frontend'),
        JSON_OBJECT('name','Tailwind CSS','url','https://tailwindcss.com/','description','Styling framework','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg','category','Frontend'),
        JSON_OBJECT('name','HTML/CSS','url','https://developer.mozilla.org/en-US/docs/Web/HTML','description','Markup & styling','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg','category','Frontend'),
        -- Backend
        JSON_OBJECT('name','Spring Boot','url','https://spring.io/projects/spring-boot','description','Java framework','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg','category','Backend'),
        JSON_OBJECT('name','Node JS','url','https://nodejs.org/','description','JavaScript runtime','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg','category','Backend'),
        JSON_OBJECT('name','Express JS','url','https://expressjs.com/','description','Web framework','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg','category','Backend'),
        JSON_OBJECT('name','Flask','url','https://flask.palletsprojects.com/','description','Python framework','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg','category','Backend'),
        -- Databases
        JSON_OBJECT('name','PostgreSQL','url','https://www.postgresql.org/','description','SQL database','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg','category','Databases'),
        JSON_OBJECT('name','MongoDB','url','https://www.mongodb.com/','description','NoSQL database','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg','category','Databases'),
        JSON_OBJECT('name','MySQL','url','https://www.mysql.com/','description','Relational DB','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg','category','Databases'),
        JSON_OBJECT('name','Redis','url','https://redis.io/','description','Cache & DB','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg','category','Databases'),
        -- Cloud & DevOps
        JSON_OBJECT('name','AWS','url','https://aws.amazon.com/','description','Cloud services','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg','category','Cloud & DevOps'),
        JSON_OBJECT('name','Docker','url','https://www.docker.com/','description','Containerization','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg','category','Cloud & DevOps'),
        JSON_OBJECT('name','Google Cloud','url','https://cloud.google.com/','description','Cloud platform','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg','category','Cloud & DevOps'),
        -- Tools & Others
        JSON_OBJECT('name','Git','url','https://git-scm.com/','description','Version control','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg','category','Tools & Others'),
        JSON_OBJECT('name','GitHub','url','https://github.com/','description','Repository hosting','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg','category','Tools & Others'),
        JSON_OBJECT('name','Maven','url','https://maven.apache.org/','description','Build automation','logo','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg','category','Tools & Others')
    )
)),
('achievements', JSON_OBJECT(
    'items', JSON_ARRAY(
        JSON_OBJECT('title','Problem Solving','description','Solved 200+ questions on coding platforms (LeetCode, GeeksforGeeks)','date','','issuer','','certificateUrl','','image',''),
        JSON_OBJECT('title','Adobe India Hackathon','description','Cleared 2 rounds in the national-level Adobe India Hackathon','date','','issuer','Adobe','certificateUrl','','image',''),
        JSON_OBJECT('title','Flipkart GRiD 6.0','description','Successfully cleared 2 rounds of the Flipkart GRiD 6.0 competition','date','','issuer','Flipkart','certificateUrl','','image','')
    )
)),
('contact', JSON_OBJECT(
    'email', 'dahiyaprateek27@gmail.com',
    'phone', '+91 8307434738',
    'social', JSON_ARRAY(
        JSON_OBJECT('label','LinkedIn','url','https://www.linkedin.com/in/dahiyaprtk27'),
        JSON_OBJECT('label','GitHub','url','https://github.com/PrateekDahiya'),
        JSON_OBJECT('label','Instagram','url','https://www.instagram.com/dahiya_prtk27/')
    ),
    'emailjs', JSON_OBJECT(
        'serviceId', 'service_17o88so',
        'templateId', 'template_ph2enxb',
        'publicKey', 'zqDodEPIXAY9UzD7N'
    )
)),
('settings', JSON_OBJECT(
    'siteTitle', 'Prateek Dahiya | Full Stack Developer',
    'siteDescription', 'Portfolio of Prateek Dahiya, Full Stack Web Developer',
    'seoImage', '/assets/img/portfolio-screenshot.png',
    'resumeUrl', '/assets/documents/Prateek_Dahiya_Resume.pdf'
))
ON DUPLICATE KEY UPDATE `content` = VALUES(`content`);