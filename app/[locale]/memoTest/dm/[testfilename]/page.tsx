import React from "react";
import DmTest from "./components/dmtest";
import { headers } from "next/headers";

const Page = async () => {
  const head = await headers();
  const host = head.get("host");

  return (
    <div>
      <p>サーバーコンポーネント</p>
      <p>ヘッダー情報：{host}</p>

      <p>---以下client---</p>
      <DmTest></DmTest>
    </div>
  );
};

export default Page;
