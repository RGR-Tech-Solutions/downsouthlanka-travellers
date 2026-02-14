"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import styles from "./css/SuccessPopup.module.css";

interface SuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message: string;
}

export default function SuccessPopup({ isOpen, onClose, title = "Thank You!", message }: SuccessPopupProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={styles.successCard}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.iconWrapper}>
                            <Check size={40} strokeWidth={3} />
                        </div>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.message}>
                            {message}
                        </p>
                        <button onClick={onClose} className={styles.closeBtn}>
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
