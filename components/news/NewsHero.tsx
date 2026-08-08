"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaChevronRight } from "react-icons/fa";

export default function NewsHero() {
  return (
    <section className="relative h-105 overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/news/hero.jpg"
        alt="News & Events"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-20 top-20 h-28 w-28 rounded-full bg-orange-500/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-20 bottom-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center text-white"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-orange-400">
            Latest Updates
          </p>

          <h1 className="text-5xl font-extrabold md:text-7xl">
            News & Events
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-1 rounded-full bg-orange-500"
          />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/90">
            Stay updated with the latest news, industrial developments,
            government announcements, infrastructure projects and events
            related to Dholera Special Investment Region.
          </p>

          {/* Breadcrumb */}

          <div className="mt-10 flex items-center justify-center gap-3 text-lg">

            <Link
              href="/"
              className="flex items-center gap-2 transition hover:text-orange-400"
            >
              <FaHome />
              Home
            </Link>

            <FaChevronRight />

            <span className="font-semibold text-orange-400">
              News & Events
            </span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}