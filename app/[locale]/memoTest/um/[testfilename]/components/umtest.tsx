"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Umtest = () => {
  const path = usePathname();

  return (
    <div className="h-60 overflow-scroll">
      <p>現在のpath：{path}</p>
    </div>
  );
};

export default Umtest;
