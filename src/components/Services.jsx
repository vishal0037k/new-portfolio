import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers3, MonitorSmartphone, Brush, Wrench } from "lucide-react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Full Stack Developer",
      icon: <Layers3 size={28} />,
      description:
        "End-to-end web solutions using the MERN stack — from building robust APIs to crafting responsive frontends for seamless experiences.",
    },
    {
      title: "React Developer",
      icon: <Code2 size={28} />,
      description:
        "Building fast, scalable, and dynamic single-page applications with React.js and modern JavaScript features.",
    },
    {
      title: "Frontend Developer",
      icon: <MonitorSmartphone size={28} />,
      description:
        "Creating beautiful, responsive, and user-friendly interfaces using HTML, CSS, and React. Focused on performance and design precision.",
    },
    {
      title: "App Designer",
      icon: <Brush size={28} />,
      description:
        "Designing clean and intuitive mobile and web app interfaces — blending functionality with aesthetics for an enhanced user experience.",
    },
  
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.h2
          className="services-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
