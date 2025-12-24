import { motion } from "framer-motion";
import "./Services.css";

import serviceImage from "../../assets/images/image.png";
import serviceRecidental from "../../assets/images/off.webp";
import serviceOffice from "../../assets/images/off.jpg";
import serviceMaterial from "../../assets/images/main-kitechn.png";
import serviceManufacturing from "../../assets/images/wood.webp";
import serviceInstallation from "../../assets/images/D&I.webp";

const servicesData = [
  {
    image: serviceImage,
    title: "Custom Furniture Design",
    description:
      "Bespoke furniture designed to perfectly align with your space, lifestyle, and functional needs.",
  },
  {
    image: serviceRecidental,
    title: "Residential Furniture",
    description:
      "Comfort-focused and elegant furniture solutions for homes, apartments, and villas.",
  },
  {
    image: serviceOffice,
    title: "Commercial & Office Furniture",
    description:
      "Ergonomic and professional furniture designed to enhance productivity in workspaces.",
  },
  {
    image: serviceMaterial,
    title: "Material & Wood Selection",
    description:
      "Carefully selected materials ensuring durability, strength, and premium finishes.",
  },
  {
    image: serviceManufacturing,
    title: "Manufacturing & Quality Control",
    description:
      "Precision manufacturing supported by modern machinery and strict quality standards.",
  },
  {
    image: serviceInstallation,
    title: "Delivery & Installation",
    description:
      "Timely delivery and expert installation ensuring a smooth and hassle-free experience.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="services-badge">What We Offer</span>
          <h2>Complete Furniture Manufacturing Services</h2>
          <p>
            From design consultation to manufacturing and installation, we
            deliver complete furniture solutions crafted with precision,
            durability, and premium quality.
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
