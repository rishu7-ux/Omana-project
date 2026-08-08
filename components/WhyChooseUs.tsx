"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const reasons = [
  {
    icon: "💰",
    title: "Budget Friendly",
    description:
      "Properties are budget friendly so you have the opportunity to find the best investment for your future.",
  },
  {
    icon: "📍",
    title: "Prime Location",
    description:
      "Prime locations offer excellent connectivity, growing infrastructure, and high investment potential.",
  },
  {
    icon: "👥",
    title: "Trusted by Thousands",
    description:
      "With years of experience, we provide trusted guidance and complete transparency in every project.",
  },
];

// Left content slides in from the left
const fromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Right image slides in from the right
const fromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

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
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fromLeft}
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[4px] text-[#FF9800]">
            WHY CHOOSE US
          </p>

          <h2 className="mb-5 text-4xl font-extrabold text-[#081A3A]">
            Your Perfect Property Awaits
          </h2>

          <p className="mb-8 leading-8 text-gray-600">
            A huge number of premium residential, industrial and commercial
            properties are available for buying and investment. Find your dream
            property with confidence and expert guidance.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={item}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                className="group flex gap-5 rounded-xl p-4 transition-all duration-500 hover:bg-orange-50 hover:shadow-lg"
              >
                <motion.div
                  whileHover={{
                    rotate: 12,
                    scale: 1.15,
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl"
                >
                  {reason.icon}
                </motion.div>

                <div>
                  <h3 className="mb-2 text-lg font-bold text-[#081A3A]">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative h-87.5 overflow-hidden rounded-3xl shadow-2xl lg:h-137.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fromRight}
        >
          <Image
            src="/images/8.jpg"
            alt="Why Choose Us"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover transition-all duration-700 hover:scale-110"
          />
        </motion.div>

      </div>
    </section>
  );
}