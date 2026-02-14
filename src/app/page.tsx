"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tours from "@/components/Tours";
import Transport from "@/components/Transport";
import Reviews from "@/components/Reviews";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import aboutImage from "../../public/images/about.png";
import { Sun, Briefcase, Wallet, Heart } from "lucide-react";
import { useInquiryModal } from "@/context/InquiryModalContext";

import pageStyles from "./page.module.css";

export default function Home() {
  const { openModal } = useInquiryModal();

  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <Tours />
      <Transport />
      <Reviews />

      {/* About Section - Brief in-page section */}
      <section id="about" className="section" style={{ background: "white" }}>
        <div className={`container ${pageStyles.aboutGrid}`}>
          <div className={pageStyles.aboutContent}>
            <h2 className="section-title">The Downsouth Story</h2>
            <p>
              Born from a passion for showing the true essence of Sri Lanka&apos;s southern charm,
              Downsouth Lanka Travellers has grown into a premier travel partner.
              We believe travel is about more than just seeing places—it&apos;s about the stories you tell
              and the connections you make.
            </p>
            <p style={{ marginBottom: "2.5rem" }}>
              Our dedicated team of professionals ensures that every journey is crafted with care,
              combining luxury with authenticity. Whether you&apos;re exploring the ancient ramparts of Galle Fort
              or chasing sunsets in Mirissa, we are with you every step of the way.
            </p>
            <Link href="/about">
              <button className="btn-primary">Learn More About Us</button>
            </Link>
          </div>
          <div className={pageStyles.aboutImageWrapper}>
            <Image
              src={aboutImage}
              alt="About Us"
              fill
              style={{
                objectFit: "cover",
                transform: "scale(1.05)" // Zoom in to crop out the black borders
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Travel Tips/Guide Section */}
      <section className="section" style={{ background: "var(--light-gray)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2 className="section-title">Traveller&apos;s Guide</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Practical information to help you prepare for your Sri Lankan adventure.</p>
          </div>

          <div className={pageStyles.guideGrid}>
            <div className={pageStyles.guideCard}>
              <div className={pageStyles.guideHeader}>
                <div className={pageStyles.guideIcon}>
                  <Sun size={24} />
                </div>
                <h4 className={pageStyles.guideTitle}>Best Time to Visit</h4>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6" }}>
                The West and South coast are best from **December to April**, while the East coast shines from **May to September**.
              </p>
            </div>

            <div className={pageStyles.guideCard}>
              <div className={pageStyles.guideHeader}>
                <div className={pageStyles.guideIcon}>
                  <Briefcase size={24} />
                </div>
                <h4 className={pageStyles.guideTitle}>Visa & Entry</h4>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6" }}>
                Most travellers need an ETA (Electronic Travel Authorization) which can be easily applied for online before arrival.
              </p>
            </div>

            <div className={pageStyles.guideCard}>
              <div className={pageStyles.guideHeader}>
                <div className={pageStyles.guideIcon}>
                  <Wallet size={24} />
                </div>
                <h4 className={pageStyles.guideTitle}>Currency</h4>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6" }}>
                The local currency is the Sri Lankan Rupee (LKR). ATMs are widely available, and credit cards are accepted in major hotels.
              </p>
            </div>

            <div className={pageStyles.guideCard}>
              <div className={pageStyles.guideHeader}>
                <div className={pageStyles.guideIcon}>
                  <Heart size={24} />
                </div>
                <h4 className={pageStyles.guideTitle}>Local Culture</h4>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.6" }}>
                Sri Lankans are incredibly warm and hospitable. Remember to dress modestly when visiting sacred Buddhist temples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section" style={{ background: "var(--primary)", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1.5rem" }}>Ready to Plan Your Island Getaway?</h2>
          <p style={{ fontSize: "1.25rem", opacity: "0.9", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem" }}>
            Get in touch with our travel experts today and let us help you create the perfect itinerary for your Sri Lankan adventure.
          </p>
          <div className={pageStyles.ctaButtons}>
            <Link href="/contact">
              <button className="btn-outline-white">Contact Us</button>
            </Link>
            <button className="btn-white" onClick={openModal}>Get a Quote</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
