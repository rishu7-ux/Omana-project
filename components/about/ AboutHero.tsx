"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <motion.section
      className="relative h-105 overflow-hidden md:h-130"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/about-banner.jpg"
          alt="About Omana Projects"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="text-center text-white">

          {/* Small Heading */}
          <motion.p
            className="mb-4 text-sm font-bold uppercase tracking-[5px] text-orange-400"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            Welcome To Omana Projects
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl font-extrabold md:text-7xl"
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
          >
            About Us
          </motion.h1>

          {/* Animated Line */}
          <motion.div
            className="mx-auto mt-6 h-1 rounded-full bg-orange-500"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
          />

          {/* Breadcrumb */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-3 text-lg"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 transition duration-300 hover:text-orange-400"
            >
              <FaHome />
              Home
            </Link>

            <FaChevronRight className="text-sm" />

            <span className="font-semibold text-orange-400">
              About Us
            </span>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}