"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Dmtest = () => {
  const path = usePathname();

  return (
    <div className="h-60 overflow-scroll">
      <p>現在のpath：{path}</p>
    </div>
  );
};

export default Dmtest;
