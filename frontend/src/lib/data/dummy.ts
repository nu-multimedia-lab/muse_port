// フィーチャー作品のダミーデータ
export const featuredWorks = [
  {
    id: "work-1",
    title: "幻想世界の探索",
    authorId: "user-1",
    authorName: "佐藤太郎",
    tags: ["ゲーム", "3D", "アドベンチャー"],
    imageUrl: "https://picsum.photos/500/300?random=1", // プレースホルダー画像
  },
  {
    id: "work-2",
    title: "サイバーパンク都市",
    authorId: "user-2",
    authorName: "山田花子",
    tags: ["イラスト", "デジタルアート"],
    imageUrl: "https://picsum.photos/500/300?random=2",
  },
  {
    id: "work-3",
    title: "海中の旅",
    authorId: "user-3",
    authorName: "鈴木一郎",
    tags: ["モデリング", "3D"],
    imageUrl: "https://picsum.photos/500/300?random=3",
  },
  {
    id: "work-4",
    title: "夜明けの旋律",
    authorId: "user-4",
    authorName: "高橋実",
    tags: ["DTM", "アンビエント"],
    imageUrl: "https://picsum.photos/500/300?random=4",
  },
];

// 新着情報のダミーデータ
export const news = [
  {
    id: "news-1",
    date: "2025年4月10日",
    title: "MUSE PORT ベータ版リリース",
    content:
      "マルチメディア研究会の作品ポータルサイト「MUSE PORT」のベータ版がリリースされました。",
  },
  {
    id: "news-2",
    date: "2025年4月15日",
    title: "春の新入部員募集開始",
    content:
      "マルチメディア研究会では、2025年度の新入部員を募集しています。デジタル創作に興味のある方はぜひご応募ください。",
  },
  {
    id: "news-3",
    date: "2025年5月5日",
    title: "作品展示会開催予定",
    content:
      "5月末に大学内で作品展示会を開催予定です。詳細は後日お知らせします。",
  },
];

// カテゴリーのダミーデータ
export const categories = [
  {
    id: "game",
    name: "ゲーム",
    icon: "GameController",
    color: "red",
  },
  {
    id: "illustration",
    name: "イラスト",
    icon: "PaintBrush",
    color: "blue",
  },
  {
    id: "modeling",
    name: "モデリング",
    icon: "Cube",
    color: "green",
  },
  {
    id: "music",
    name: "DTM",
    icon: "MusicNotes",
    color: "purple",
  },
  {
    id: "programming",
    name: "プログラミング",
    icon: "Code",
    color: "amber",
  },
  {
    id: "video",
    name: "動画制作",
    icon: "VideoCamera",
    color: "rose",
  },
];
