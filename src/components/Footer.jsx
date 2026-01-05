import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, ArrowUp, Twitter } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Social Links */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/vishalchoudhary-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://github.com/vishal0037k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.instagram.com/vishal_webdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://x.com/Vishal56626457"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={22} />
          </a>

          {/* Gmail direct link instead of mailto */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalchoudhary.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} Vishal Choudhary. All Rights Reserved.
        </p>

        {/* Scroll to top */}
        <motion.button
          className="scroll-top-btn"
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
        >
          <ArrowUp size={18} />
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;
