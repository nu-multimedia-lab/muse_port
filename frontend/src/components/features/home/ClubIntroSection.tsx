import React from "react";
import { User, Calendar } from "@phosphor-icons/react";

export const ClubIntroSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              マルチメディア研究会について
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              長崎大学マルチメディア研究会は、デジタルコンテンツの制作に情熱を持つ学生たちが集まるサークルです。
              ゲーム開発、デジタルアート、3Dモデリング、音楽制作など、様々な分野で活動しています。
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              初心者から経験者まで、創作に興味のある全ての学生が自由に参加できる環境を提供しています。
              定期的に勉強会や作品発表会を開催し、お互いのスキルを高め合っています。
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                  <User size={24} weight="fill" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  現在の部員数：48名
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                  <Calendar size={24} weight="fill" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  設立：2017年
                </span>
              </div>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://picsum.photos/800/450?random=5"
              alt="マルチメディア研究会の活動風景"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
