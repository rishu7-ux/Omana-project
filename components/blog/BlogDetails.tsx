"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUser, FaCalendarAlt, FaComments } from "react-icons/fa";

interface Blog {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  author: string;
  comments: number;
  description: string;
  content: string;
}

interface Props {
  blog: Blog;
}

export default function BlogDetails({ blog }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Blog Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 h-125 overflow-hidden rounded-3xl"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Meta */}

        <div className="mb-8 flex flex-wrap gap-8 text-gray-500">

          <span className="flex items-center gap-2">
            <FaUser />
            {blog.author}
          </span>

          <span className="flex items-center gap-2">
            <FaCalendarAlt />
            {blog.date}
          </span>

          <span className="flex items-center gap-2">
            <FaComments />
            {blog.comments} Comments
          </span>

        </div>

        {/* Title */}

        <h1 className="mb-8 text-5xl font-extrabold text-navy">
          {blog.title}
        </h1>

        {/* Description */}

        <p className="mb-10 text-xl leading-10 text-gray-600">
          {blog.description}
        </p>

        {/* Content */}

        <div className="space-y-8 text-lg leading-9 text-gray-700">
          {blog.content
            .split("\n")
            .filter(Boolean)
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>

      </div>
    </section>
  );
}