import React from "react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
          MUSE PORT
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-8">
          長崎大学マルチメディア研究会 創作ポータル
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          MUSE
          PORTはゲーム、イラスト、モデリング、DTMなど、部員たちが創り出した作品を
          自由に閲覧できるオンラインギャラリーです。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/works"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors shadow-lg"
          >
            作品を見る
          </Link>
          <Link
            href="/members"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-full transition-colors"
          >
            部員紹介を見る
          </Link>
        </div>
      </div>
    </section>
  );
};