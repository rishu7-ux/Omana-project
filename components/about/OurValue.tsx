"use client";

import Image from "next/image";
import { FaHome, FaCheckCircle } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

const values = [
  "Provide verified, strategically located industrial plots tailored to the diverse needs of businesses, manufacturers and investors.",

  "Deliver transparent end-to-end solutions from land identification to legal documentation and post-sale support.",

  "Empower our clients with accurate information, local insights and personalised guidance.",

  "Contribute meaningfully to the growth of Dholera Special Investment Region as a global industrial and logistics hub.",

  "Uphold integrity, accountability and client-first service in every transaction.",
];

export default function OurValue() {
  return (
    <motion.section
      className="overflow-hidden bg-white py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 flex items-center gap-2 text-orange-500"
            >
              <FaHome />

              <span className="text-sm font-bold uppercase tracking-[3px]">
                Our Values
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl font-extrabold text-navy"
            >
              Our Value
            </motion.h2>

            <motion.div
              className="mt-5 h-1 rounded-full bg-orange-500"
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            />

            <motion.ul
              className="mt-10 space-y-6"
              variants={container}
            >
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <FaCheckCircle className="mt-1 text-xl text-orange-500" />

                  <p className="text-lg leading-9 text-gray-600">
                    {value}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: easeOut,
            }}
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
              animate={{
                y: [0, -8, 0],
              }}
              className="overflow-hidden rounded-[30px] shadow-2xl"
            >
              <Image
                src="/images/our-value.jpg"
                alt="Our Value"
                width={700}
                height={650}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}