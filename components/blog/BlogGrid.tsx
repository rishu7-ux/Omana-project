"use client";

import { blogs } from "@/data/blogs";
import BlogSidebar from "./BlogSidebar";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left Sidebar */}

          <div>
            <BlogSidebar />
          </div>

          {/* Right Blog List */}

          <div className="space-y-12 lg:col-span-2">

            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}