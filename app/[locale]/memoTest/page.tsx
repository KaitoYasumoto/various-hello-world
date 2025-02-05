import React from "react";
import MemoTest from "./components/memotest";

const Page = async () =>
  // {
  //   searchParams,
  // }: {
  //   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  // }
  {
    return (
      <div>
        <MemoTest></MemoTest>
      </div>
    );
  };

export default Page;
