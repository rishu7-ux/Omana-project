"use client";

import Image from "next/image";
import { FaHome } from "react-icons/fa";
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

export default function Journey() {
  return (
    <motion.section
      className="overflow-hidden bg-white py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto grid max-w-7xl items-start gap-20 px-6 lg:grid-cols-2">

        {/* Left Side */}

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
              Omana Projects
            </span>

          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-5xl font-extrabold text-navy"
          >
            Our Journey
          </motion.h2>

          <motion.div
            className="mt-6 h-1 rounded-full bg-orange-500"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          />

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg leading-9 text-gray-600"
          >
            Omana Projects began with a belief in the future of Dholera SIR.
            What was once undeveloped land is now becoming India&apos;s fastest
            growing industrial destination.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-9 text-gray-600"
          >
            We provide Residential, Commercial, Industrial and Logistics
            plots with complete legal transparency and professional support.
          </motion.p>

          {/* Image */}

          <motion.div
            variants={fadeUp}
            className="mt-12 overflow-hidden rounded-3xl shadow-2xl"
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
            }}
            animate={{
              y: [0, -8, 0],
            }}
          >
            <Image
              src="/images/about-image.jpg"
              alt="Journey"
              width={700}
              height={500}
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </motion.div>

        </motion.div>

        {/* Right Side */}

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
          className="rounded-[30px] bg-linear-to-b from-[#ff835e] to-[#ffb172] p-10 shadow-2xl"
        >

          <motion.h3
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-center text-4xl font-bold text-white"
          >
            Reach Out to Us
          </motion.h3>

          <form className="space-y-5">

            {[
              "Your Name",
              "Your Email",
              "Your Phone",
            ].map((placeholder, index) => (
              <motion.input
                key={placeholder}
                type="text"
                placeholder={placeholder}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.1,
                }}
                className="w-full rounded-lg border border-white/30 bg-white/20 px-5 py-4 text-white placeholder:text-white outline-none backdrop-blur"
              />
            ))}

            <motion.textarea
              rows={5}
              placeholder="Message"
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
              }}
              className="w-full rounded-lg border border-white/30 bg-white/20 p-5 text-white placeholder:text-white outline-none backdrop-blur"
            />

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="w-full rounded-full bg-navy py-4 text-lg font-bold text-white"
            >
              Send Message
            </motion.button>

          </form>

        </motion.div>

      </div>
    </motion.section>
  );
}