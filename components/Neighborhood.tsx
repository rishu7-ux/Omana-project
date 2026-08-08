"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const areas = [
  {
    name: "NOIDA",
    properties: "04 Properties",
    image: "/images/noida.png",
  },
  {
    name: "GUJARAT",
    properties: "04 Properties",
    image: "/images/gujarat.png",
  },
  {
    name: "GREATER NOIDA",
    properties: "08 Properties",
    image: "/images/noida.png",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Neighborhood() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading — matches Features/Categories style */}
        <div className="mb-14 text-center">
          <motion.p
            className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#FF9800]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Top Areas
          </motion.p>

          <motion.h2
            className="text-3xl font-extrabold text-[#081A3A] md:text-5xl"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Find Your Neighborhood
          </motion.h2>

          <motion.div
            className="mx-auto mt-5 h-1 rounded-full bg-[#FF9800]"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {areas.map((area) => (
            <motion.div
              key={area.name}
              variants={item}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.35 }}
              className="group cursor-pointer overflow-hidden rounded-2xl border-b-4 border-[#FF9800] bg-white shadow-md"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  sizes="(max-width:768px)100vw,33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Property badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-md">
                  <FaMapMarkerAlt className="text-[#FF9800]" size={11} />
                  <span className="text-xs font-bold text-[#081A3A]">
                    {area.properties}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="mb-3 text-xl font-bold text-[#081A3A] transition-colors duration-300 group-hover:text-[#003BB0]">
                  {area.name}
                </h3>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-[#003BB0] transition-all duration-300 hover:text-[#FF9800]"
                >
                  Explore Area
                  <motion.span
                    className="inline-flex"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaArrowRight size={13} />
                  </motion.span>
                </a>

                {/* Animated line — matches Features cards */}
                <motion.div
                  className="mt-6 h-1 rounded-full bg-[#FF9800]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}