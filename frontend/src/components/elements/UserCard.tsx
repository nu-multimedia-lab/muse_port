"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User } from "@phosphor-icons/react";

type UserCardProps = {
  imgSrc: string | undefined;
  userId: string;
  userName: string;
  bio: string | null;
};

export const UserCard = (props: UserCardProps) => {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16 border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <AvatarImage src={props.imgSrc} />
            <AvatarFallback className="text-xl font-medium uppercase">
              <User size={32} />
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h3 className="text-xl font-bold">{props.userName}</h3>
            <Badge variant="secondary">@{props.userId}</Badge>
          </div>
        </div>

        <div className="mt-auto">
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 h-24 overflow-y-auto text-sm text-neutral-700 dark:text-neutral-300">
            {props.bio || (
              <span className="text-neutral-500 dark:text-neutral-500 italic">
                記述なし
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
