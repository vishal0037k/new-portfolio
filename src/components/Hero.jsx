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
  <span className="dot">.</span> Full Stack Developer | MERN Stack | Next.js  
  <br />
  <span className="dot">.</span> PHP | Laravel | MySQL | Firebase  
  <br />
  <span className="dot">.</span> WordPress | Shopify | SEO Optimization  
  <br />
  <span className="dot">.</span> Domain & Hosting | cPanel | Server Management  
  <br />
  <span className="dot">.</span> Website Security | Malware Removal | Hack Prevention
</h2>

<p>
  I build modern, scalable, and secure web applications with clean UI,
  optimized performance, and powerful backend integrations. From development
  to deployment, I handle domain setup, hosting configuration, cPanel
  management, and advanced website security to ensure reliable and protected
  digital experiences.
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
