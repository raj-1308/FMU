import { motion } from "framer-motion";
import "./CF6.css";

import heroImg from "../../../assets/images/D&I.webp";
import img1 from "../../../assets/images/off.webp";
import img2 from "../../../assets/images/image.png";
import img3 from "../../../assets/images/off.jpg";

export default function CF6() {
  return (
    <section className="cf6-wrapper">
      <motion.div
        className="cf6-hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="cf6-hero-text">
          <span className="cf6-badge">Delivery & Installation</span>
          <h1>Handled with Care. Installed with Precision.</h1>
          <p>
            From factory dispatch to final installation, we ensure a smooth,
            damage-free, and professional experience at every step.
          </p>
        </div>

        <div className="cf6-hero-image">
          <img src={heroImg} alt="Delivery and Installation" />
        </div>
      </motion.div>

      <motion.div
        className="cf6-flow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our End-to-End Process</h2>

        <div className="cf6-timeline">
          <div className="cf6-step">
            <span>01</span>
            <h3>Secure Packaging</h3>
            <p>
              Each furniture component is packed carefully to prevent transit
              damage.
            </p>
          </div>

          <div className="cf6-step">
            <span>02</span>
            <h3>Scheduled Delivery</h3>
            <p>
              Delivery timelines are coordinated in advance to avoid delays and
              inconvenience.
            </p>
          </div>

          <div className="cf6-step">
            <span>03</span>
            <h3>Professional Installation</h3>
            <p>
              Skilled installers assemble and fit furniture with precision and
              safety.
            </p>
          </div>

          <div className="cf6-step">
            <span>04</span>
            <h3>Final Inspection</h3>
            <p>
              A final quality check ensures alignment, finish, and stability.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="cf6-assurance"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="cf6-assurance-content">
          <h2>Your Assurance, Our Responsibility</h2>
          <p>
            We treat your space with respect — clean installation, careful
            handling, and complete satisfaction are always our priorities.
          </p>

          <div className="cf6-assurance-grid">
            <div className="cf6-assurance-box">
              <img src={img1} alt="On-time Delivery" />
              <h4>On-Time Delivery</h4>
            </div>

            <div className="cf6-assurance-box">
              <img src={img2} alt="Clean Installation" />
              <h4>Clean Installation</h4>
            </div>

            <div className="cf6-assurance-box">
              <img src={img3} alt="Post Support" />
              <h4>Post-Installation Support</h4>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
