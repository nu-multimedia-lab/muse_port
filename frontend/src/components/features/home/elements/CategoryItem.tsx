import Link from "next/link";
import {
  iconComponents,
  colorClasses,
  type ColorName,
  type IconName,
} from "@/lib/utils/categoryUtils";

type CategoryItemProps = {
  id: string;
  name: string;
  icon: IconName;
  color: ColorName;
};

/**
 * カテゴリーアイテムを表示するコンポーネント
 * アイコンとテキストを色付きで表示
 */
export const CategoryItem = (props: CategoryItemProps) => {
  const IconComponent = iconComponents[props.icon];
  const colorClass = colorClasses[props.color];

  return (
    <Link href={`/works?category=${props.id}`} className="group text-center">
      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colorClass.bg} ${colorClass.text} mb-4 mx-auto`}
      >
        <IconComponent size={30} weight="duotone" />
      </div>
      <h3
        className={`font-medium text-gray-800 dark:text-gray-200 ${colorClass.hover} transition-colors`}
      >
        {props.name}
      </h3>
    </Link>
  );
};
