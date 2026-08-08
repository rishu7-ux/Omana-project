"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

type Category = {
  label: string;
  title: string;
  description: string;
  color: string;
  image: string;
  href: string;
};

const categories: Category[] = [
  {
    label: "Logistic",
    title: "Dholera Logistic Plot",
    description:
      "Strategically located plots for warehouses, distribution centers and logistics parks.",
    color: "bg-[#003BB0]",
    image: "/images/p4.jpeg",
    href: "#",
  },
  {
    label: "Residential",
    title: "Dholera Residential Plot",
    description:
      "Well-planned residential plots in prime locations for your dream home.",
    color: "bg-[#16A34A]",
    image: "/images/dholera-industrial-plot.jpg",
    href: "#",
  },
  {
    label: "Industrial",
    title: "Dholera Industrial Plot",
    description:
      "Industrial plots for factories, plants and large-scale business operations.",
    color: "bg-[#7C3AED]",
    image: "/images/gujarat.png",
    href: "#",
  },
  {
    label: "Mixed Use",
    title: "Dholera Mixed Use Plot",
    description:
      "Mixed-use developments for commercial and residential investment opportunities.",
    color: "bg-[#FF9800]",
    image: "/images/mixed.jpeg",
    href: "#",
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

export default function Categories() {
  return (
    <motion.section
      className="relative overflow-hidden bg-white py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.p
            className="mb-3 text-sm font-bold uppercase tracking-[4px] text-brand-orange"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            OUR CATEGORIES
          </motion.p>

          <motion.h2
            className="text-4xl font-extrabold text-navy md:text-5xl"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            Explore Premium Projects
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-lg text-gray-600"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Discover premium investment opportunities in Dholera with
            residential, commercial, industrial and logistics developments.
          </motion.p>

          <motion.div
            className="mx-auto mt-6 h-1 rounded-full bg-brand-orange"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
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
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={item}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                {/* Badge */}
                <span
                  className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white ${cat.color}`}
                >
                  {cat.label}
                </span>

                {/* Title */}
                <div className="absolute bottom-6 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-6 leading-7 text-gray-600">
                  {cat.description}
                </p>

                <a
                  href={cat.href}
                  className="inline-flex items-center gap-2 font-semibold text-brand-blue transition-all duration-300 hover:text-[#FF9800]"
                >
                  Explore Now

                  <motion.span
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </a>

                <motion.div
                  className="mt-5 h-1 rounded-full bg-brand-orange"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}