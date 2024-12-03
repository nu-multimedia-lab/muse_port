import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserCardProps = {
  imgSrc: string | undefined;
  userId: string;
  userName: string;
  bio: string | null;
};

export const UserCard = (props: UserCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-8 rounded-3xl shadow-md border-2">
      <div className="flex items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage
            src={props.imgSrc == undefined ? "null" : props.imgSrc}
          />
          <AvatarFallback>{props.userId[0]}</AvatarFallback>
        </Avatar>
        <div className="grid grid-cols-1 gap-1">
          <p className="text-sm font-bold">@{props.userId}</p>
          <p className="text-2xl font-black">{props.userName}</p>
        </div>
      </div>
      <div className="p-4 rounded-md h-32 bg-neutral-100 dark:bg-neutral-800">
        <p>{props.bio == null ? "記述なし" : props.bio}</p>
      </div>
    </div>
  );
};
