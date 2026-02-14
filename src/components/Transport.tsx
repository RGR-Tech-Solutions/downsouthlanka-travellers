"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./css/Transport.module.css";
import { Users, Briefcase, Snowflake } from "lucide-react";
import { motion } from "framer-motion";
import { useInquiryModal } from "@/context/InquiryModalContext";
import miniVan from "../../public/images/MiniVan.jpg"
import suv from "../../public/images/SUV.jpg"
import tukTuk from "../../public/images/Tuk-Tuk.jpg"

const vehicles = [
    {
        name: "Luxury Mini Van",
        image: miniVan,
        desc: "The ultimate choice for family adventures. Spacious, plush interiors with panoramic windows for viewing the island.",
        capacity: "6-8",
        luggage: "Large",
        ac: true,
        badge: "Most Popular"
    },
    {
        name: "Premium SUV",
        image: suv,
        desc: "Traverse any terrain in absolute luxury. Perfect for couples or small families seeking style and safety.",
        capacity: "3-4",
        luggage: "Medium",
        ac: true,
        badge: "Luxury Choice"
    },
    {
        name: "Coastal Tuk-Tuk",
        image: tukTuk,
        desc: "The heartbeat of Sri Lanka. Experience the warm breeze and vibrant streets in our well-maintained classic three-wheelers.",
        capacity: "2-3",
        luggage: "Small",
        ac: false,
        badge: "Local Experience"
    }
];

export default function Transport() {
    const { openModal } = useInquiryModal();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="transport" className={styles.transportSection}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                    <h2 className="section-title">Our Premium Fleet</h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Travel in comfort and style across the island. Every vehicle in our
                        handpicked fleet is meticulously maintained for your safety and relaxation.
                    </p>
                </div>

                <div className={styles.grid}>
                    {vehicles.map((vehicle, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.transportCard}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: isMobile ? 0 : idx * 0.1
                            }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image src={vehicle.image} alt={vehicle.name} fill />
                                <div className={styles.badge}>{vehicle.badge}</div>
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.vehicleName}>{vehicle.name}</h3>
                                <p className={styles.vehicleDesc}>{vehicle.desc}</p>

                                <div className={styles.features}>
                                    <span><Users size={18} /> {vehicle.capacity} Seats</span>
                                    <span><Briefcase size={18} /> {vehicle.luggage} Luggage</span>
                                    {vehicle.ac && <span><Snowflake size={18} /> Climate Control</span>}
                                </div>

                                <button className={styles.cta} onClick={openModal}>
                                    Enquire to Book
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
