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
            Hello! I'm <span>Vishal Choudhary</span>, a passionate{" "}
            <strong>Full Stack Developer</strong> and{" "}
            <strong>MERN Stack Specialist</strong> from Himachal Pradesh,
            India. I have a strong interest in creating innovative, interactive,
            and user-friendly web applications that merge creativity with
            performance. My journey into tech started with curiosity — I always
            wanted to understand how the web works. Over time, that curiosity
            turned into a deep passion for coding and problem-solving.
          </p>

          <p>
            I specialize in technologies like <strong>React.js</strong>,{" "}
            <strong>Node.js</strong>, <strong>Express.js</strong>,{" "}
            <strong>MongoDB</strong>, and I’m always exploring new frameworks
            such as <strong>Next.js</strong> and <strong>Laravel</strong>. I
            love working on real-world projects that challenge me to learn
            continuously and help me evolve as a developer. My focus is on
            building scalable, maintainable, and high-performing digital
            products that make a difference.
          </p>

          <p>
            Apart from coding, I’m a person who believes in balance — I’m
            passionate about exploring new places, listening to soulful music,
            and keeping myself active through sports. I believe these
            activities keep my creativity flowing and help me stay focused even
            after long hours of screen time.
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
