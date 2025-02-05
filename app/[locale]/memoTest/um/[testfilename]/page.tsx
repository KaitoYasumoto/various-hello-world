import React from "react";
import UmTest from "./components/umtest";
import { headers } from "next/headers";

const Page = async () => {
  const head = await headers();
  const host = head.get("host");

  return (
    <div>
      <p>サーバーコンポーネント</p>
      <p>ヘッダー情報：{host}</p>

      <p>---以下client---</p>
      <UmTest></UmTest>
    </div>
  );
};

export default Page;
