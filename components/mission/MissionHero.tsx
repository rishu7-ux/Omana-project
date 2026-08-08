"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MissionHero() {
  return (
    <section className="relative h-125 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/mission-banner.jpg"
        alt="Mission & Vision"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-6 text-6xl font-extrabold">
            Mission & Vision
          </h1>

          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <FaHome />

            <Link href="/" className="hover:text-orange-400">
              Home
            </Link>

            <span>/</span>

            <span className="text-orange-400">
              Mission & Vision
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}