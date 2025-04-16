import Link from "next/link";
import {
  ArrowRight,
  GameController,
  PaintBrush,
  Cube,
  MusicNotes,
  Code,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { categories } from "@/lib/data/dummy";

// アイコンのマッピング
const iconComponents = {
  GameController,
  PaintBrush,
  Cube,
  MusicNotes,
  Code,
  VideoCamera,
};

// 色のマッピング
const colorClasses = {
  red: {
    bg: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/60 dark:to-red-800",
    text: "text-red-500 dark:text-red-300",
    hover: "group-hover:text-red-500 dark:group-hover:text-red-300",
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/60 dark:to-blue-800",
    text: "text-blue-500 dark:text-blue-300",
    hover: "group-hover:text-blue-500 dark:group-hover:text-blue-300",
  },
  green: {
    bg: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/60 dark:to-green-800",
    text: "text-green-500 dark:text-green-300",
    hover: "group-hover:text-green-500 dark:group-hover:text-green-300",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/60 dark:to-purple-800",
    text: "text-purple-500 dark:text-purple-300",
    hover: "group-hover:text-purple-500 dark:group-hover:text-purple-300",
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/60 dark:to-amber-800",
    text: "text-amber-500 dark:text-amber-300",
    hover: "group-hover:text-amber-500 dark:group-hover:text-amber-300",
  },
  rose: {
    bg: "bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/60 dark:to-rose-800",
    text: "text-rose-500 dark:text-rose-300",
    hover: "group-hover:text-rose-500 dark:group-hover:text-rose-300",
  },
};

export const CategoryNavSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">カテゴリー</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {categories.map((category) => {
            const IconComponent =
              iconComponents[category.icon as keyof typeof iconComponents];
            const colorClass =
              colorClasses[category.color as keyof typeof colorClasses];

            return (
              <Link
                key={category.id}
                href={`/works?category=${category.id}`}
                className="group text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colorClass.bg} ${colorClass.text} mb-4 mx-auto`}
                >
                  <IconComponent size={30} weight="duotone" />
                </div>
                <h3
                  className={`font-medium text-gray-800 dark:text-gray-200 ${colorClass.hover} transition-colors`}
                >
                  {category.name}
                </h3>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/works"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium transition-colors"
          >
            <span>作品一覧を見る</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
