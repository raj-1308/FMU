import { motion } from "framer-motion";
import "./CF2.css";

import heroImg from "../../../assets/images/off.webp";
import img1 from "../../../assets/images/image.png";
import img2 from "../../../assets/images/off.jpg";
import img3 from "../../../assets/images/main-kitechn.png";

export default function CF2() {
  return (
    <section className="cf2-wrapper">
      <motion.div
        className="cf2-hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="cf2-hero-text">
          <span className="cf2-badge">Residential Furniture</span>
          <h1>Comfortable Living, Thoughtfully Crafted</h1>
          <p>
            Elegant, durable, and space-optimized furniture solutions designed
            to enhance everyday living experiences.
          </p>
        </div>

        <div className="cf2-hero-image">
          <img src={heroImg} alt="Residential Furniture" />
        </div>
      </motion.div>

      <motion.div
        className="cf2-categories"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Residential Offerings</h2>

        <div className="cf2-grid">
          <div className="cf2-card">
            <img src={img1} alt="Bedroom Furniture" />
            <h3>Bedroom Furniture</h3>
            <p>
              Beds, wardrobes, and storage solutions designed for comfort,
              durability, and daily usability.
            </p>
          </div>

          <div className="cf2-card">
            <img src={img2} alt="Living Room Furniture" />
            <h3>Living Room Furniture</h3>
            <p>
              Stylish sofas, TV units, and cabinets that balance aesthetics and
              practicality.
            </p>
          </div>

          <div className="cf2-card">
            <img src={img3} alt="Kitchen Furniture" />
            <h3>Modular Kitchens</h3>
            <p>
              Space-efficient modular kitchens designed for functionality,
              safety, and easy maintenance.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="cf2-why"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose Our Residential Furniture</h2>

        <div className="cf2-why-grid">
          <div className="cf2-why-box">
            <h4>Comfort First Design</h4>
            <p>
              Furniture ergonomics designed for everyday comfort and long usage.
            </p>
          </div>

          <div className="cf2-why-box">
            <h4>Premium Materials</h4>
            <p>
              Carefully selected materials ensuring strength, safety, and
              longevity.
            </p>
          </div>

          <div className="cf2-why-box">
            <h4>Custom Dimensions</h4>
            <p>
              Every piece tailored to fit your home layout perfectly.
            </p>
          </div>

          <div className="cf2-why-box">
            <h4>Clean Finishing</h4>
            <p>
              Smooth edges, precise joins, and refined surface finishes.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
