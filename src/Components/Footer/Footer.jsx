import { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleNewsletter(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => {
      setEmail("");
      setSent(false);
    }, 1800);
  }

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-logo">
              <img src="/logo.png" alt="FMU Logo" />
          </div>


          <p className="brand-desc">
            Handcrafted furniture & turnkey installations. Quality materials,
            precise manufacturing and on-time delivery.
          </p>

          <div className="footer-trust">
            <div><strong>12+</strong><span>Years</span></div>
            <div><strong>1k+</strong><span>Projects</span></div>
            <div><strong>ISO</strong><span>Certified</span></div>
          </div>
        </div>

        <nav className="footer-links">
          <div className="col">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/projects">Projects</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="col">
            <h4>Services</h4>
            <a href="/services#manufacturing">Manufacturing</a>
            <a href="/services#installation">Installation</a>
            <a href="/services#design">Design</a>
            <a href="/services#procurement">Procurement</a>
          </div>

          <div className="col">
            <h4>Resources</h4>
            <a href="/faq">FAQ</a>
            <a href="/blog">Blog</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
        </nav>

        <div className="footer-contact">
          <h4>Get in touch</h4>

          <div className="contact-row">
            <a className="contact-action" href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
              <FaWhatsapp /> <span>Chat on WhatsApp</span>
            </a>

            <a className="contact-action" href="tel:+919999999999">
              <FaPhoneAlt /> <span>+91 99999 99999</span>
            </a>

            <a className="contact-action" href="mailto:info@yourcompany.com">
              <FaEnvelope /> <span>info@yourcompany.com</span>
            </a>
          </div>

          <form className="newsletter" onSubmit={handleNewsletter}>
            <input
              type="email"
              placeholder="Your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">{sent ? "Saved" : "Subscribe"}</button>
          </form>

          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} FMU. All rights reserved.
        </small>

        <div className="footer-bottom-right">
          <a href="/sitemap">Sitemap</a>
          <a href="/contact">Request Quote</a>
        </div>
      </div>

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
      
    </footer>
    
  );
}
