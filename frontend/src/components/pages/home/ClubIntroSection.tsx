import { User, Calendar } from "@phosphor-icons/react/dist/ssr";
import { ClubStatItem } from "./elements/ClubStatItem";

/**
 * マルチメディア研究会の紹介セクションコンポーネント
 * サークルの概要と基本情報を表示します
 */
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
              <ClubStatItem
                icon={<User size={24} weight="fill" />}
                label="現在の部員数：48名"
              />
              <ClubStatItem
                icon={<Calendar size={24} weight="fill" />}
                label="設立：2017年"
              />
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
