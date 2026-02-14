"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Send, CheckCircle, MessageSquare, X, Plus, ChevronLeft, ChevronRight, Upload, User, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./css/Reviews.module.css";
import { reviews as initialReviews, Review } from "@/data/reviews";
import { sendEmail } from "@/app/actions/sendEmail";
import SuccessPopup from "./SuccessPopup";

export default function Reviews() {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [formData, setFormData] = useState<{
        name: string;
        country: string;
        rating: number;
        comment: string;
        avatar: string | null;
    }>({
        name: "",
        country: "",
        rating: 5,
        comment: "",
        avatar: null
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const itemsPerPage = isMobile ? 2 : 3;
    const totalPages = Math.ceil(reviews.length / itemsPerPage);

    // Responsive check
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            setActiveIndex(0);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Auto-move logic
    useEffect(() => {
        if (isPaused || isModalOpen) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, [isPaused, isModalOpen, totalPages, activeIndex]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }
        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const subject = `New Review from ${formData.name}`;
        const text = `
      Name: ${formData.name}
      Country: ${formData.country}
      Rating: ${formData.rating} Stars
      Comment: ${formData.comment}
    `;
        const html = `
      <h2>New Website Review</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Country:</strong> ${formData.country}</p>
      <p><strong>Rating:</strong> ${formData.rating} Stars</p>
      <p><strong>Comment:</strong> ${formData.comment}</p>
    `;

        const attachments = formData.avatar ? [{
            filename: `avatar-${Date.now()}.png`,
            path: formData.avatar
        }] : [];

        try {
            await sendEmail({ subject, text, html, attachments });

            setIsModalOpen(false);
            setShowSuccessPopup(true);
            setFormData({ name: "", country: "", rating: 5, comment: "", avatar: null });
            setActiveIndex(0);
        } catch (error) {
            console.error("Error submitting review:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Check for reasonable limit (20MB)
            if (file.size > 20 * 1024 * 1024) {
                alert("Image size should be less than 20MB");
                return;
            }

            try {
                // Compress image
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    const img = document.createElement("img");
                    img.src = event.target?.result as string;
                    img.onload = () => {
                        const canvas = document.createElement("canvas");
                        const MAX_WIDTH = 400; // Resize to smaller size for avatars
                        const MAX_HEIGHT = 400;
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH;
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext("2d");
                        ctx?.drawImage(img, 0, 0, width, height);

                        // Compress to JPEG with 0.4 quality (drastically reduces size)
                        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.4);
                        setFormData(prev => ({ ...prev, avatar: compressedBase64 }));
                    };
                };
            } catch (error) {
                console.error("Error processing image:", error);
                alert("Error processing image. Please try another one.");
            }
        }
    };

    const removePhoto = () => {
        setFormData(prev => ({ ...prev, avatar: null }));
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const getTranslateX = () => {
        if (isMobile) {
            return `calc(-${activeIndex * 100}% - ${activeIndex * 8}px)`;
        }
        return `calc(-${activeIndex * 100}% - ${activeIndex * 2}rem)`;
    };

    return (
        <section
            id="reviews"
            className={styles.reviewsSection}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container">
                <div className={styles.header}>
                    <h2 className="section-title">What Our Travellers Say</h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Real stories from real travelers who have experienced the magic of
                        Sri Lanka with us.
                    </p>
                </div>

                <div className={styles.sliderWrapper}>
                    <button className={styles.navPrev} onClick={prevSlide} aria-label="Previous page">
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.sliderContainer}>
                        <motion.div
                            className={styles.track}
                            animate={{ x: getTranslateX() }}
                            transition={{ type: "spring", damping: 40, stiffness: 150 }}
                        >
                            {reviews.map((review) => (
                                <div key={review.id} className={styles.slide}>
                                    <div className={styles.reviewCard}>
                                        <div className={styles.reviewerInfo}>
                                            {review.avatar && (
                                                <div className={styles.avatarWrapper}>
                                                    <Image
                                                        src={review.avatar}
                                                        alt={review.name}
                                                        width={60}
                                                        height={60}
                                                        className={styles.avatar}
                                                    />
                                                </div>
                                            )}
                                            <div className={styles.reviewerDetails}>
                                                <h4 className={styles.name}>{review.name}</h4>
                                                <p className={styles.country}>{review.country}</p>
                                            </div>
                                        </div>

                                        <div className={styles.rating}>
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    fill={i < review.rating ? "currentColor" : "none"}
                                                    stroke={i < review.rating ? "none" : "currentColor"}
                                                />
                                            ))}
                                        </div>

                                        <p className={styles.comment}>"{review.comment}"</p>
                                        <p className={styles.date}>{review.date}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <button className={styles.navNext} onClick={nextSlide} aria-label="Next page">
                        <ChevronRight size={24} />
                    </button>

                    <div className={styles.dots}>
                        {[...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ""}`}
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Go to page ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.ctaWrapper}>
                    <button
                        className={styles.openModalBtn}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Share Your Experience <Plus size={20} />
                    </button>
                </div>

                <AnimatePresence>
                    {isModalOpen && (
                        <div className={styles.modalBackdrop}>
                            <motion.div
                                className={styles.modalContent}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            >
                                <button
                                    className={styles.closeBtn}
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    <X size={20} />
                                </button>

                                <div className={styles.formTitle}>
                                    <MessageSquare size={32} style={{ color: "var(--primary)", marginBottom: "1rem" }} />
                                    <h3>Share Your Experience</h3>
                                    <p style={{ fontSize: "0.95rem", color: "var(--muted)", fontWeight: "400" }}>
                                        We'd love to hear about your journey with us.
                                    </p>
                                </div>

                                <div className={styles.uploadSection}>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        className={styles.hiddenInput}
                                    />
                                    <div className={styles.avatarUploadWrapper}>
                                        {formData.avatar ? (
                                            <div className={styles.previewContainer}>
                                                <Image
                                                    src={formData.avatar}
                                                    alt="Preview"
                                                    width={80}
                                                    height={80}
                                                    className={styles.avatarPreview}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={removePhoto}
                                                    className={styles.removePhotoBtn}
                                                    title="Remove photo"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => fileInputRef.current?.click()}
                                                className={styles.uploadTrigger}
                                            >
                                                <div className={styles.uploadIconCircle}>
                                                    <Upload size={20} />
                                                </div>
                                                <span>Upload Profile Photo</span>
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className={styles.input}
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Country</label>
                                        <input
                                            type="text"
                                            required
                                            className={styles.input}
                                            placeholder="United Kingdom"
                                            value={formData.country}
                                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Rating</label>
                                        <select
                                            className={styles.select}
                                            value={formData.rating}
                                            onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                        >
                                            <option value="5">5 Stars - Excellent</option>
                                            <option value="4">4 Stars - Very Good</option>
                                            <option value="3">3 Stars - Good</option>
                                            <option value="2">2 Stars - Fair</option>
                                            <option value="1">1 Star - Poor</option>
                                        </select>
                                    </div>
                                    <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                                        <label className={styles.label}>Your Review</label>
                                        <textarea
                                            required
                                            className={styles.textarea}
                                            style={{ minHeight: '100px', height: '100px' }}
                                            placeholder="Tell us about your trip..."
                                            value={formData.comment}
                                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <div className={styles.formGroupFull}>
                                        <button
                                            type="submit"
                                            className={styles.submitBtn}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    Submit Review <Send size={18} />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <SuccessPopup
                    isOpen={showSuccessPopup}
                    onClose={() => setShowSuccessPopup(false)}
                    title="Thank You!"
                    message="Thank you! We have received your review. We will verify and upload it to the website soon."
                />
            </div>
        </section>
    );
}
