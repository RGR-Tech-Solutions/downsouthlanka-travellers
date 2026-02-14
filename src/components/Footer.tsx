"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./css/Footer.module.css";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { contactConfig } from "@/data/contact";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.grid} container`}>
                <div className={styles.logoArea}>
                    <div className={styles.logo}>
                        <Image src="/logo.jpg" alt="Logo" width={60} height={60} style={{ borderRadius: "50%" }} />
                        <div className={styles.logoText}>
                            DOWNSOUTH<br /><span>LANKA TRAVELLERS</span>
                        </div>
                    </div>
                    <p className={styles.aboutText}>
                        Your premium gateway to the wonders of Sri Lanka. We specialize in providing unforgettable experiences,
                        reliable transport, and deep local insights across the Southern coast and beyond.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href={contactConfig.socials.facebook} target="https://www.facebook.com/share/1WkfqPp4ru/?mibextid=wwXIfr" rel="noopener noreferrer" className={styles.socialIcon}><Facebook size={18} /></a>
                        <a href={contactConfig.socials.instagram} target="https://www.instagram.com/downsouth_travellers?igsh=MTc3Ym04ZzFkNGx2dw%3D%3D&utm_source=qr" rel="noopener noreferrer" className={styles.socialIcon}><Instagram size={18} /></a>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <div className={styles.links}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/tours" className={styles.link}>Tour Packages</Link>
                        <Link href="/#transport" className={styles.link}>Our Fleet</Link>
                        <Link href="/about" className={styles.link}>About Us</Link>
                        <Link href="/#reviews" className={styles.link}>Reviews</Link>
                        <Link href="/gallery" className={styles.link}>Captured Moments</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Destinations</h4>
                    <div className={styles.links}>
                        <span className={styles.link}>Galle Fort</span>
                        <span className={styles.link}>Mirissa Beach</span>
                        <span className={styles.link}>Yala Safari</span>
                        <span className={styles.link}>Ella Highlands</span>
                        <span className={styles.link}>Kandy Culture</span>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Contact Us</h4>
                    <div className={styles.contactItem}>
                        <MapPin size={20} />
                        <span>{contactConfig.address.line1}<br />{contactConfig.address.line2}</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Phone size={20} />
                        <span>
                            {contactConfig.phones.map((phone, i) => (
                                <React.Fragment key={i}>
                                    <a href={`tel:${phone.value.replace(/\s/g, '')}`}>{phone.value}</a>
                                    {i < contactConfig.phones.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </span>
                    </div>
                    <div className={styles.contactItem}>
                        <Mail size={20} />
                        <span>
                            {contactConfig.emails.map((email, i) => (
                                <React.Fragment key={i}>
                                    <a href={`mailto:${email.value}`}>{email.value}</a>
                                    {i < contactConfig.emails.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </span>
                    </div>
                </div>
            </div>

            <div className={`container ${styles.bottom}`}>
                <div>&copy; {new Date().getFullYear()} RGR Tech Solutions. All Rights Reserved.</div>
                <div className={styles.bottomLinks}>
                    <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
                    <Link href="/terms" className={styles.link}>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
