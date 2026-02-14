"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/Tours.module.css";
import { Clock, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { allTours } from "@/data/tours";

const featuredTours = allTours.slice(0, 3);

export default function Tours() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="tours" className="section">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div>
                        <h2 className="section-title">Popular Tour Packages</h2>
                        <p className="section-subtitle">Carefully curated experiences to show you the heart of Sri Lanka.</p>
                    </div>
                    <Link href="/tours">
                        <button className="btn-secondary">View All Tours</button>
                    </Link>
                </div>

                <div className={styles.grid}>
                    {featuredTours.map((tour, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.tourCard}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: isMobile ? 0 : idx * 0.1
                            }}
                        >
                            <div className={styles.tourImage}>
                                <Image src={tour.image} alt={tour.title} fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className={styles.overlay} />
                            <div className={styles.tourContent}>
                                <span className={styles.tag}>{tour.tag}</span>
                                <h3 className={styles.title}>{tour.title}</h3>
                                <div className={styles.details}>
                                    <span><Clock size={16} /> {tour.duration}</span>
                                    <span><MapPin size={16} /> {tour.location}</span>
                                    <span><Star size={16} fill="currentColor" /> {tour.rating}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
