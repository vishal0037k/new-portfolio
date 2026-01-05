import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Instagram,
  Twitter,
  X,
} from "lucide-react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: "", success: true });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_5pneoup",
        "template_cybyx9e",
        form.current,
        "dxRM6XPUVIkh6JWNL"
      )
      .then(
        () => {
          setPopup({
            show: true,
            message: "✅ Message sent successfully!",
            success: true,
          });
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setPopup({
            show: true,
            message: "❌ Failed to send message. Please try again later.",
            success: false,
          });
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="contact-subtext"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Have a project idea or want to collaborate? Feel free to reach out!
        </motion.p>

        <div className="contact-grid">
          {/* Left side - Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="info-item">
              <Mail size={20} />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalchaudhary97123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </div>

            <div className="info-item">
              <Linkedin size={20} />
              <a
                href="https://www.linkedin.com/in/vishalchoudhary-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>

            <div className="info-item">
              <Github size={20} />
              <a
                href="https://github.com/vishal0037k"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Hub
              </a>
            </div>

            <div className="info-item">
              <Instagram size={20} />
              <a
                href="https://www.instagram.com/vishal_webdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>

            <div className="info-item">
              <Twitter size={20} />
              <a
                href="https://x.com/Vishal56626457"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>

            <div className="info-item">
              <MapPin size={20} />
             <a
                href="https://maps.app.goo.gl/v8qQFkXwit6hmpb77"
                target="_blank"
                rel="noopener noreferrer"
              >
                Location
              </a>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.form
            ref={form}
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Popup Notification */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            className={`popup ${popup.success ? "popup-success" : "popup-error"}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <p>{popup.message}</p>
            <button onClick={() => setPopup({ ...popup, show: false })}>
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
