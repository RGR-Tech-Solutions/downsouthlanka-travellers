"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Map, Car, Landmark, Palmtree, Users } from "lucide-react";
import styles from "./about-page.module.css";
import aboutHero from "../../../public/images/main_about.png";
export default function AboutPage() {
    return (
        <main>
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
                    <source src="/images/guiders.mp4" type="video/mp4" />
                </video>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Connecting you to the heart of Southern Sri Lanka
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className={`${styles.section} ${styles.storySection}`}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        <motion.div
                            className={styles.storyText}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>Welcome to Downsouth Lanka Travellers</h2>
                            <p>
                                Your trusted travel partner for exploring the breathtaking Southern Province of Sri Lanka!
                                We specialize in creating unforgettable experiences, whether you are seeking relaxing beach holidays,
                                adventurous hikes, cultural tours, or scenic countryside journeys.
                            </p>
                            <p>
                                At DownsouthLankaTravellers, we understand that every traveler is unique.
                                That’s why we provide personalized itineraries designed to suit your interests, schedule, and budget.
                                Whether you are a solo traveler, a couple on a honeymoon, a family seeking adventure, or a group exploring together,
                                we make sure every moment of your journey is memorable.
                            </p>
                            <blockquote>
                                "Ride, Fly & Explore with DownsouthLankaTravellers – where your journey begins the moment you dream it!"
                            </blockquote>
                        </motion.div>

                        <motion.div
                            className={styles.imageBox}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={aboutHero}
                                alt="Travel Planning"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className={styles.section} style={{ paddingTop: 0 }}>
                <div className="container">
                    <motion.div
                        className={styles.partnersSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '60px 20px' }}
                    >
                        <h2>Aviation Partnerships</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto 2rem', opacity: 0.9 }}>
                            As part of our commitment to providing seamless travel, we are proudly partnered with
                            <strong> SriLankan Airlines & FitsAir SriLanka</strong> allowing us to offer convenient
                            flight bookings alongside our expertly curated tour packages.
                        </p>
                        <div className={styles.partnersGrid}>
                            <div className={styles.partnerTag}>SriLankan Airlines</div>
                            <div className={styles.partnerTag}>FitsAir Sri Lanka</div>
                            <div className={styles.partnerTag}>Global Flight Connect</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.section} style={{ background: '#fff' }}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">What We Offer</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            We are passionate about making travel easy, enjoyable, and safe for everyone.
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}><Plane size={32} /></div>
                            <h3>Flight Bookings</h3>
                            <p>Global flight arrangements with major airlines worldwide, integrated with your tour.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}><Map size={32} /></div>
                            <h3>Curated Tours</h3>
                            <p>Private and group tours across Sri Lanka tailored to your specific interests.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}><Car size={32} /></div>
                            <h3>Transportation</h3>
                            <p>Luxury vehicle arrangements and seamless transport logistics across the island.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}><Landmark size={32} /></div>
                            <h3>Cultural Experiences</h3>
                            <p>Deep dives into the history, heritage, and authentic local life of Sri Lanka.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}><Palmtree size={32} /></div>
                            <h3>Scenic Journeys</h3>
                            <p>From the golden beaches of the south to the misty mountains of the upcountry.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}><Users size={32} /></div>
                            <h3>Expert Guidance</h3>
                            <p>Local knowledge combined with airline expertise for the best insider tips.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders / Guides Section */}
            <section className={`${styles.section} ${styles.foundersSection}`}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">Meet Our Founders</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            The visionary team behind your extraordinary Sri Lankan adventure.
                        </p>
                    </div>

                    <div className={styles.foundersGrid}>
                        {/* Founder 1 */}
                        <motion.div
                            className={styles.founderCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className={styles.founderHeader}>
                                <div className={styles.founderImgWrapper}>
                                    <Image
                                        src="/images/guide_2.jpeg"
                                        alt="Chandila M Waduge"
                                        fill
                                        style={{ objectFit: "cover", objectPosition: "top" }}
                                    />
                                </div>
                                <div className={styles.founderMeta}>
                                    <span className={styles.founderName}>Chandila M Waduge</span>
                                    <span className={styles.founderRole}>Aviation Professional & Tourism Industry Enthusiast</span>
                                </div>
                            </div>
                            <div className={styles.founderInfo}>
                                <p className={styles.quote}>
                                    "Hello! I’m Chandil Maduhansa, a dedicated travel professional with years of experience in the aviation industry and as a certified tour guide. I have proudly served with SriLankan Airlines and FitsAir Sri Lanka, gaining extensive knowledge in passenger services, flight operations, and travel logistics.
                                    <br /><br />
                                    Combining my airline expertise with a passion for tourism, I help travelers explore Sri Lanka’s beautiful destinations safely, comfortably, and memorably. Let’s make your next adventure extraordinary."
                                </p>
                            </div>
                        </motion.div>

                        {/* Founder 2 */}
                        <motion.div
                            className={styles.founderCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className={styles.founderHeader}>
                                <div className={styles.founderImgWrapper}>
                                    <Image
                                        src="/images/guide_1.jpeg"
                                        alt="Chamara Samanpriya"
                                        fill
                                        style={{ objectFit: "cover", objectPosition: "top" }}
                                    />
                                </div>
                                <div className={styles.founderMeta}>
                                    <span className={styles.founderName}>Chamara Samanpriya</span>
                                    <span className={styles.founderRole}>Co-Founder & Operations Manager</span>
                                </div>
                            </div>
                            <div className={styles.founderInfo}>
                                <p className={styles.quote}>
                                    "Hello! I’m Chamara Samanpriya, Co-Founder of DownsouthLankaTravellers and a dedicated professional responsible for managing daily operations and business development. I play a key role in coordinating tour operations, vehicle management, and customer service.
                                    <br /><br />
                                    With a strong commitment to quality service, I work closely with our team to maintain high standards in transportation and guest support. Together, we are building a trusted name in Sri Lanka’s tourism industry."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
