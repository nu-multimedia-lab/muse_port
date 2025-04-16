import { HeroSection } from "./HeroSection";
import { FeaturedWorksSection } from "./FeaturedWorksSection";
import { CategoryNavSection } from "./CategoryNavSection";
import { ClubIntroSection } from "./ClubIntroSection";
import { NewsSection } from "./NewsSection";

/**
 * ホームページのプレゼンテーションコンポーネント
 * 各セクションを配置して表示します
 */
export const HomePresentation: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedWorksSection />
      <CategoryNavSection />
      <ClubIntroSection />
      <NewsSection />
    </main>
  );
};
