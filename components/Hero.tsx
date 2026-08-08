"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const titles = [
    {
      heading: "PREMIUM PLOTS & LANDS",
      title1: "Begin Your Plots",
      title2: "Journey Today",
      desc:
        "Your pathway to finding the perfect plots starts here. Discover stunning locations, trusted quality, and a future built for you.",
    },
    
    {
      heading: "DHOLERA SMART CITY",
      title1: "Invest In",
      title2: "Future Growth",
      desc:
        "Own premium residential, industrial and logistics plots in India's fastest-growing smart city.",
    },

    {
      heading: "OMANA PROJECTS",
      title1: "Secure Your",
      title2: "Dream Investment",
      desc:
        "Explore world-class developments with trusted guidance, transparent dealings and excellent returns.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setAnimate(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <>
      <section className="relative h-162.5 overflow-hidden md:h-187.5">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/Dholera_AV_Mar_2025.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/55"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl w-full px-6">

            <div className="max-w-3xl">

              {/* Small Heading */}
              <p
                className={`mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-300 transition-all duration-700 ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {titles[index].heading}
              </p>

              {/* Main Heading */}
              <h1
                className={`text-5xl font-extrabold leading-tight text-white md:text-7xl transition-all duration-700 ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {titles[index].title1}
                <br />
                {titles[index].title2}
              </h1>

              {/* Line */}
              <div
                className={`mt-6 h-1 w-24 rounded-full bg-blue-500 transition-all duration-700 ${
                  animate ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              {/* Description */}
              <p
                className={`mt-8 max-w-xl text-lg leading-8 text-gray-200 transition-all duration-700 delay-150 ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {titles[index].desc}
              </p>

              {/* Buttons */}
              <div
                className={`mt-10 flex flex-wrap gap-5 transition-all duration-700 delay-300 ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <a
                  href="/projects"
                  className="rounded-full bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800"
                >
                  Explore Projects →
                </a>

                <a
                  href="/contact"
                  className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-navy"
                >
                  Contact Us →
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Left Arrow */}
        <button className="absolute left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-3xl text-white backdrop-blur hover:bg-blue-700">
          ❮
        </button>

        {/* Right Arrow */}
        <button className="absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-3xl text-white backdrop-blur hover:bg-blue-700">
          ❯
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {titles.map((_, i) => (
            <span
              key={i}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === i
                  ? "w-10 bg-blue-600"
                  : "w-3 bg-white"
              }`}
            ></span>
          ))}
        </div>

      </section>

      {/* WhatsApp Button */}
      

<a
  href="https://wa.me/919217104219?text=Hello%20Omana%20Projects,%20I%20am%20interested%20in%20your%20projects."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform duration-300"
>
  <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-30"></span>

  <FaWhatsapp className="relative z-10 text-[34px] text-white" />
</a>
    </>
  );
}