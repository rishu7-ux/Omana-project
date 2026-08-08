"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 550;

    const raf = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(raf);
      } else {
        setTimeout(() => setLoading(false), 80);
      }
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-9999"
          >
            {/* Curtain panels */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: easeInOut }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#081A3A]"
            >
              {/* Glow blobs */}
              <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#FF7A00]/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="relative z-10"
              >
                <Image
                  src="/images/logo.png"
                  alt="Omana Projects"
                  width={170}
                  height={68}
                  priority
                  className="h-auto w-auto"
                />
              </motion.div>

              {/* Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 mt-6 flex items-baseline gap-1"
              >
                <span className="text-4xl font-extrabold tabular-nums text-white">
                  {count}
                </span>
                <span className="text-lg font-semibold text-[#FF9800]">%</span>
              </motion.div>

              {/* Thin progress line */}
              <div className="relative z-10 mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-linear-to-r from-[#FF7A00] to-[#FF9800]"
                  style={{ width: `${count}%` }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{
          opacity: loading ? 0 : 1,
          scale: loading ? 0.99 : 1,
        }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        {children}
      </motion.div>
    </>
  );
}