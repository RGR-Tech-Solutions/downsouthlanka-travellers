"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/components/css/About.module.css";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
    return (
        <main style={{ backgroundColor: "#ffffff" }}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.aboutHero}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.heroVideo}
                >
                    <source src="/images/gallery.mp4" type="video/mp4" />
                </video>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Captured Moments
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Visual Stories from Paradise
                    </motion.p>
                </div>
            </section>

            {/* Modern Gallery Section */}
            <section className={styles.gallerySection}>
                <div className="container">
                    <div className={styles.modernGrid}>
                        {galleryImages.map((image, idx) => (
                            <motion.div
                                key={image.id}
                                className={styles.gridItem}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: (idx % 8) * 0.1 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
