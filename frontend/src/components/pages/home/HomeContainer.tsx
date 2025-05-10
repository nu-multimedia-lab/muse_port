import { HomePresentation } from "./HomePresentation";

/**
 * ホームページのコンテナコンポーネント
 * 将来的にはこのコンポーネント内でデータフェッチングを行い、
 * プレゼンテーションコンポーネントにデータを渡します。
 */
export const HomeContainer = async () => {
  // 将来的にここで必要なデータを取得する
  // 例: const featuredWorks = await getFeaturedWorks();
  // 例: const newsItems = await getNews();

  return <HomePresentation />;
};
