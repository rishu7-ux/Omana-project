"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type NewsItem = {
  id: number;
  title: string;
  image: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Cabinet Clears Two New Semiconductor Units in Dholera",
    image: "/images/title11058.jpg",
  },
  {
    id: 2,
    title: "Indo–Taiwan Industrial Park to Come Up in Sanand-Dholera",
    image: "/images/title11058.jpg",
  },
  {
    id: 3,
    title: "UAE President's Historic Visit Boosts Dholera SIR with New Deals",
    image: "/images/title31311.jpg",
  },
  {
    id: 4,
    title: "Dholera Plots for Sale Gain Massive Attraction as Tata Expands",
    image: "/images/title94794.jpg",
  },
  {
    id: 5,
    title: "Airport Expansion Creates New Investment Opportunities",
    image: "/images/title11058.jpg",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function News() {
  return (
    <motion.section
      className="bg-[#05071C] py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">

          <div>
            <motion.p
              className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#ff7b55]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Industry Insights
            </motion.p>

            <motion.h2
              className="text-5xl font-extrabold text-white"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
            >
              NEWS & EVENTS
            </motion.h2>
          </div>

        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            speed={1200}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {newsItems.map((newsItem) => (
              <SwiperSlide key={newsItem.id}>
                <motion.div
                  variants={item}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="group overflow-hidden rounded bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative h-65 overflow-hidden">

                    <Image
                      src={newsItem.image}
                      alt={newsItem.title}
                      fill
                      sizes="(max-width:768px) 100vw,33vw"
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-5">

                    <h3 className="mb-5 text-lg font-semibold leading-7 text-gray-900 transition group-hover:text-[#ff7b55]">
                      {newsItem.title}
                    </h3>

                    <button className="font-semibold text-[#ff7b55] transition-all duration-300 group-hover:translate-x-2">
                      Read More →
                    </button>

                  </div>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </motion.section>
  );
}