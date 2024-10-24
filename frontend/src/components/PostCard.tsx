"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type PostCardProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const PostCard = (props: PostCardProps) => {
  const img: string = `https://picsum.photos/800/600?random=${props.id}`;

  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <Image
          src={img}
          alt="Random Image"
          width={800}
          height={600}
          className="w-full aspect-video rounded-2xl mb-4"
        />
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{props.body}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="h-16 aspect-square rounded-full bg-neutral-500" />
          <div>dummy {props.userId}</div>
        </div>
        2024/10/24
      </CardFooter>
    </Card>
  );
};
