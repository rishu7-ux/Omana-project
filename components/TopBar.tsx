"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-[#cfd8e8] text-xs md:text-sm">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-5">
          <motion.a
            href="tel:+919217104219"
            className="hidden items-center gap-2 sm:flex"
            whileHover={{ scale: 1.08, y: -2, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <motion.span
              animate={{ x: [0, -2, 2, -2, 2, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            >
              <FaPhoneAlt className="text-orange-400 text-xs" />
            </motion.span>
            +91 92171 04219
          </motion.a>

          <motion.a
            href="mailto:customercare@omanaprojects.com"
            className="hidden items-center gap-2 md:flex"
            whileHover={{ scale: 1.08, y: -2, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <motion.span
              animate={{ x: [0, -2, 2, -2, 2, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                delay: 1.25,
                ease: "easeInOut",
              }}
            >
              <FaEnvelope className="text-orange-400 text-xs" />
            </motion.span>
            customercare@omanaprojects.com
          </motion.a>
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            whileHover={{ scale: 1.35, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-colors"
          >
            <FaFacebookF className="text-white text-sm" />
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            whileHover={{ scale: 1.35, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 transition-colors"
          >
            <FaInstagram className="text-white text-sm" />
          </motion.a>

          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            whileHover={{ scale: 1.35, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition-colors"
          >
            <FaYoutube className="text-white text-sm" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}