"use client";

import { motion } from "framer-motion";

export default function VisionBanner() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-28"
      style={{
        backgroundImage: "url('/images/vision-banner.jpg')",
      }}
    >
      {/* Optional dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-white">
            Let&apos;s Build Together
          </p>

          <h2 className="mb-6 text-5xl font-extrabold leading-tight text-white">
            We Help You Build
            <br />
            Your Dream Investment
          </h2>

          <p className="max-w-xl text-lg leading-9 text-white/90">
            Omana Projects provides trusted industrial, commercial and
            logistics plots in Dholera SIR with complete legal support,
            verified documentation and expert investment guidance.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 rounded-full bg-white px-10 py-4 text-lg font-semibold text-navy shadow-lg transition hover:bg-gray-100"
          >
            Explore Projects →
          </motion.button>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-[30px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        >
          <h3 className="mb-8 text-3xl font-bold text-navy">
            Request a Callback
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-navy"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-navy"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-navy"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-xl border border-gray-300 p-5 outline-none transition focus:border-navy"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-full bg-navy py-4 text-lg font-bold text-white transition hover:bg-[#0d2958]"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}