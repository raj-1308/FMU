import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="contact-center-btn" onClick={() => setOpen(true)}>
        Contact Us
      </button>

      {open && (
        <div className="contact-overlay">
          <div className="contact-box">
            <div className="contact-header">
              <h2>Contact Our Team</h2>
              <span className="close-btn" onClick={() => setOpen(false)}>
                ✕
              </span>
            </div>

            <p className="contact-desc">
              Furniture design, manufacturing & installation support.
            </p>

            <div className="contact-actions">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Brief requirement"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
