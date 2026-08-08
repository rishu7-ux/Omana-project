"use client";

import Image from "next/image";
import Link from "next/link";
import { news } from "./newsData";

export default function LatestPosts() {
  return (
    <aside className="rounded-lg border border-gray-200 bg-white p-8">

      <h3 className="mb-8 text-4xl font-bold text-navy">
        Latest Posts
      </h3>

      <div className="space-y-8">

        {news.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-200 pb-8 last:border-0"
          >
            <Link
              href={`/news/${item.slug}`}
              className="group flex gap-4"
            >

              {/* Image */}

              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="96px"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div>

                <p className="mb-2 text-sm text-gray-500">
                  {item.date}
                </p>

                <h4 className="text-lg font-bold leading-7 text-navy transition group-hover:text-orange-500">
                  {item.title}
                </h4>

              </div>

            </Link>
          </div>
        ))}

      </div>

    </aside>
  );
}