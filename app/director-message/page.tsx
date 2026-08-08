"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, easeOut } from "framer-motion";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export default function DirectorMessagePage() {
  return (
    <>
      <TopBar />
      <Header />
      <SocialSidebar />

      <main>

        {/* ================= HERO ================= */}

        <section className="relative h-125 overflow-hidden">

          <Image
            src="/images/director-banner.jpg"
            alt="Director Message"
            fill
            priority
            className="object-cover scale-105 transition duration-8000 hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-r from-navy/90 via-navy/60 to-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">

            <motion.p
              initial="hidden"
              animate="show"
              variants={fromLeft}
              className="mb-4 uppercase tracking-[5px] text-orange-400 font-semibold"
            >
              OMANA PROJECTS
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fromRight}
              transition={{ delay: 0.2 }}
              className="text-5xl font-extrabold md:text-7xl"
            >
              Director Message
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
              className="mt-6 h-1 w-28 origin-left rounded-full bg-orange-500"
            />

            <motion.p
              initial="hidden"
              animate="show"
              variants={fromLeft}
              transition={{ delay: 0.4 }}
              className="mt-8 text-lg text-gray-200"
            >
              Home
              <span className="mx-2 text-orange-500">/</span>
              Director Message
            </motion.p>

          </div>

        </section>

        {/* ================= MANOJ JAIN ================= */}

        <section className="group bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-20 lg:grid-cols-2">

              {/* LEFT */}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fromLeft}
              >

                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <div className="h-0.5 w-16 bg-orange-500"></div>
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-orange-500">
                  MESSAGE
                </p>

                <h2 className="text-5xl font-bold text-navy">
                  Director Message
                </h2>

                <div className="mt-5 mb-8 h-1 w-24 rounded-full bg-linear-to-r from-orange-500 to-yellow-400"></div>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  Manoj Jain is a seasoned professional with more than
                  twenty-four years of experience in financial planning,
                  taxation and legal advisory. Holding qualifications in
                  B.Com, MBA (Finance) and LLB, he has developed strong
                  expertise in finance, compliance and investment strategy.
                </p>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  Throughout his career he has advised businesses and
                  individuals in taxation, financial planning and legal
                  compliance while maintaining transparency and
                  professionalism.
                </p>

                <h3 className="mb-5 text-3xl font-bold text-navy">
                  Specialization
                </h3>

                <p className="text-[17px] leading-9 tracking-wide text-gray-600">
                  Financial Planning, Taxation Laws, Investment Advisory,
                  Legal Consultation, Business Compliance, Corporate
                  Strategy and Long-term Financial Solutions.
                </p>

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fromRight}
                className="flex justify-center"
              >

                <div className="relative">

                  <div className="absolute -right-10 top-8 h-130 w-65 rounded-[40px] bg-linear-to-br from-orange-100 to-blue-100 rotate-6"></div>

                  <div className="group relative z-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-700 hover:-translate-y-4 hover:shadow-[0_35px_70px_rgba(0,0,0,0.18)]">

                    <Image
                      src="/images/manoj jain.png"
                      alt="Manoj Jain"
                      width={430}
                      height={560}
                      className="transition duration-700 group-hover:scale-105"
                    />

                  </div>

                  <div className="mt-8 border-l-4 border-orange-500 pl-5">

                    <h3 className="text-4xl font-bold text-navy">
                      Manoj Jain
                    </h3>

                    <p className="mt-2 uppercase tracking-[3px] text-orange-500">
                      Director
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        <div className="mx-auto h-px max-w-6xl bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>

        {/* ================= SAROON KUMAR ================= */}

        <section className="group bg-[#F7FAFD] py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-20 lg:grid-cols-2">

              {/* LEFT */}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fromLeft}
              >

                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <div className="h-0.5 w-16 bg-orange-500"></div>
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-orange-500">
                  MESSAGE
                </p>

                <h2 className="text-5xl font-bold text-navy">
                  Managing Director Message
                </h2>

                <div className="mt-5 mb-8 h-1 w-24 rounded-full bg-linear-to-r from-orange-500 to-yellow-400"></div>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  Since February 2014, Saroon Kumar has been leading Omana
                  Estates, Omana Consulting and Sarvasattvavalambana Pvt.
                  Ltd. Based in Noida, Uttar Pradesh, he has established
                  himself as a visionary entrepreneur and real estate
                  developer focused on premium residential, commercial and
                  township developments.
                </p>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  Under his leadership, the company has successfully
                  expanded across India and international markets,
                  delivering projects in Dubai, Australia, Bangkok,
                  Mumbai, Gujarat, Pune, Delhi NCR, Bangalore and Kochi.
                </p>

                <h3 className="mb-5 text-3xl font-bold text-navy">
                  Specialization
                </h3>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  Real Estate Development, Township Planning,
                  Project Execution, Sales Strategy,
                  Business Development and Investment Planning.
                </p>

                <p className="text-[17px] leading-9 tracking-wide text-gray-600">
                  His expertise also includes international real estate
                  ventures, sustainable developments, market research,
                  financial planning, fundraising and building
                  customer-centric investment opportunities with
                  long-term value.
                </p>

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fromRight}
                className="flex justify-center"
              >

                <div className="relative">

                  <div className="absolute -right-10 top-8 h-130 w-65 rounded-[40px] bg-linear-to-br from-orange-100 to-blue-100 rotate-6"></div>

                  <div className="group relative z-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_35px_70px_rgba(0,0,0,0.18)]">

                    <Image
                      src="/images/saroon kumar.png"
                      alt="Saroon Kumar"
                      width={430}
                      height={560}
                      className="transition duration-700 group-hover:scale-105"
                    />

                  </div>

                  <div className="mt-8 border-l-4 border-orange-500 pl-5">

                    <h3 className="text-4xl font-bold text-navy">
                      Saroon Kumar
                    </h3>

                    <p className="mt-2 uppercase tracking-[3px] text-orange-500">
                      Managing Director
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        <div className="mx-auto h-px max-w-6xl bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>

        {/* ================= NITIN SHARMA ================= */}

        <section className="group bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-20 lg:grid-cols-2">

              {/* LEFT */}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fromLeft}
              >

                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <div className="h-0.5 w-16 bg-orange-500"></div>
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-orange-500">
                  MESSAGE
                </p>

                <h2 className="text-5xl font-bold text-navy">
                  Director Message
                </h2>

                <div className="mt-5 mb-8 h-1 w-24 rounded-full bg-linear-to-r from-orange-500 to-yellow-400"></div>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  With more than sixteen years of experience in the real estate
                  industry, Nitin Sharma is a dynamic business leader recognised
                  for combining technical expertise with strategic planning.
                  Holding a B.Tech degree, he has played a key role in driving
                  innovation, customer satisfaction and business growth.
                </p>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  Throughout his professional journey he has successfully led
                  Business Development and Customer Relationship Management
                  functions for reputed real estate organisations, helping
                  companies strengthen customer engagement and expand into
                  competitive markets.
                </p>

                <h3 className="mb-5 text-3xl font-bold text-navy">
                  Specialization
                </h3>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  Business Development, CRM Management, Revenue Growth,
                  Strategic Planning, Customer Experience,
                  Market Expansion and Sales Leadership.
                </p>

                <p className="text-[17px] leading-9 tracking-wide text-gray-600">
                  His execution-driven approach, combined with strong leadership
                  and analytical thinking, continues to help Omana Projects
                  deliver premium customer experiences while ensuring sustainable
                  business growth and operational excellence.
                </p>

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fromRight}
                className="flex justify-center"
              >

                <div className="relative">

                  <div className="absolute -right-10 top-8 h-130 w-65 rounded-[40px] bg-linear-to-br from-orange-100 to-blue-100 rotate-6"></div>

                  <div className="group relative z-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_35px_70px_rgba(0,0,0,0.18)]">

                    <Image
                      src="/images/NItinSharma.jpg"
                      alt="Nitin Sharma"
                      width={430}
                      height={560}
                      className="transition duration-700 group-hover:scale-105"
                    />

                  </div>

                  <div className="mt-8 border-l-4 border-orange-500 pl-5">

                    <h3 className="text-4xl font-bold text-navy">
                      Nitin Sharma
                    </h3>

                    <p className="mt-2 uppercase tracking-[3px] text-orange-500">
                      Director
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        <div className="mx-auto h-px max-w-6xl bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>

        {/* ================= GAURAV VIR SINGH ================= */}

        <section className="group bg-[#F7FAFD] py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-20 lg:grid-cols-2">

              {/* LEFT */}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fromLeft}
              >

                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <div className="h-0.5 w-16 bg-orange-500"></div>
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-orange-500">
                  MESSAGE
                </p>

                <h2 className="text-5xl font-bold text-navy">
                  Director Message
                </h2>

                <div className="mt-5 mb-8 h-1 w-24 rounded-full bg-linear-to-r from-orange-500 to-yellow-400"></div>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  With over sixteen years of experience in the real estate industry,
                  Gaurav Vir Singh serves as the Sales Head, bringing extensive
                  market knowledge, strategic leadership and a customer-first
                  approach to every project.
                </p>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  Throughout his professional journey, he has worked with some of
                  the most respected organisations in the real estate sector,
                  successfully leading sales teams, channel partner networks,
                  customer acquisition programmes and business expansion initiatives.
                </p>

                <h3 className="mb-5 text-3xl font-bold text-navy">
                  Specialization
                </h3>

                <p className="mb-6 text-[17px] leading-9 tracking-wide text-gray-600">
                  Sales Leadership, Business Development, Customer Relationship
                  Management, Channel Partner Development, Revenue Growth,
                  Project Marketing and Strategic Planning.
                </p>

                <p className="text-[17px] leading-9 tracking-wide text-gray-600">
                  His strong leadership, execution-focused mindset and commitment
                  to customer satisfaction continue to play an important role in
                  expanding Omana Projects while delivering long-term value,
                  sustainable growth and exceptional service excellence.
                </p>

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fromRight}
                className="flex justify-center"
              >

                <div className="relative">

                  <div className="absolute -right-10 top-8 h-130 w-65 rounded-[40px] bg-linear-to-br from-orange-100 via-blue-100 to-slate-100 rotate-6"></div>

                  <div className="group relative z-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_35px_70px_rgba(0,0,0,0.18)]">

                    <Image
                      src="/images/GauravVirSingh.jpg"
                      alt="Gaurav Vir Singh"
                      width={430}
                      height={560}
                      className="transition duration-700 group-hover:scale-105"
                    />

                  </div>

                  <div className="mt-8 border-l-4 border-orange-500 pl-5">

                    <h3 className="text-4xl font-bold text-navy">
                      Gaurav Vir Singh
                    </h3>

                    <p className="mt-2 uppercase tracking-[3px] text-orange-500">
                      Director
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        <div className="mx-auto h-px max-w-6xl bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>

        {/* ================= Bottom CTA ================= */}

        <section className="relative overflow-hidden bg-navy py-24">

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative mx-auto max-w-6xl px-6 text-center"
          >

            <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-orange-400">
              OMANA PROJECTS
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Let&apos;s Build Your Future Together
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Our leadership team is committed to delivering transparency,
              trust and premium real estate opportunities. Whether you&apos;re
              looking to invest or own your dream property, we&apos;re here to
              guide you every step of the way.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">

              <Link
                href="/contact"
                className="rounded-full bg-orange-500 px-10 py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
              >
                Contact Us
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white px-10 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-navy"
              >
                Learn More
              </Link>

            </div>

          </motion.div>

        </section>

      </main>

      <Footer />

    </>
  );
}