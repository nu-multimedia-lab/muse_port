"use client";

import React from "react";
import Link from "next/link";
import {
  GameController,
  PaintBrush,
  Cube,
  MusicNotes,
  ArrowRight,
  Calendar,
  Trophy,
  MegaphoneSimple,
  User,
  Code,
  VideoCamera,
} from "@phosphor-icons/react";

const Home = () => {
  // ダミーデータ: 新着作品
  const featuredWorks = [
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

  // ダミーデータ: ピックアップメンバー
  const featuredMembers = [
    {
      id: "user-1",
      name: "佐藤太郎",
      specialty: "ゲーム開発",
      bio: "Unityでゲーム開発をしています。3Dアクションゲームが得意です。",
      imageUrl: "https://placehold.co/150x150?text=T.S",
    },
    {
      id: "user-2",
      name: "山田花子",
      specialty: "イラストレーション",
      bio: "デジタルイラストを中心に制作しています。SFやファンタジーのコンセプトアートが好きです。",
      imageUrl: "https://placehold.co/150x150?text=H.Y",
    },
    {
      id: "user-3",
      name: "鈴木一郎",
      specialty: "3Dモデリング",
      bio: "Blenderを使って3Dモデルを作成しています。キャラクターデザインが得意分野です。",
      imageUrl: "https://placehold.co/150x150?text=I.S",
    },
  ];

  // ダミーデータ: 新着情報
  const news = [
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

  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
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

      {/* 特集作品セクション */}
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

      {/* カテゴリーナビゲーション */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">カテゴリー</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {/* ゲーム */}
            <Link href="/works?category=game" className="group text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/60 dark:to-red-800 text-red-500 dark:text-red-300 mb-4 mx-auto transition-all duration-300 group-hover:shadow-md">
                <GameController size={30} weight="duotone" />
              </div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-red-500 dark:group-hover:text-red-300 transition-colors">
                ゲーム
              </h3>
            </Link>

            {/* イラスト */}
            <Link
              href="/works?category=illustration"
              className="group text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/60 dark:to-blue-800 text-blue-500 dark:text-blue-300 mb-4 mx-auto transition-all duration-300 group-hover:shadow-md">
                <PaintBrush size={30} weight="duotone" />
              </div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                イラスト
              </h3>
            </Link>

            {/* モデリング */}
            <Link href="/works?category=modeling" className="group text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/60 dark:to-green-800 text-green-500 dark:text-green-300 mb-4 mx-auto transition-all duration-300 group-hover:shadow-md">
                <Cube size={30} weight="duotone" />
              </div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-green-500 dark:group-hover:text-green-300 transition-colors">
                モデリング
              </h3>
            </Link>

            {/* DTM */}
            <Link href="/works?category=music" className="group text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/60 dark:to-purple-800 text-purple-500 dark:text-purple-300 mb-4 mx-auto transition-all duration-300 group-hover:shadow-md">
                <MusicNotes size={30} weight="duotone" />
              </div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                DTM
              </h3>
            </Link>

            {/* プログラミング */}
            <Link
              href="/works?category=programming"
              className="group text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/60 dark:to-amber-800 text-amber-500 dark:text-amber-300 mb-4 mx-auto transition-all duration-300 group-hover:shadow-md">
                <Code size={30} weight="duotone" />
              </div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                プログラミング
              </h3>
            </Link>

            {/* 動画制作 */}
            <Link href="/works?category=video" className="group text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/60 dark:to-rose-800 text-rose-500 dark:text-rose-300 mb-4 mx-auto transition-all duration-300 group-hover:shadow-md">
                <VideoCamera size={30} weight="duotone" />
              </div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-rose-500 dark:group-hover:text-rose-300 transition-colors">
                動画制作
              </h3>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/works"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium transition-colors"
            >
              <span>その他のカテゴリーを見る</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-5 text-sm">
              他にもWebデザイン、VRコンテンツ、UI/UXなど様々な分野の作品が揃っています
            </p>
          </div>
        </div>
      </section>

      {/* 研究会紹介 */}
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
                    設立：2010年
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

      {/* 活動ハイライト */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            活動ハイライト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://picsum.photos/600/400?random=6"
                  alt="学園祭での展示"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar
                    size={24}
                    className="text-blue-600 dark:text-blue-400 mr-2"
                  />
                  <h3 className="text-xl font-semibold">学園祭での作品展示</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  毎年11月に開催される学園祭では、部員たちの作品を一般公開。
                  インタラクティブな体験を来場者に提供しています。
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://picsum.photos/600/400?random=7"
                  alt="ゲームジャム"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Trophy
                    size={24}
                    className="text-blue-600 dark:text-blue-400 mr-2"
                  />
                  <h3 className="text-xl font-semibold">学内ゲームジャム</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  短期間でゲームを開発するゲームジャムを定期的に開催。
                  チームで協力しながら創造力とスキルを競い合います。
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://picsum.photos/600/400?random=8"
                  alt="技術講習会"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MegaphoneSimple
                    size={24}
                    className="text-blue-600 dark:text-blue-400 mr-2"
                  />
                  <h3 className="text-xl font-semibold">技術勉強会</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  最新のデジタル制作技術を学ぶ勉強会を月に一度開催。
                  外部講師を招いたワークショップも実施しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ピックアップメンバー */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">ピックアップメンバー</h2>
            <Link
              href="/members"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              部員一覧を見る <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMembers.map((member) => (
              <Link
                key={member.id}
                href={`/members/${member.id}`}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white dark:border-gray-700 shadow-md">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-4">
                      {member.specialty}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 新着情報 */}
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
    </main>
  );
};

export default Home;
