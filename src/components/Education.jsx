import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import "./Education.css";

const Education = () => {
  const timelineData = [
    {
      type: "Education",
      title: "12th (Non-Medical)",
      institution: "Govt. Sr. Sec. School, Palampur",
      year: "2020 - 2021",
      icon: <GraduationCap size={22} />,
      details:
        "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics, which helped me develop analytical and logical problem-solving skills.",
    },
    {
      type: "Education",
      title: "DCA Diploma",
      institution: "Arise Computer Center, Palampur",
      year: "2021 - 2022",
      icon: <GraduationCap size={22} />,
      details:
        "Completed a one-year Diploma in Computer Applications, where I gained foundational knowledge of programming, operating systems, and database concepts.",
    },
    {
      type: "Education",
      title: "Full Stack Development Diploma (MERN)",
      institution: "Netcoder Technology Institute, Dharamshala",
      year: "2023 - 2024",
      icon: <GraduationCap size={22} />,
      details:
        "Learned MERN Stack development — mastering React.js, Node.js, Express.js, MongoDB, and Git. Built several small-scale full-stack projects during the course.",
    },
    {
      type: "Experience",
      title: "Web Development Internship",
      institution: "Innojs Infotech Pvt. Ltd., Palampur",
      year: "Mar 2025 - Oct 2025",
      icon: <Briefcase size={22} />,
      details:
        "Worked as a web development intern at a startup. Enhanced UI/UX design skills and collaborated on live client projects. Gained hands-on experience in React, Next.js, PHP, Laravel, and MySQL.",
    },
    {
      type: "Experience",
      title: "Full Stack Web Developer",
      institution: "Innojs Infotech Pvt. Ltd., Palampur",
      year: "Oct 2025 - Present",
      icon: <Briefcase size={22} />,
      details:
        "Currently working as a Full Stack Developer. Responsible for building responsive, scalable web applications using MERN stack and integrating RESTful APIs for seamless user experiences.",
    },
  ];

  return (
    <section id="education" className="timeline-section">
      <div className="timeline-container">
        <motion.h2
          className="timeline-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education & Experience
        </motion.h2>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${item.type.toLowerCase()}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span className="timeline-institution">{item.institution}</span>
                <span className="timeline-year">{item.year}</span>
                <p>{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
