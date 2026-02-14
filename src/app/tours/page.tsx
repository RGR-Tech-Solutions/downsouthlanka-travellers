"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Clock, MapPin, Star, Filter, Search } from "lucide-react";
import { motion } from "framer-motion";
import { allTours } from "@/data/tours";
import styles from "@/components/css/Tours.module.css";
import { useState } from "react";
import tourHero from "../../../public/images/mirissa.jpg";
import { useInquiryModal } from "@/context/InquiryModalContext";

import toursStyles from "./ToursPage.module.css";

export default function ToursPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("All");
    const { openModal } = useInquiryModal();

    const tags = ["All", ...Array.from(new Set(allTours.map(t => t.tag)))];

    const filteredTours = allTours.filter(tour => {
        const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tour.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTag = selectedTag === "All" || tour.tag === selectedTag;
        return matchesSearch && matchesTag;
    });

    return (
        <main>
            <Navbar />

            {/* Header */}
            <section className={toursStyles.hero}>
                <Image
                    src={tourHero}
                    alt="Sri Lanka Highlands"
                    fill
                    className={styles.heroBg}
                    style={{ objectFit: "cover", zIndex: -1 }}
                    priority
                />
                <div className={toursStyles.heroOverlay} />

                <div className={`container ${toursStyles.heroContent}`}>
                    <motion.h1
                        className={toursStyles.heroTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        All Tour Packages
                    </motion.h1>
                    <p className={toursStyles.heroSubtitle}>
                        Explore our complete collection of handpicked experiences across the beautiful island of Sri Lanka.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className={toursStyles.filterSection}>
                <div className="container">
                    <div className={toursStyles.filterContainer}>
                        <div className={toursStyles.searchWrapper}>
                            <Search size={18} color="var(--primary)" />
                            <input
                                type="text"
                                placeholder="Search tours..."
                                className={toursStyles.searchInput}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className={toursStyles.tagWrapper}>
                            {/* Desktop View Tags */}
                            <div className={toursStyles.desktopOnly}>
                                {tags.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => setSelectedTag(tag)}
                                        className={toursStyles.tagButton}
                                        style={{
                                            background: selectedTag === tag ? "var(--primary)" : "white",
                                            color: selectedTag === tag ? "white" : "var(--foreground)",
                                            borderColor: selectedTag === tag ? "var(--primary)" : "#eee"
                                        }}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile View Dropdown */}
                            <div className={toursStyles.mobileOnly}>
                                <select
                                    className={toursStyles.mobileSelect}
                                    value={selectedTag}
                                    onChange={(e) => setSelectedTag(e.target.value)}
                                >
                                    {tags.map(tag => (
                                        <option key={tag} value={tag}>{tag}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tours Grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {filteredTours.map((tour, idx) => (
                            <motion.div
                                key={tour.id}
                                className={toursStyles.fullTourCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                            >
                                <div className={toursStyles.tourImageWrapper}>
                                    <Image
                                        src={tour.image}
                                        alt={tour.title}
                                        fill
                                        priority={idx < 3}
                                    />
                                    <div className={styles.overlay} />
                                    <div style={{ position: "absolute", top: "1rem", right: "1rem", zIndex: 5 }}>
                                        <span className={styles.tag}>{tour.tag}</span>
                                    </div>
                                </div>
                                <div className={toursStyles.cardBody}>
                                    <h3 className={toursStyles.tourTitle}>{tour.title}</h3>
                                    <div className={toursStyles.tourMeta}>
                                        <span className={toursStyles.metaItem}><Clock size={16} /> {tour.duration}</span>
                                        <span className={toursStyles.metaItem}><MapPin size={16} /> {tour.location}</span>
                                        <span className={toursStyles.metaItem}><Star size={16} fill="#FFD700" color="#FFD700" /> {tour.rating}</span>
                                    </div>
                                    <p className={toursStyles.tourDescription}>
                                        {tour.description}
                                    </p>
                                    <button
                                        className={`btn-primary ${toursStyles.enquireBtn}`}
                                        onClick={openModal}
                                    >
                                        Enquire for Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredTours.length === 0 && (
                        <div style={{ textAlign: "center", padding: "5rem 0" }}>
                            <h3 style={{ fontSize: "1.5rem", color: "var(--muted)" }}>No tours found matching your search.</h3>
                            <button className="btn-secondary" style={{ marginTop: "1rem" }} onClick={() => { setSearchTerm(""); setSelectedTag("All"); }}>Clear All Filters</button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
