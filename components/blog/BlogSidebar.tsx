"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";

export default function BlogSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="rounded-lg border bg-white p-8 shadow-sm"
    >
      <h3 className="mb-8 text-3xl font-bold text-navy">
        Latest Blog
      </h3>

      <div className="space-y-8">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="group block"
          >
            <div className="flex gap-4">

              {/* Image */}

              <div className="relative h-24 w-28 overflow-hidden rounded-lg">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="120px"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="flex-1">

                <p className="mb-2 text-sm text-gray-500">
                  {blog.date}
                </p>

                <h4 className="text-lg font-bold leading-7 text-navy transition group-hover:text-orange-500">
                  {blog.title}
                </h4>

              </div>

            </div>

          </Link>
        ))}
      </div>
    </motion.aside>
  );
}