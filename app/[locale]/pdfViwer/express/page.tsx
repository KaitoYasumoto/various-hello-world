"use client";

import { Suspense } from "react";
import Express from "./components/express";

const Page = () => {
  return (
    <div>
      <Suspense>
        <Express />
      </Suspense>
    </div>
  );
};

export default Page;
