"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  FaIndustry,
  FaWarehouse,
  FaTruckMoving,
  FaHandshake,
} from "react-icons/fa";

const easeOut = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    icon: <FaIndustry />,
    title: "Industrial Plots",
    desc: "Verified industrial plots in Dholera SIR suitable for factories, manufacturing units and warehouses.",
  },
  {
    icon: <FaWarehouse />,
    title: "Commercial Spaces",
    desc: "Premium commercial land for offices, retail spaces, business parks and investment opportunities.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Logistics Parks",
    desc: "Strategic logistics and warehousing plots near expressways, freight corridors and ports.",
  },
  {
    icon: <FaHandshake />,
    title: "Investment Consulting",
    desc: "Complete guidance from site visit to legal verification, documentation and post-sale support.",
  },
];

// Detects touch / small-screen / reduced-motion so heavy effects
// (3D tilt, magnetic icon) only run where they make sense.
function useIsInteractive() {
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wideEnough = window.innerWidth >= 768;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsInteractive(hoverCapable && !reducedMotion && wideEnough);
  }, []);

  return isInteractive;
}

// ---- Heading: letter-by-letter reveal ----
const headingContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};
const letter: Variants = {
  hidden: { opacity: 0, y: 18, rotateX: -60 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

function AnimatedHeading({ text }: { text: string }) {
  return (
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white perspective-midrange"
      variants={headingContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}

// ---- Card grid: stagger container ----
const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

// ---- Individual card with mouse-tracked 3D tilt (desktop only) ----
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInteractive = useIsInteractive();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    { stiffness: 200, damping: 20 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    { stiffness: 200, damping: 20 }
  );

  const iconX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 15,
  });
  const iconY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 15,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isInteractive) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      variants={cardVariant}
      style={{ perspective: 1000 }}
      className="relative"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          isInteractive
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : undefined
        }
        whileHover={{ scale: isInteractive ? 1.03 : 1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 md:p-10 text-center shadow-xl"
      >
        {/* Reveal wipe on hover — degrades to a simple fade on touch since whileHover won't linger */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-orange-500 to-orange-600"
          initial={{ clipPath: "circle(0% at 50% 100%)" }}
          whileHover={{ clipPath: "circle(150% at 50% 100%)" }}
          transition={{ duration: 0.6, ease: easeOut }}
        />

        {/* Ghost index number — scales down on small screens */}
        <span className="absolute right-3 top-3 sm:right-5 sm:top-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-100 transition-colors duration-500 group-hover:text-white/20">
          0{index + 1}
        </span>

        <div
          className="relative z-10"
          style={isInteractive ? { transform: "translateZ(40px)" } : undefined}
        >
          <motion.div
            style={isInteractive ? { x: iconX, y: iconY } : undefined}
            animate={{ y: [0, -5, 0] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="mx-auto mb-4 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-orange-100 text-2xl sm:text-3xl md:text-4xl text-orange-500 transition-colors duration-500 group-hover:bg-white group-hover:text-orange-500"
          >
            <motion.span
              whileHover={{ rotate: isInteractive ? 12 : 0, scale: isInteractive ? 1.15 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            >
              {service.icon}
            </motion.span>
          </motion.div>

          <h3 className="mb-3 sm:mb-4 md:mb-5 text-lg sm:text-xl md:text-2xl font-bold text-navy transition-colors duration-500 group-hover:text-white">
            {service.title}
          </h3>

          <p className="text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
            {service.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function OurService() {
  return (
    <section className="bg-navy py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 sm:mb-14 md:mb-16 text-center">
          <motion.p
            className="mb-2 sm:mb-3 text-xs sm:text-sm font-bold uppercase tracking-[2px] sm:tracking-[3px] text-orange-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            OUR SERVICES
          </motion.p>

          <AnimatedHeading text="What We Offer" />

          <motion.div
            className="mx-auto mt-4 sm:mt-5 h-1 w-16 sm:w-24 rounded-full bg-orange-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
          />

          <motion.p
            className="mx-auto mt-5 sm:mt-6 md:mt-8 max-w-3xl px-2 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
          >
            Omana Projects provides complete real estate solutions in
            Dholera SIR with verified properties, legal support and
            professional investment guidance.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 xl:grid-cols-4"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}