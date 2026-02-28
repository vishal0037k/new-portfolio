import React from "react";
import { motion } from "framer-motion";
import { Music, Code, Plane, Brain, Dumbbell } from "lucide-react";
import "./About.css";

const About = () => {
  const hobbies = [
    { icon: <Music size={22} />, label: "Listening Music" },
    { icon: <Code size={22} />, label: "Coding" },
    { icon: <Plane size={22} />, label: "Travelling" },
    { icon: <Brain size={22} />, label: "Quick Learner" },
    { icon: <Dumbbell size={22} />, label: "Playing Badminton" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* About Intro */}
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>

         <p>
  Hello! I'm <span>Vishal Choudhary</span>, a passionate and results-driven 
  <strong> Full Stack Developer </strong> from Himachal Pradesh, India. 
  I specialize in building modern, scalable, and secure web applications 
  that combine clean design with powerful backend architecture. 
  My journey into technology began with curiosity about how websites work — 
  that curiosity quickly evolved into a deep passion for development, 
  problem-solving, and continuous learning.
</p>

<p>
  My core expertise includes <strong>React.js</strong>, <strong>Node.js</strong>, 
  <strong>Express.js</strong>, and <strong>MongoDB (MERN Stack)</strong>. 
  I also work with <strong>Next.js</strong>, <strong>PHP</strong>, 
  <strong>Laravel</strong>, <strong>MySQL</strong>, and <strong>Firebase</strong>. 
  Beyond development, I handle <strong>WordPress</strong> customization, 
  <strong>Domain & Hosting setup</strong>, <strong>cPanel management</strong>, 
  <strong>SEO optimization</strong>, and website performance tuning. 
  I focus strongly on <strong>security practices</strong>, including 
  malware removal, hack prevention, and secure deployment strategies 
  to ensure reliable and protected web experiences.
</p>

<p>
  I enjoy working on real-world projects that challenge my creativity 
  and technical skills. My goal is to deliver digital solutions that are 
  scalable, maintainable, and performance-driven. I believe in writing 
  clean, efficient code and constantly improving my skillset to stay 
  aligned with modern industry standards.
</p>

<p>
  Outside of development, I believe in maintaining balance. I enjoy 
  traveling, listening to music, and playing sports like badminton. 
  These activities keep me energized, creative, and focused — helping 
  me stay productive even during intense development cycles.
</p>
        </motion.div>

        {/* Hobbies Section */}
        <motion.div
          className="hobbies-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>My Hobbies & Interests</h3>
          <div className="hobby-list">
            {hobbies.map((hobby, index) => (
              <motion.div
                className="hobby-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="hobby-icon">{hobby.icon}</div>
                <p>{hobby.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
