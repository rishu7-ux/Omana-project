"use client";

import Image from "next/image";
import { FaHome, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const missionPoints = [
  "Provide verified industrial plots in Dholera SIR.",
  "Offer transparent legal documentation and complete support.",
  "Deliver end-to-end investment solutions.",
  "Help investors build long-term wealth through smart investments.",
  "Maintain integrity, professionalism and customer satisfaction.",
];

export default function MissionSection() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="mb-4 flex items-center gap-3 text-orange-500">
              <FaHome className="text-xl" />

              <span className="text-sm font-bold uppercase tracking-[4px]">
                Mission
              </span>
            </div>

            <h2 className="mb-6 text-5xl font-extrabold text-navy">
              Our Mission
            </h2>

            <div className="mb-10 h-1 w-24 rounded-full bg-orange-500"></div>

            <p className="mb-10 text-lg leading-9 text-gray-600">
              Our mission is to provide trusted investment opportunities
              through verified industrial and commercial properties while
              maintaining transparency, professionalism and long-term customer
              relationships.
            </p>

            <ul className="space-y-6">
              {missionPoints.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.7,
                  }}
                >
                  <div className="mt-1">
                    <FaCheckCircle className="text-2xl text-orange-500" />
                  </div>

                  <p className="text-lg leading-8 text-gray-600">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative overflow-hidden rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
            >
              <Image
                src="/images/mission-vision.jpg"
                alt="Mission"
                width={700}
                height={650}
                className="h-137.5 w-full object-cover transition duration-700 hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}