"use client";

import Image from "next/image";
import { FaHome, FaEye, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const visionPoints = [
  {
    title: "Smart Investment",
    description:
      "Empowering investors with verified opportunities that generate long-term value in Dholera SIR.",
  },
  {
    title: "Innovation",
    description:
      "Supporting India's first Greenfield Smart City through modern infrastructure and sustainable development.",
  },
  {
    title: "Transparency",
     description:
      "Building trust with complete legal documentation, ethical business practices and customer-first service.",
  },
];

export default function VisionSection() {
  return (
    <section className="bg-[#f8fbff] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="absolute -left-6 -top-6 h-full w-full rounded-[35px] border-4 border-orange-500"></div>

            <motion.div
              whileHover={{
                scale: 1.04,
                rotate: -1,
              }}
              className="relative overflow-hidden rounded-[35px] shadow-2xl"
            >

              <Image
                src="/images/vision.jpg"
                alt="Vision"
                width={700}
                height={800}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />

            </motion.div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <div className="mb-4 flex items-center gap-2 text-orange-500">
              <FaHome />

              <span className="text-sm font-bold uppercase tracking-[3px]">
                Our Vision
              </span>
            </div>

            <h2 className="mb-8 text-5xl font-extrabold text-navy">
              Building The Future
            </h2>

            <div className="mb-8 h-1 w-24 rounded-full bg-orange-500"></div>

            <p className="mb-10 text-lg leading-9 text-gray-600">
              Our vision is to become India&apos;s most trusted real estate company
              by providing premium investment opportunities in Dholera Smart
              City while maintaining complete transparency, innovation and
              customer satisfaction.
            </p>

            <div className="space-y-8">

              {visionPoints.map((item, index) => (

                <motion.div
                  key={index}
                  className="flex gap-6 rounded-2xl bg-white p-6 shadow-lg"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.8,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl text-orange-500">

                    <FaEye />

                  </div>

                  <div>

                    <h3 className="mb-2 text-2xl font-bold text-navy">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="mt-10 flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-navy transition"
            >
              Explore More
              <FaArrowRight />
            </motion.button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}