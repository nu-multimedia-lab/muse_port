import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserDetailProps = {
  id: string;
  username: string;
  bio: string | null;
  imgSrc: string | undefined;
  joinedAt?: Date;
  tags?: string[] | null;
};

export const UserDetailElement = (props: UserDetailProps) => {
  // Format the joined date if available
  const formattedDate = props.joinedAt
    ? new Date(props.joinedAt).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="grid grid-cols-1 gap-6 p-8 rounded-3xl shadow-md border-2 bg-white dark:bg-neutral-900 w-full max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <Avatar className="h-24 w-24 border-2">
          <AvatarImage src={props.imgSrc} />
          <AvatarFallback className="text-3xl uppercase">
            {props.username[0] + (props.username[1] || "")}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold text-neutral-600 dark:text-neutral-400">
            @{props.id}
          </p>
          <h1 className="text-2xl font-black">{props.username}</h1>

          {formattedDate && (
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              登録日: {formattedDate}
            </span>
          )}

          {props.tags && props.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {props.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 rounded-md bg-neutral-100 dark:bg-neutral-800">
        <p className="whitespace-pre-line">
          {props.bio == null ? "記述なし" : props.bio}
        </p>
      </div>

      <div className="text-sm text-neutral-500 dark:text-neutral-400 text-right">
        ID: {props.id}
      </div>
    </div>
  );
};
