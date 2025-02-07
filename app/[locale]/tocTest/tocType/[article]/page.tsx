import React from "react";
import ArticleTest from "./components/articleTest";
import { headers } from "next/headers";

const Page = async () => {
  const head = await headers();
  const host = head.get("host");

  return (
    <div>
      <p>サーバーコンポーネント</p>
      <p>ヘッダー情報：{host}</p>

      <p>---以下client---</p>
      <ArticleTest></ArticleTest>
    </div>
  );
};

export default Page;
