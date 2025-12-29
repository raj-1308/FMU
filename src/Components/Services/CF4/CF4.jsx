import { motion } from "framer-motion";
import "./CF4.css";

import heroImg from "../../../assets/images/wood.webp";
import plyImg from "../../../assets/images/image.png";
import mdfImg from "../../../assets/images/off.webp";
import hardwoodImg from "../../../assets/images/off.jpg";

export default function CF4() {
    return (
        <section className="cf4-wrapper">
            <motion.div
                className="cf4-hero"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <div className="cf4-hero-text">
                    <span className="cf4-badge">Material & Wood Selection</span>
                    <h1>Quality Begins with the Right Materials</h1>
                    <p>
                        We carefully select materials based on strength, durability,
                        moisture resistance, and long-term performance — ensuring furniture
                        that lasts for years.
                    </p>
                </div>

                <div className="cf4-hero-image">
                    <img src={heroImg} alt="Wood Selection" />
                </div>
            </motion.div>

            <motion.div
                className="cf4-materials"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2>Materials We Use</h2>

                <div className="cf4-grid">
                    <div className="cf4-card">
                        <img src={plyImg} alt="Plywood" />
                        <h3>Plywood</h3>
                        <p>
                            High-grade plywood offering excellent strength, screw-holding
                            capacity, and resistance to warping.
                        </p>
                    </div>

                    <div className="cf4-card">
                        <img src={mdfImg} alt="MDF" />
                        <h3>MDF</h3>
                        <p>
                            Smooth and uniform material ideal for decorative finishes and
                            precision detailing.
                        </p>
                    </div>

                    <div className="cf4-card">
                        <img src={hardwoodImg} alt="Hardwood" />
                        <h3>Hardwood</h3>
                        <p>
                            Natural solid wood selected for premium furniture requiring
                            exceptional durability and aesthetics.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="cf4-why"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2>Why Material Selection Matters</h2>

                <div className="cf4-why-grid">
                    <div className="cf4-why-box">
                        <h4>Moisture Resistance</h4>
                        <p>
                            Materials chosen to withstand humidity and temperature variations.
                        </p>
                    </div>

                    <div className="cf4-why-box">
                        <h4>Structural Strength</h4>
                        <p>
                            Ensures furniture remains stable and durable over long-term usage.
                        </p>
                    </div>

                    <div className="cf4-why-box">
                        <h4>Finish Compatibility</h4>
                        <p>
                            Materials that accept laminates, veneers, and polishes flawlessly.
                        </p>
                    </div>

                    <div className="cf4-why-box">
                        <h4>Long-Term Value</h4>
                        <p>
                            Better materials reduce maintenance and replacement costs.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
