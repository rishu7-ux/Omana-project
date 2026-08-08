"use client";

import { news } from "./newsData";
import LatestPosts from "./LatestPosts";
import NewsCard from "./NewsCard";

export default function NewsGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-[330px_1fr]">

          {/* Left Sidebar */}

          <div>
            <LatestPosts />
          </div>

          {/* Right News List */}

          <div className="space-y-12">

            {news.map((item) => (
              <NewsCard
                key={item.id}
                news={item}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}