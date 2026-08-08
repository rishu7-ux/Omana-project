"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function BlogHero() {
  const { scrollY } = useScroll();

  // Background image moves slower than page scroll
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="relative h-105 overflow-hidden">

      {/* Moving Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/images/blog/hero.jpg"
          alt="Blog Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-orange-400">
            Latest News
          </p>

          <h1 className="text-6xl font-extrabold">
            Blog
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500"></div>

          <div className="mt-8 flex items-center justify-center gap-3">

            <Link
              href="/"
              className="flex items-center gap-2 transition hover:text-orange-400"
            >
              <FaHome />
              Home
            </Link>

            <FaChevronRight />

            <span className="font-semibold text-orange-400">
              Blog
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}