import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { categories } from "@/lib/data/dummy";
import { CategoryItem } from "./elements/CategoryItem";
import { type ColorName, type IconName } from "@/lib/utils/categoryUtils";

/**
 * カテゴリーナビゲーションセクションコンポーネント
 * 複数のカテゴリーアイテムを表示します
 */
export const CategoryNavSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">カテゴリー</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              id={category.id}
              name={category.name}
              icon={category.icon as IconName}
              color={category.color as ColorName}
            />
          ))}
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
