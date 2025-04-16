import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, User } from "@phosphor-icons/react/dist/ssr";

type UserProfileHeaderProps = {
  id: string;
  username: string;
  imgSrc: string | undefined;
  joinedAt?: Date;
};

/**
 * ユーザープロフィールのヘッダー部分を表示するコンポーネント
 * アバター、ユーザー名、ID、参加日を表示
 */
export const UserProfileHeader = (props: UserProfileHeaderProps) => {
  // Format the joined date if available
  const formattedDate = props.joinedAt
    ? new Date(props.joinedAt).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="flex flex-col items-center text-center mb-8 pt-6">
      <Avatar className="h-24 w-24 mb-4">
        <AvatarImage src={props.imgSrc} />
        <AvatarFallback className="text-3xl uppercase">
          <User size={48} />
        </AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-bold mb-1">{props.username}</h1>
      <Badge variant="secondary">@{props.id}</Badge>　
      {formattedDate && (
        <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          <Calendar size={16} className="mr-1" />
          <span>{formattedDate}から参加</span>
        </div>
      )}
    </div>
  );
};
