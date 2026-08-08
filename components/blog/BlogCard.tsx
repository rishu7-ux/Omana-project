"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUser, FaRegComments, FaArrowRight } from "react-icons/fa";

interface Blog {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  author: string;
  comments: number;
  description: string;
}

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
    >
      {/* Image */}
      <div className="relative h-105 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width:768px)100vw,70vw"
          className="object-cover transition duration-700 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Meta */}
        <div className="mb-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaUser />
            <span>{blog.author}</span>
          </div>

          <span>{blog.date}</span>

          <div className="flex items-center gap-2">
            <FaRegComments />
            <span>{blog.comments} Comments</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-6 text-4xl font-bold leading-tight text-navy transition hover:text-orange-500">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="mb-8 text-lg leading-8 text-gray-600">
          {blog.description}
        </p>

        {/* Button */}
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-4 group"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border transition group-hover:bg-orange-500 group-hover:text-white">
            <FaArrowRight />
          </div>

          <span className="font-semibold text-navy group-hover:text-orange-500">
            Read More
          </span>
        </Link>
      </div>
    </motion.article>
  );
}