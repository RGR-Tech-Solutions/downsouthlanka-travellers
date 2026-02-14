"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/Navbar.module.css";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInquiryModal } from "@/context/InquiryModalContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { openModal } = useInquiryModal();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when a link is clicked
    const closeMenu = () => setMobileMenuOpen(false);

    const handleEnquireClick = (e: React.MouseEvent) => {
        e.preventDefault();
        openModal();
        closeMenu();
    };

    const navLinks = [
        { name: "Home", href: "/#" },
        { name: "Tours", href: "/tours" },
        { name: "Transport", href: "/#transport" },
        { name: "About", href: "/about" },
        { name: "Reviews", href: "/#reviews" },
        { name: "Captured Moments", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${mobileMenuOpen ? styles.open : ""}`}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image
                        src="/logo.jpg"
                        alt="Downsouth Lanka Travellers"
                        width={50}
                        height={50}
                        className={styles.logoImg}
                    />
                    <div className={styles.logoText}>
                        DOWNSOUTH<span>LANKA TRAVELLERS</span>
                    </div>
                </Link>

                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.navLink}>
                            {link.name}
                        </Link>
                    ))}
                    <button className={styles.cta} onClick={openModal}>Enquire Now</button>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.mobileMenuLinks}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={styles.mobileNavLink}
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className={styles.mobileCta} onClick={handleEnquireClick}>Enquire Now</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
