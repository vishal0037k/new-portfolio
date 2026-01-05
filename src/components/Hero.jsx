import React from "react";
import { motion } from "framer-motion";
import graphicImg from "../assets/dev-graphic.png";
import resume from "../assets/vishal-resume.pdf";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1>
            Hi, I'm <span>Vishal Choudhary</span>
          </h1>
          <h2>
           <span className="dot">.</span> Full Stack Developer | MERN Stack | NextJs
            <br />
           <span className="dot">.</span> Wordpress | Hosting | SEO
           <br />
           <span className="dot">.</span> PHP | Laravel | MySQL
          </h2>
          <p>
            I build modern, scalable, and high-performing web applications with
            clean UI and powerful backend integrations.
          </p>
          <div className="hero-buttons">
            <a href={resume} download className="btn btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right Graphic */}
        <motion.div
          className="hero-graphic"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={graphicImg}
            alt="Developer Graphic"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
