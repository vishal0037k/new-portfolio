import React, { useState } from "react";
import {
  Code2,
  Layers3,
  MonitorSmartphone,
  Globe,
  Server,
  Search,
  Rocket,
} from "lucide-react";
import "./Services.css";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Digital Product Development",
      icon: <Rocket size={22} />,
      description:
        "I help ambitious startups and brands transform their ideas into secure, scalable, and high-performance digital products that drive engagement, conversions, and sustainable growth.",
    },
    {
      title: "Full Stack Web Development",
      icon: <Layers3 size={22} />,
      description:
        "Complete end-to-end development using MERN, Next.js, PHP, and Laravel with scalable backend architecture and modern frontend solutions.",
    },
    {
      title: "Frontend & React Development",
      icon: <Code2 size={22} />,
      description:
        "High-performance React applications with clean UI, reusable components, and responsive design across all devices.",
    },
    {
      title: "WordPress & Shopify Solutions",
      icon: <Globe size={22} />,
      description:
        "Custom business websites and e-commerce stores with secure setup, optimization, and ongoing support.",
    },
    {
      title: "Hosting, Domain & Deployment",
      icon: <Server size={22} />,
      description:
        "Complete hosting setup including domain configuration, DNS management, cPanel setup, SSL installation, and secure deployment.",
    },
    {
      title: "SEO & Website Security",
      icon: <Search size={22} />,
      description:
        "Technical SEO, performance optimization, malware removal, and hack prevention to keep your website fast and secure.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="services-heading">My Services</h2>

      <div className="services-accordion">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="service-header"
              onClick={() => toggleService(index)}
            >
              <div className="service-title">
                <span className="icon">{service.icon}</span>
                <h3>{service.title}</h3>
              </div>

              <span className="toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`service-content ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;