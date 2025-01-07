import { getAllArticles } from "@/lib/apis/article";
import { getAllUsers } from "@/lib/apis/user";
import { Article, User } from "@/lib/types";

export const ConsoleDebug = async () => {
  const users: User[] = await getAllUsers();
  console.log(users);

  const articles: Article[] = await getAllArticles();
  console.log(articles);

  return (
    <div>
      <h1>Console Debug</h1>
      <p>Check the console for the debug information.</p>
    </div>
  );
};
