import React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { featuredWorks } from "@/lib/data/dummy";

export const FeaturedWorksSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">新着作品</h2>
          <Link
            href="/works"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            もっと見る <ArrowRight size={20} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWorks.map((work) => (
            <Link key={work.id} href={`/works/${work.id}`} className="group">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {work.authorName}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};