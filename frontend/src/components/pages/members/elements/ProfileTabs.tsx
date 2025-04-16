import { ReactNode } from "react";

type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

type ProfileTabsProps = {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  tabs: TabItem[];
};

/**
 * プロフィール画面のタブナビゲーションコンポーネント
 * タブの切り替え機能を提供します
 */
export const ProfileTabs = (props: ProfileTabsProps) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      {/* タブナビゲーション */}
      <div className="flex border-b">
        {props.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-medium ${
              props.activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                : "text-gray-500 hover:text-blue-500 transition-colors"
            }`}
            onClick={() => props.onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* コンテンツエリア */}
      <div className="p-6">
        {props.tabs.find((tab) => tab.id === props.activeTab)?.content}
      </div>
    </div>
  );
};
