import React from "react";
import { news } from "@/lib/data/dummy";

export const NewsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">新着情報</h2>
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8">
          <ul className="divide-y divide-gray-200 dark:divide-gray-600">
            {news.map((item) => (
              <li key={item.id} className="py-4 first:pt-0 last:pb-0">
                <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                  {item.date}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
