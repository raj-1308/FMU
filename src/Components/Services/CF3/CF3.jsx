import { motion } from "framer-motion";
import "./CF3.css";

import heroImg from "../../../assets/images/off.jpg";
import img1 from "../../../assets/images/image.png";
import img2 from "../../../assets/images/off.webp";
import img3 from "../../../assets/images/wood.webp";

export default function CF3() {
  return (
    <section className="cf3-wrapper">
      <motion.div
        className="cf3-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="cf3-hero-text">
          <span className="cf3-badge">Commercial & Office Furniture</span>
          <h1>Built for Productivity. Designed for Performance.</h1>
          <p>
            Professional furniture solutions engineered to support efficient
            workflows, employee comfort, and modern workspaces.
          </p>
        </div>

        <div className="cf3-hero-image">
          <img src={heroImg} alt="Office Furniture" />
        </div>
      </motion.div>

      <motion.div
        className="cf3-sections"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Workspace Solutions</h2>

        <div className="cf3-grid">
          <div className="cf3-card">
            <img src={img1} alt="Office Workstations" />
            <h3>Office Workstations</h3>
            <p>
              Modular workstations designed to maximize productivity and space
              utilization.
            </p>
          </div>

          <div className="cf3-card">
            <img src={img2} alt="Conference Furniture" />
            <h3>Conference & Meeting Areas</h3>
            <p>
              Professional conference tables and seating for impactful
              discussions.
            </p>
          </div>

          <div className="cf3-card">
            <img src={img3} alt="Storage Furniture" />
            <h3>Storage & Utility</h3>
            <p>
              Filing units, cabinets, and storage systems built for durability
              and access control.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="cf3-why"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Why Our Commercial Furniture</h2>

        <div className="cf3-why-grid">
          <div className="cf3-why-item">
            <h4>Ergonomic Design</h4>
            <p>
              Designed to reduce fatigue and support long working hours.
            </p>
          </div>

          <div className="cf3-why-item">
            <h4>Corporate Aesthetics</h4>
            <p>
              Clean, minimal designs aligned with modern office environments.
            </p>
          </div>

          <div className="cf3-why-item">
            <h4>Bulk Manufacturing</h4>
            <p>
              Capability to execute large-scale office and commercial projects.
            </p>
          </div>

          <div className="cf3-why-item">
            <h4>Long-Term Durability</h4>
            <p>
              Furniture built to withstand daily commercial usage.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
