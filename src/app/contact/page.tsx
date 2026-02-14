"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/components/css/Contact.module.css";
import contact from "../../../public/images/contact.png";
import { contactConfig } from "@/data/contact";
import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { Loader2 } from "lucide-react";
import SuccessPopup from "@/components/SuccessPopup";

export default function ContactPage() {
    const [sending, setSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { placeholder, value, type } = e.target;
        if (placeholder === "John") setFormData(prev => ({ ...prev, firstName: value }));
        if (placeholder === "Doe") setFormData(prev => ({ ...prev, lastName: value }));
        if (type === "email") setFormData(prev => ({ ...prev, email: value }));
        if (type === "tel") setFormData(prev => ({ ...prev, phone: value }));
        if (e.target.tagName === "TEXTAREA") setFormData(prev => ({ ...prev, message: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        try {
            const subject = `Website Inquiry from ${formData.firstName} ${formData.lastName}`;
            const html = `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Message:</strong></p>
                <p>${formData.message}</p>
            `;

            const result = await sendEmail({
                subject,
                text: `Inquiry from ${formData.firstName} ${formData.lastName}. Email: ${formData.email}. Message: ${formData.message}`,
                html
            });

            if (result.success) {
                setShowSuccess(true);
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            } else {
                alert('Failed to send message. Please try again or reach out via WhatsApp.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Something went wrong. Please try again later.');
        } finally {
            setSending(false);
        }
    };

    return (
        <main style={{ backgroundColor: "#fafafa" }}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.contactHero}>
                <Image
                    src={contact}
                    alt="Contact Us"
                    fill
                    style={{ objectFit: "cover", opacity: 0.6 }}
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroContent}>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.container}>
                <div className={styles.grid}>

                    {/* Inquiry Form */}
                    <motion.div
                        className={styles.formCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ gridColumn: "1 / -1", maxWidth: "800px", margin: "0 auto", width: "100%" }}
                    >
                        <h3 className={styles.formTitle}>Send an Inquiry</h3>
                        <p className={styles.formSubtitle}>Fill out the form below and our travel experts will get back to you within 24 hours.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>First Name</label>
                                    <input type="text" required disabled={sending} className={styles.input} placeholder="John" value={formData.firstName} onChange={handleChange} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Last Name</label>
                                    <input type="text" required disabled={sending} className={styles.input} placeholder="Doe" value={formData.lastName} onChange={handleChange} />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email Address</label>
                                <input type="email" required disabled={sending} className={styles.input} placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Phone Number</label>
                                <input type="tel" disabled={sending} className={styles.input} placeholder={contactConfig.phones[0].value} value={formData.phone} onChange={handleChange} />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Message / Tour Interest</label>
                                <textarea required disabled={sending} className={styles.textarea} placeholder="Tell us about your travel plans, dates, and interests..." value={formData.message} onChange={handleChange}></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn} disabled={sending}>
                                {sending ? <Loader2 className="animate-spin" size={20} /> : null}
                                {sending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>

                </div>

                {/* Location Map */}
                <motion.div
                    className={styles.mapSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className={styles.mapTitle}>Find Us</h2>
                    <div className={styles.mapContainer}>
                        <iframe
                            src={contactConfig.googleMapsEmbed}
                            className={styles.mapFrame}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Downsouth Lanka Office Location"
                        ></iframe>
                    </div>
                </motion.div>

            </section>

            <Footer />

            <SuccessPopup
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                message="Thank you! Your message has been sent directly to our team. We will get back to you within 24 hours."
            />
        </main>
    );
}
