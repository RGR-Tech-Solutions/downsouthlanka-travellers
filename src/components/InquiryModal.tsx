"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import styles from './css/InquiryModal.module.css';
import { useInquiryModal } from '@/context/InquiryModalContext';
import { contactConfig } from '@/data/contact';
import { sendEmail } from '@/app/actions/sendEmail';
import SuccessPopup from './SuccessPopup';

const InquiryModal: React.FC = () => {
    const { isOpen, closeModal } = useInquiryModal();
    const [sending, setSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'tours',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        try {
            const subject = `New Inquiry: ${formData.service.toUpperCase()} - ${formData.name}`;
            const body = `
                <h2>New Website Inquiry</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Service:</strong> ${formData.service}</p>
                <p><strong>Message:</strong></p>
                <p>${formData.message}</p>
            `;

            const result = await sendEmail({
                subject,
                text: `Inquiry from ${formData.name}. Service: ${formData.service}. Message: ${formData.message}`,
                html: body
            });

            if (result.success) {
                closeModal();
                setFormData({ name: '', email: '', phone: '', service: 'tours', message: '' });
                setTimeout(() => setShowSuccess(true), 300);
            } else {
                alert('Failed to send inquiry. Please try again or contact us via WhatsApp.');
            }
        } catch (error) {
            console.error('Email sending error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setSending(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div className={styles.overlay} onClick={closeModal}>
                        <motion.div
                            className={styles.modal}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={closeModal}>
                                <X size={20} />
                            </button>

                            <div className={styles.header}>
                                <h2>Send an Inquiry</h2>
                                <p>Fill out the form below and we&apos;ll get back to you.</p>
                            </div>

                            <div className={styles.formContainer}>
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                disabled={sending}
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                disabled={sending}
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                disabled={sending}
                                                placeholder={contactConfig.phones[0].value}
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Subject</label>
                                            <select
                                                name="service"
                                                disabled={sending}
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option value="tours">Tour Packages</option>
                                                <option value="transport">Transport Service</option>
                                                <option value="custom">Custom Itinerary</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            required
                                            disabled={sending}
                                            placeholder="Tell us about your travel plans..."
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className={styles.submitBtn} disabled={sending}>
                                        {sending ? (
                                            <Loader2 size={18} className="animate-spin" />
                                        ) : (
                                            <Send size={18} />
                                        )}
                                        {sending ? 'Sending...' : 'Send Inquiry'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <SuccessPopup
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                message="Thank you! Your inquiry has been sent directly to our team. We'll get back to you soon!"
            />
        </>
    );
};

export default InquiryModal;
