"use client";

import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Pagination() {
  return (
    <section className="bg-[#f8fafc] pb-24">

      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3">

        {/* Previous */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-12 w-12 items-center justify-center rounded-lg border bg-white shadow transition hover:bg-orange-500 hover:text-white"
        >
          <FaChevronLeft />
        </motion.button>

        {/* Page 1 */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 font-bold text-white shadow-lg"
        >
          1
        </motion.button>

        {/* Page 2 */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="flex h-12 w-12 items-center justify-center rounded-lg border bg-white font-bold transition hover:bg-orange-500 hover:text-white"
        >
          2
        </motion.button>

        {/* Page 3 */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="flex h-12 w-12 items-center justify-center rounded-lg border bg-white font-bold transition hover:bg-orange-500 hover:text-white"
        >
          3
        </motion.button>

        {/* Next */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-12 w-12 items-center justify-center rounded-lg border bg-white shadow transition hover:bg-orange-500 hover:text-white"
        >
          <FaChevronRight />
        </motion.button>

      </div>

    </section>
  );
}