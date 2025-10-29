import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, Database, Wrench } from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "React.js", "Next.js", "Framer motion", "Swiper", "Recharts"],
    },
    {
      title: "Backend Development",
      icon: <Layers size={24} />,
      skills: ["Node.js", "Express.js", "PHP", "Laravel", "MVC Pattern", "CRUD", "Api's", "Data structures & Schema"],
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MongoDB", "MySQL", "Local Storage", "Session Storage"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "Postman", "Jquery", "Email.js", "Netlify", "VS Code", "Open weather", "XAMPP", "ChatGPT", "BlackboxAI", "Figma", "Canva", "Ai Bot Integration (Zapier)"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.h2
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
