"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUser, FaRegComments, FaArrowRight } from "react-icons/fa";

type News = {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  date: string;
  author: string;
  comments: number;
  description: string;
};

interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
    >
      {/* Image */}

      <div className="relative h-105 overflow-hidden">

        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="(max-width:768px) 100vw, 70vw"
          className="object-cover transition duration-700 hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="p-10">

        {/* Meta */}

        <div className="mb-6 flex flex-wrap items-center gap-6 text-gray-500">

          <span className="flex items-center gap-2">
            <FaUser />
            {news.author}
          </span>

          <span>{news.date}</span>

          <span className="flex items-center gap-2">
            <FaRegComments />
            {news.comments} Comments
          </span>

        </div>

        {/* Title */}

        <h2 className="mb-4 text-4xl font-extrabold leading-tight text-navy transition hover:text-orange-500">

          {news.title}

        </h2>

        {/* Short Title */}

        <h3 className="mb-6 text-5xl font-black leading-tight text-navy">

          {news.shortTitle}

        </h3>

        {/* Description */}

        <p className="mb-10 text-lg leading-8 text-gray-600">

          {news.description}

        </p>

        {/* Read More */}

        <Link
          href={`/news/${news.slug}`}
          className="inline-flex items-center gap-4 group"
        >

          <div className="flex h-14 w-14 items-center justify-center border border-gray-300 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">

            <FaArrowRight />

          </div>

          <span className="text-lg font-semibold text-navy group-hover:text-orange-500">

            Read More

          </span>

        </Link>

      </div>

    </motion.article>
  );
}