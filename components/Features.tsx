"use client";

import { motion, Variants } from "framer-motion";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "📍",
    title: "Prime Location",
    description:
      "The core feature of any real estate property is its location. It could be in a prime area with excellent connectivity.",
  },

  {
    icon: "🏠",
    title: "Modern Living",
    description:
      "High-quality construction, premium materials, and contemporary architecture for a comfortable lifestyle.",
  },

  {
    icon: "🌿",
    title: "Eco Friendly",
    description:
      "Green spaces, energy-efficient designs, and environmentally friendly infrastructure for sustainable living.",
  },

  {
    icon: "💡",
    title: "Modern Technology",
    description:
      "Smart home features, high-speed internet, and integrated digital technologies for convenience.",
  },

  {
    icon: "📶",
    title: "Easy Accessibility",
    description:
      "Close to schools, hospitals, shopping centers, airports, and public transportation.",
  },
  {
    icon: "🛡️",
    title: "24/7 Security",
    description:
      "Gated communities with CCTV surveillance, security personnel, and modern access control systems.",
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

export default function Features() {
  return (
    <motion.section
      className="bg-[#F8FAFC] py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Heading */}
        <div className="mb-14 text-center">

          <motion.p
            className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#FF9800]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Core Features
          </motion.p>

          <motion.h2
            className="text-3xl font-extrabold text-[#081A3A] md:text-5xl"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            Core Feature Facility
          </motion.h2>

          <motion.div
            className="mx-auto mt-5 h-1 rounded-full bg-[#FF9800]"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
          />

        </div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                duration: 0.35,
              }}
              className="group cursor-pointer overflow-hidden rounded-2xl border-b-4 border-[#FF9800] bg-white p-7 shadow-md"
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.15,
                }}
                transition={{ duration: 0.4 }}
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-4xl group-hover:bg-[#003BB0]"
              >
                <span className="transition duration-300 group-hover:scale-125">
                  {feature.icon}
                </span>
              </motion.div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-[#081A3A] transition-colors duration-300 group-hover:text-[#003BB0]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="leading-7 text-gray-600">
                {feature.description}
              </p>

              {/* Animated Line */}
              <motion.div
                className="mt-6 h-1 rounded-full bg-[#FF9800]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}