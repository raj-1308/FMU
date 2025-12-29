import { motion } from "framer-motion";
import "./CF1.css";
import designImg from "../../../assets/images/image.png";

export default function CF1() {
  return (
    <section className="cf1-wrapper">
      <motion.div
        className="cf1-hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="cf1-hero-text">
          <span className="cf1-badge">Custom Furniture Design</span>
          <h1>Designed for Your Space. Built for Your Life.</h1>
          <p>
            We craft bespoke furniture solutions that combine aesthetics,
            functionality, and long-term durability — designed exclusively for
            your space.
          </p>
        </div>

        <div className="cf1-hero-image">
          <img src={designImg} alt="Custom Furniture Design" />
        </div>
      </motion.div>

      <motion.div
        className="cf1-process"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Design Process</h2>

        <div className="cf1-steps">
          <div className="cf1-step">
            <span>01</span>
            <h3>Requirement Analysis</h3>
            <p>
              We understand your lifestyle, space constraints, usage patterns,
              and aesthetic preferences before starting the design.
            </p>
          </div>

          <div className="cf1-step">
            <span>02</span>
            <h3>Space Measurement</h3>
            <p>
              Accurate site measurements ensure perfect fitting and maximum
              space utilization.
            </p>
          </div>

          <div className="cf1-step">
            <span>03</span>
            <h3>Design & Visualization</h3>
            <p>
              2D layouts and 3D visualizations help you preview the final
              outcome before production.
            </p>
          </div>

          <div className="cf1-step">
            <span>04</span>
            <h3>Client Approval</h3>
            <p>
              Final designs are approved by you before moving into the
              manufacturing stage.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="cf1-why"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose Our Design Services</h2>

        <div className="cf1-why-grid">
          <div className="cf1-why-card">
            <h4>Tailor-Made Solutions</h4>
            <p>
              Every piece is customized to fit your exact space and functional
              needs.
            </p>
          </div>

          <div className="cf1-why-card">
            <h4>Experienced Designers</h4>
            <p>
              Our team blends creativity with practical manufacturing knowledge.
            </p>
          </div>

          <div className="cf1-why-card">
            <h4>Material Awareness</h4>
            <p>
              Designs are created keeping material strength, finish, and
              durability in mind.
            </p>
          </div>

          <div className="cf1-why-card">
            <h4>Seamless Execution</h4>
            <p>
              Design decisions are aligned with production feasibility and
              installation ease.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
