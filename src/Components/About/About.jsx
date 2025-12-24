import React from "react";
import "./About.css";

const AboutLight = () => {
  return (
    <section className="about-light" id="about">
      <div className="about-light-container">

        {/* TOP INTRO */}
        <div className="about-light-header">
          <span className="about-badge">Who We Are</span>
          <h2>
            More Than Furniture. <br />
            A Manufacturing Legacy.
          </h2>
          <p>
            We are a modern furniture manufacturing unit focused on precision,
            scalability, and timeless design. Every product we build reflects
            our commitment to quality, durability, and functional aesthetics.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-light-grid">

          {/* LEFT TEXT */}
          <div className="about-light-text">
            <h3>Built on Craftsmanship & Technology</h3>
            <p>
              Our manufacturing facility combines skilled workmanship with
              advanced machinery to deliver consistent, high-quality furniture
              at scale. From custom pieces to bulk production, our processes
              are optimized for efficiency without compromising on detail.
            </p>

            <p>
              We serve residential, commercial, and institutional clients,
              offering solutions that are reliable, sustainable, and tailored
              to real-world use cases.
            </p>

            <div className="about-highlight">
              <span>✔ End-to-End Manufacturing</span>
              <span>✔ Custom & Bulk Production</span>
              <span>✔ Strict Quality Control</span>
              <span>✔ On-Time Delivery</span>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="about-light-cards">
            <div className="about-card">
              <h4>Design Thinking</h4>
              <p>
                Furniture designed with purpose, ergonomics, and modern usage
                in mind.
              </p>
            </div>

            <div className="about-card">
              <h4>Manufacturing Strength</h4>
              <p>
                Well-equipped facility capable of handling complex and large
                volume orders.
              </p>
            </div>

            <div className="about-card">
              <h4>Quality Assurance</h4>
              <p>
                Multi-stage quality checks to ensure durability and finish.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutLight;
