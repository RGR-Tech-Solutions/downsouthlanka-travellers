"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./css/Hero.module.css";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "../../public/images/hero.jpg";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}>
                <Image
                    src={HeroImage}
                    alt="Sri Lanka Beach"
                    fill
                    priority
                    quality={100}
                />
            </div>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Discover the Magic of <span>Sri Lanka</span>
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Authentic travels, luxury transport, and unforgettable memories in paradise.
                </motion.p>

                <motion.div
                    className={styles.heroActions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link href="/tours" className={styles.exploreBtn}>
                        <span>Explore Tours</span>
                        <div className={styles.btnIcon}>
                            <ArrowRight size={24} />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
