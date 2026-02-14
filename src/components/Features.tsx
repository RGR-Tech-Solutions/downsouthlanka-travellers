"use client";

import { useState, useEffect } from "react";
import styles from "./css/Features.module.css";
import { Compass, Car, Map as MapIcon, Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <Compass size={32} />,
        title: "Expert Guided Tours",
        desc: "Experience Sri Lanka through the eyes of local experts who know every hidden gem."
    },
    {
        icon: <Car size={32} />,
        title: "Luxury Transport",
        desc: "A premium fleet of vans, SUVs, and luxury coaches for a comfortable journey across the island."
    },
    {
        icon: <MapIcon size={32} />,
        title: "Bespoke Itineraries",
        desc: "We customize every trip to match your pace, interests, and preferences."
    },
    {
        icon: <Shield size={32} />,
        title: "Safe & Reliable",
        desc: "Your safety is our priority. Professional drivers and well-maintained vehicles."
    },
    {
        icon: <Users size={32} />,
        title: "Large Group MICE",
        desc: "Specialized services for corporate events, retreats, and large group excursions."
    },
    {
        icon: <Clock size={32} />,
        title: "24/7 Support",
        desc: "Our dedicated support team is always available to assist you throughout your trip."
    }
];

export default function Features() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="services" className="section container">
            <div className="text-center">
                <h2 className="section-title">Why Travel With Us?</h2>
                <p className="section-subtitle" style={{ margin: "0 auto 3rem" }}>
                    We provide a seamless travel experience from the moment you land until you say goodbye to paradise.
                </p>
            </div>

            <div className={styles.grid}>
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className={styles.card}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.5,
                            delay: isMobile ? 0 : idx * 0.1
                        }}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                        </div>
                        <p className={styles.cardText}>{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
