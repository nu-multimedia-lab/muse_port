import { ReactNode } from "react";

type ClubStatItemProps = {
  icon: ReactNode;
  label: string;
};

/**
 * サークル統計情報アイテムを表示するコンポーネント
 * アイコンと統計情報のラベルを表示します
 */
export const ClubStatItem = (props: ClubStatItemProps) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
        {props.icon}
      </div>
      <span className="text-gray-700 dark:text-gray-300">{props.label}</span>
    </div>
  );
};
