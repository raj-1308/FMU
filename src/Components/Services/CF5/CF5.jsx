import { motion } from "framer-motion";
import "./CF5.css";

import heroImg from "../../../assets/images/wood.webp";
import machineImg from "../../../assets/images/image.png";
import qcImg from "../../../assets/images/off.webp";
import teamImg from "../../../assets/images/off.jpg";

export default function CF5() {
  return (
    <section className="cf5-wrapper">
      <motion.div
        className="cf5-hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="cf5-hero-text">
          <span className="cf5-badge">Manufacturing & Quality Control</span>
          <h1>Precision Manufacturing. Controlled at Every Stage.</h1>
          <p>
            Our manufacturing process combines modern machinery, skilled
            craftsmanship, and strict quality checkpoints to deliver furniture
            that meets industrial-grade standards.
          </p>
        </div>

        <div className="cf5-hero-image">
          <img src={heroImg} alt="Furniture Manufacturing" />
        </div>
      </motion.div>

      <motion.div
        className="cf5-process"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Manufacturing Process</h2>

        <div className="cf5-process-grid">
          <div className="cf5-process-card">
            <span>01</span>
            <h3>Material Preparation</h3>
            <p>
              Raw materials are inspected, measured, and prepared according to
              design specifications.
            </p>
          </div>

          <div className="cf5-process-card">
            <span>02</span>
            <h3>Precision Cutting</h3>
            <p>
              CNC and high-accuracy machines ensure dimensional consistency and
              clean finishes.
            </p>
          </div>

          <div className="cf5-process-card">
            <span>03</span>
            <h3>Assembly & Bonding</h3>
            <p>
              Components are assembled using industry-approved adhesives,
              fasteners, and joinery techniques.
            </p>
          </div>

          <div className="cf5-process-card">
            <span>04</span>
            <h3>Surface Finishing</h3>
            <p>
              Laminates, veneers, and finishes are applied under controlled
              conditions.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="cf5-quality"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Quality Control Standards</h2>

        <div className="cf5-quality-grid">
          <div className="cf5-quality-card">
            <img src={machineImg} alt="Machinery" />
            <h4>Modern Machinery</h4>
            <p>
              Advanced machines ensure accuracy, repeatability, and consistency
              across batches.
            </p>
          </div>

          <div className="cf5-quality-card">
            <img src={qcImg} alt="Quality Check" />
            <h4>Multiple QC Checkpoints</h4>
            <p>
              Each stage is inspected for alignment, finish quality, and
              structural integrity.
            </p>
          </div>

          <div className="cf5-quality-card">
            <img src={teamImg} alt="Skilled Workforce" />
            <h4>Skilled Workforce</h4>
            <p>
              Experienced technicians ensure craftsmanship meets design and
              durability standards.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
