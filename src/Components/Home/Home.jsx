import { motion } from "framer-motion";
import "./Home.css";
import heroImage from "../../assets/images/main-kitechn.png";

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <motion.section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>Transform Your Home with Customized Furniture</h1>
          <p>Modular Kitchens | Wardrobes | Interior Solutions</p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("enquiry")}
            >
              Get a Free Consultation
            </button>

            <button
              className="btn-secondary"
              onClick={() => scrollToSection("services")}
            >
              View Our Projects
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="highlights"
        className="trust"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div
          className="trust-card"
          onClick={() => scrollToSection("services")}
        >
          <div className="trust-icon service" />
          <h3>Our Services</h3>
          <p>
            Modular Kitchens, Wardrobes and Complete Interior Solutions
          </p>
        </div>

        <div
          className="trust-card"
          onClick={() => scrollToSection("about")}
        >
          <div className="trust-icon quality" />
          <h3>Why Choose Us</h3>
          <p>
            Premium materials, transparent pricing and expert craftsmanship
          </p>
        </div>

        <div
          className="trust-card"
          onClick={() => scrollToSection("enquiry")}
        >
          <div className="trust-icon review" />
          <h3>Client Testimonials</h3>
          <p>
            Trusted by homeowners for quality, service and timely delivery
          </p>
        </div>
      </motion.section>

      <motion.section
        id="enquiry"
        className="enquiry-premium"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="enquiry-premium-container">
          <div className="enquiry-premium-text">
            <span className="enquiry-tag">Quick Enquiry</span>
            <h2>Let’s Discuss Your Requirement</h2>
            <p>
              Share a few details and our team will reach out to guide you through
              design, manufacturing, and installation.
            </p>
          </div>

          <form className="enquiry-premium-form">
            <input type="text" placeholder="Full Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />

            <select>
              <option>Select Requirement</option>
              <option>Modular Kitchen</option>
              <option>Wardrobe</option>
              <option>Full Home Interior</option>
              <option>Custom Furniture</option>
            </select>

            <button type="submit">Request Consultation</button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
