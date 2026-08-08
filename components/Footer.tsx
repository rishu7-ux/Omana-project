"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Mission & Vision", href: "/mission-vision" },
  { label: "Director Message", href: "/director-message" },
  { label: "News & Events", href: "/news" },
 
];

const propertyLinks = [
  { label: "Residential Plots", href: "/residential-plots" },
  { label: "Industrial Plots", href: "/industrial-plots" },
  { label: "Mixed Use", href: "/mixed-use" },
  { label: "Plot For Buy", href: "/plot-for-buy" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#050816] text-[#B9C2D3]">
      {/* Top Divider */}
      <div className="absolute left-0 top-0 w-full">
        <div className="h-px bg-white/10" />
        <div className="mx-auto h-1 w-40 rounded-full bg-linear-to-r from-[#2563EB] via-[#FF7A59] to-[#2563EB]" />
      </div>

      {/* Desktop Back To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className="group absolute right-0 top-1/2 hidden -translate-y-1/2 border border-r-0 border-white/10 bg-[#0B0F24] px-2 py-4 md:flex"
      >
        <span
          style={{ writingMode: "vertical-rl" }}
          className="text-[11px] font-bold uppercase tracking-[3px] text-white transition group-hover:text-[#FF7A59]"
        >
          Back Top
        </span>
      </button>

      {/* Mobile Back To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#FF5A2C] text-white shadow-lg transition active:scale-90 md:hidden"
      >
        <FaArrowUp size={16} />
      </button>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-9 border-b border-white/10 pb-9 text-center sm:gap-10 sm:pb-12 md:grid-cols-3 md:text-left"
        >
          {/* Left */}
          <motion.div
            variants={item}
            className="flex flex-col items-center md:items-start"
          >
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Omana Projects"
                width={150}
                height={54}
                className="mb-6 h-auto w-auto sm:mb-8"
                priority
              />
            </Link>

            <a
              href="tel:+919217104219"
              className="mb-4 flex items-center justify-center gap-3 text-sm transition hover:text-white sm:text-base md:justify-start"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#FF5A2C] sm:h-10 sm:w-10">
                <FaPhoneAlt size={13} />
              </span>

              <span>+91 92171 04219</span>
            </a>

            <a
              href="mailto:customercare@omanaprojects.com"
              className="mb-4 flex items-center justify-center gap-3 text-sm transition hover:text-white sm:text-base md:justify-start"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#FF5A2C] sm:h-10 sm:w-10">
                <FaEnvelope size={13} />
              </span>

              <span className="max-w-52.5 wrap-break-word text-left sm:max-w-none">
                customercare@omanaprojects.com
              </span>
            </a>

            <div className="flex items-start justify-center gap-3 md:justify-start">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#FF5A2C] sm:h-10 sm:w-10">
                <FaMapMarkerAlt size={13} />
              </span>

              <p className="max-w-65 text-left text-sm leading-6 text-gray-300 sm:max-w-none sm:text-base sm:leading-7">
                7th Floor, Plot No. 56A/16,
                <br />
                C Block, Phase 2,
                <br />
                Industrial Area,
                <br />
                Sector 62, Noida,
                <br />
                Uttar Pradesh 201309
              </p>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={item}>
            <h2 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              Our Company
            </h2>

            <ul className="space-y-2.5 sm:space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-[#FF7A59] sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Properties */}
          <motion.div variants={item}>
            <h2 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
              Our Properties
            </h2>

            <ul className="space-y-2.5 sm:space-y-4">
              {propertyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-[#FF7A59] sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-between gap-3 pt-6 sm:gap-4 sm:pt-8 md:flex-row"
        >
          <p className="text-center text-xs text-gray-400 sm:text-sm md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#FF5A2C]">
              OMANA PROJECTS
            </span>{" "}
            All Rights Reserved.
          </p>

         
        </motion.div>
      </div>
    </footer>
  );
}