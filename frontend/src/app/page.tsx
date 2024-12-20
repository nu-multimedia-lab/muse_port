import React from "react";

const Home = () => {
  return (
    <main className="h-screen grid place-items-center">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-6xl font-extrabold">開発中</h1>
        <p className="text-xl font-medium">
          リリースまでしばらくお待ちください。
        </p>
        <p className="text-xl font-medium font-mono">
          Sorry, we are under construction.
        </p>
      </div>
    </main>
  );
};

export default Home;
