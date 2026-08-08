"use client";

import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { motion, type Variants } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
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

export default function WhatWeDo() {
  return (
    <motion.section
      className="overflow-hidden bg-[#eef6fb] py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          className="mb-20 text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-3 flex items-center justify-center gap-2 text-orange-500"
          >
            <FaHome />

            <span className="text-sm font-bold uppercase tracking-[3px]">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-5xl font-extrabold text-[#081A3A]"
          >
            What We Do
          </motion.h2>

          <motion.div
            className="mx-auto mt-5 h-1 rounded-full bg-orange-500"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>

        {/* Objective Card */}

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: easeOut,
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="mb-10 rounded-[25px] bg-white p-10 shadow-xl"
        >
          <div className="flex flex-col gap-6 md:flex-row">

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <FaMapMarkedAlt className="text-5xl text-orange-500" />
            </motion.div>

            <div>

              <h3 className="mb-4 text-3xl font-bold text-[#081A3A]">
                Objective
              </h3>

              <p className="text-lg leading-9 text-gray-600">
                To empower industries, investors and entrepreneurs by
                providing verified industrial plots in Dholera SIR with
                complete transparency, legal security and excellent
                investment opportunities.
              </p>

            </div>

          </div>
        </motion.div>

        {/* Solution Card */}

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
            duration: 0.9,
            ease: easeOut,
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="rounded-[25px] border-b-4 border-orange-500 bg-white p-10 shadow-xl"
        >
          <div className="flex flex-col gap-6 md:flex-row">

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <MdOutlineSupportAgent className="text-5xl text-orange-500" />
            </motion.div>

            <div>

              <h3 className="mb-4 text-3xl font-bold text-[#081A3A]">
                Solution
              </h3>

              <p className="mb-6 text-lg text-gray-600">
                We offer a complete end-to-end solution for industrial
                land acquisition in Dholera.
              </p>

              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Verified Industrial Plots",
                  "Custom Land Sizing",
                  "Location Advisory",
                  "Documentation & Legal Support",
                  "On-Ground Support",
                  "Post-Sale Assistance",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="flex items-center gap-3 text-lg text-gray-700"
                  >
                    <span className="text-xl text-orange-500">✔</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}