import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  MonitorSmartphone,
  Brush,
  Globe,
  Server,
  Search,
  PenTool,
} from "lucide-react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Full Stack Developer",
      icon: <Layers3 size={30} />,
      description:
        "End-to-end web solutions using MERN stack, scalable APIs, secure backend, and modern frontend architecture.",
    },
    {
      title: "React Developer",
      icon: <Code2 size={30} />,
      description:
        "High-performance React applications using hooks, reusable components, and clean state management.",
    },
    {
      title: "Frontend Developer",
      icon: <MonitorSmartphone size={30} />,
      description:
        "Pixel-perfect, responsive UI with HTML, CSS, React & modern UI libraries.",
    },
    {
      title: "UI / UX Designer",
      icon: <PenTool size={30} />,
      description:
        "User-centered UI/UX design focused on clean layouts, usability, and conversion-driven interfaces.",
    },
    {
      title: "WordPress Developer",
      icon: <Globe size={30} />,
      description:
        "Custom WordPress websites, themes, plugins, Elementor-based layouts & optimization.",
    },
    {
      title: "Hosting & Deployment",
      icon: <Server size={30} />,
      description:
        "Hosting setup, domain configuration, SSL, CDN, and production deployment.",
    },
    {
      title: "SEO Expert",
      icon: <Search size={30} />,
      description:
        "On-page SEO, technical SEO, speed optimization & ranking improvements.",
    },
    {
      title: "App Designer",
      icon: <Brush size={30} />,
      description:
        "Modern mobile & web app designs balancing functionality with aesthetics.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <motion.h2
        className="services-heading"
        initial={{ opacity: 0, y: 30 }}
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
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
