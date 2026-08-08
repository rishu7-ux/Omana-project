"use client";

import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CompanyHistory() {
  return (
    <motion.section
      className="bg-[#f5f9fc] py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
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
              className="overflow-hidden rounded-[30px] shadow-2xl"
              animate={{
                y: [0, -8, 0],
              }}
            >
              <Image
                src="/images/company-history.jpg"
                alt="Company History"
                width={700}
                height={850}
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

            <motion.div
              className="mb-4 flex items-center gap-2 text-orange-500"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FaHome />

              <span className="text-sm font-bold uppercase tracking-[3px]">
                About Us
              </span>
            </motion.div>

            <motion.h2
              className="mb-8 text-5xl font-extrabold leading-tight text-navy"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our Company History
            </motion.h2>

            <motion.div
              className="mb-10 h-1 w-24 rounded-full bg-orange-500"
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />

            <motion.p
              className="mb-6 text-lg leading-9 text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Founded with a vision to contribute to India&apos;s next-generation
              industrial revolution, Omana Projects was established to provide
              strategic industrial land solutions in Dholera Special Investment
              Region (DSIR).
            </motion.p>

            <motion.p
              className="mb-6 text-lg leading-9 text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              From the beginning, our focus has been transparency,
              professionalism and helping investors make confident land
              investment decisions.
            </motion.p>

            <motion.p
              className="mb-6 text-lg leading-9 text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              Today we help individuals, startups, SMEs and large industries
              acquire verified industrial, commercial and logistics plots with
              complete legal assistance.
            </motion.p>

            <motion.p
              className="text-lg leading-9 text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
            >
              Our mission is to build long-term relationships through trust,
              verified documentation and excellent customer service.
            </motion.p>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}