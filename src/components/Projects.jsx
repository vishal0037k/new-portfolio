// import React from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./Projects.css";



//   return (
//     <section id="projects" className="projects-section">
//       <div className="projects-container">
//         <motion.h2
//           className="projects-heading"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           My Projects
//         </motion.h2>

         
// <br />
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={3}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="projects-swiper"
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 className="project-card"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="project-content">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>

//                   <div className="tech-stack">
//                     {project.tech.map((t, i) => (
//                       <span key={i}>{t}</span>
//                     ))}
//                   </div>

//                   <div className="project-links">
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn-live"
//                     >
//                       <ExternalLink size={16} /> Live Demo
//                     </a>
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn-github"
//                     >
//                       <Github size={16} /> GitHub
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="swiper-navigation">
//           <button className="swiper-button-prev">
//             <ChevronLeft size={22} />
//           </button>
//           <button className="swiper-button-next">
//             <ChevronRight size={22} />
//           </button>
//         </div>
// {/* View More Button */}
//         <motion.div
//           className="view-more-container"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <a
//             href="https://github.com/vishal0037k?tab=repositories"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="view-more-btn"
//           >
//             <Github size={18} /> View More Projects on GitHub
//           </a>
//         </motion.div>
       
//       </div>
//     </section>
//   );
// };

// export default Projects;




import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Travel Agency Website",
      description:
        "This website is a travel agency website, in this website i use MERN stack and CURD posts which helps you to easily create, edit, delete, store in mongodb and view data.",
      tech: ["React.js", "CSS3", "Node.js", "Express.js", "MongoDb", "MVC"],
      live: "https://the-wild-path.netlify.app/",
      github: "https://github.com/vishal0037k/the-wild-path",
    },
    {
      title: "E-Commerce Website",
      description:
        "A full-featured e-commerce web application with cart management, and payment integration using MERN Stack.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      live: "https://rediscover-v.netlify.app/",
      github: "https://github.com/vishal0037k/E-commerce-website",
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive weather application that fetches real-time data using OpenWeather API. Users can search any city and get live updates. (5D & Hourly with Current Location)",
      tech: ["React.js", "API Integration", "CSS3"],
      live: "https://current-weather-pr.netlify.app/",
      github: "https://github.com/vishal0037k/-WeatherNow-Real-Time-Weather-App",
    },
    {
      title: "Institute Website",
      description:
        "Collaborated with a team of 5 developers to convert a static HTML and Bootstrap website into a fully dynamic React.js application. Integrated reusable components, optimized performance, and combined individual modules into a complete, responsive web solution.",
      tech: ["React.js", "Swipper"],
      live: "https://netcoder-v.netlify.app/",
      github: "https://github.com/vishal0037k/Netcoder-UI",
    },
    {
      title: "Company Internal Website",
      description:
        "Developed a full-featured internal web platform where users can access tech tutorials, practice exercises, explore company services, and earn premium certifications — all integrated with a smart search bar for seamless navigation.",
      tech: ["React.js", "Node.js", "Express.js", "Email.js"],
      live: "https://innojs-infotech-beta-version.netlify.app/",
      github: "https://github.com/vishal0037k/Innojs-Infotech-Palampur",
    },
    {
      title: "CRM Software Website",
      description:
        "Designed and developed a full-featured CRM application using Next.js and MongoDB, implementing secure user authentication, RESTful APIs for complete CRUD operations, and a clean, responsive UI to manage clients, leads, and business workflows efficiently.",
      tech: ["Next.js", "Api", "Model", "MongoDb"],
      live: "https://crm-software-website-kmt8.vercel.app/",
      github: "https://github.com/vishal0037k/crm-software-website",
    },
    {
      title: "Real Time Chat",
      description:
        "Designed and developed a full-featured CRM application using Next.js and MongoDB, implementing secure user authentication, RESTful APIs for complete CRUD operations, and a clean, responsive UI to manage clients, leads, and business workflows efficiently.",
      tech: ["React.js", "vite", "Firebase", "Realtime chat"],
      live: "https://independent-chat.netlify.app/",
      github: "https://github.com/vishal0037k/Reat-time-chat-website",
    },
    {
      title: "Food Cart Website",
      description:
        "Created a modern and responsive website for Thela Tales, a local food cart in Palampur specializing in Vada Pav and street snacks. Designed an engaging UI with smooth navigation, menu showcase, and location details to promote the brand and attract nearby customers.",
      tech: ["React.js", "Api", "WhatsApp", "Direct Messaging"],
      live: "https://thela-tales.netlify.app/",
      github: "https://github.com/vishal0037k/Thela-Tales",
    },
    {
      title: "Todo Task Manager",
      description:
        "Developed a smart task management app with priority-based organization, session handling, and local storage integration to ensure tasks persist across sessions. The app allows users to efficiently create, edit, and manage tasks with real-time updates and a clean, minimal UI.",
      tech: ["React.js", "Session Storage", "Local Storage"],
      live: "https://todo-task-manager-v.netlify.app/",
      github: "https://github.com/vishal0037k/Task-management-app",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2
          className="projects-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <br />

        {/* 🔥 WRAPPER (IMPORTANT) */}
        <div className="projects-slider-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tech-stack">
                      {project.tech.map((t, i) => (
                        <span key={i}>{t}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-live"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Navigation Buttons */}
          <div className="swiper-navigation">
            <button className="swiper-button-prev">
              <ChevronLeft size={22} />
            </button>
            <button className="swiper-button-next">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* View More */}
        <motion.div
          className="view-more-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/vishal0037k?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            <Github size={18} /> View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
