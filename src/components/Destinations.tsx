"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./css/Destinations.module.css";
import { motion } from "framer-motion";
import sigiriyaImage from "../../public/images/sigiriya.jpg";
import nine_archImage from "../../public/images/Nine_Arch_Bridge.jpg";
import kandyImage from "../../public/images/kendy.jpg";
import littleEnglandImage from "../../public/images/nuwaraeliya.jpg";
import bentotaImage from "../../public/images/bentota.jpg";
import ellaRockImage from "../../public/images/ella_rock.jpg";

const destinations = [
    {
        title: "Sigiriya Rock Fortress",
        location: "Matale District",
        image: sigiriyaImage,
        desc: "The 'Eighth Wonder of the World'. This ancient rock plateau rises 200m above the jungle, housing a royal palace, legendary frescoes, and the famous Lion's Paw entrance.",
        isBig: true
    },
    {
        title: "Ella's Nine Arch Bridge",
        location: "Badulla District",
        image: nine_archImage,
        desc: "A masterpiece of colonial-era engineering tucked away in the misty mountains, surrounded by lush tea plantations."
    },
    {
        title: "Kandy Cultural Capital",
        location: "Central Province",
        image: kandyImage,
        desc: "The spiritual heart of Sri Lanka, home to the Sacred Temple of the Tooth Relic and the enchanting Kandy Lake."
    },
    {
        title: "Little England",
        location: "Nuwara Eliya",
        image: littleEnglandImage,
        desc: "Famous for its cool climate, English-style bungalows, and cascading waterfalls like St. Clair's and Devon Falls."
    },
    {
        title: "Bentota Coastal Gem",
        location: "Southern Coast",
        image: bentotaImage,
        desc: "The ultimate hub for water sports, river safaris on the Bentara Ganga, and relaxing on pristine golden sands."
    },
    {
        title: "Ella Rock & Peaks",
        location: "Hill Country",
        image: ellaRockImage,
        desc: "An adventurer's paradise offering breathtaking treks to Little Adam's Peak and panoramic views from Ella Rock."
    }
];

export default function Destinations() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="destinations" className={`${styles.destinationsSection} section`}>
            <div className="container">
                <div style={{ marginBottom: "3rem" }}>
                    <h2 className="section-title">Explore Iconic Destinations</h2>
                    <p className="section-subtitle">From misty mountains to golden shores, discover the diverse beauty of the Pearl of the Indian Ocean.</p>
                </div>

                <div className={styles.grid}>
                    {destinations.map((dest, idx) => (
                        <motion.div
                            key={idx}
                            className={`${styles.destinationCard} ${dest.isBig ? styles.bigCard : ""}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: isMobile ? 0 : idx * 0.1
                            }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image src={dest.image} alt={dest.title} fill />
                            </div>
                            <div className={styles.overlay} />
                            <div className={styles.content}>
                                <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary)", fontWeight: "600" }}>
                                    {dest.location}
                                </span>
                                <h3 className={styles.cardTitle}>{dest.title}</h3>
                                <p className={styles.cardSubtitle}>{dest.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
