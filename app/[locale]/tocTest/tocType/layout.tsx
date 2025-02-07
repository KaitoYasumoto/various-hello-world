"use client";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const path = usePathname();
  const router = useRouter();
  const [testData, setTestData] = useState<Record<string, string>[] | null>(
    null
  );

  const search = searchParams.get("q");
  const pathname = path.slice(0, 16);

  useEffect(() => {
    (async () => {
      const data = await getData(search);
      setTestData(data);
    })();

    console.log("tocのlayout レンダリングした");
  }, [pathname, search]);

  const formsubmit = async (from: FormData) => {
    const value = from.get("search");

    router.push(`${path}?q=${value}`);

    return;
  };

  return (
    <>
      <div className="flex">
        <div className="h-60 w-60 border-r">
          <div>
            <div>
              <form action={formsubmit}>
                <label htmlFor="search">検索</label>
                <input
                  name="search"
                  type="text"
                  id="search"
                  className="border"
                />
              </form>
            </div>
          </div>
          <div className="w-full h-60 overflow-scroll">
            {testData ? (
              <Accordion
                type="single"
                collapsible
                defaultValue="content18"
                className="px-2 w-full"
              >
                {testData.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <AccordionItem
                        value={`${item.content}${index}`}
                        id={`${item.content}${index}`}
                        className="w-full"
                      >
                        <AccordionTrigger>{item.trigger}</AccordionTrigger>
                        <AccordionContent className="bg-blue-200 pl-2 w-full">
                          <Link href={`${item.content}`}>
                            {`${item.content}`} →
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    </Fragment>
                  );
                })}
              </Accordion>
            ) : null}
          </div>
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}

const getData = (search: string | null) => {
  const result = search ? quaryItems : items;
  console.log("getData", result);

  return result;
};

const items = [
  {
    trigger: "en items",
    content: "/en/tocTest/tocType",
  },
  {
    trigger: "en items /testtime2",
    content: "/en/tocTest/tocType/testtime2",
  },
  {
    trigger: "en items /testtime23",
    content: "/en/tocTest/tocType/testtime3",
  },
  {
    trigger: "en items",
    content: "/en/tocTest/tocType",
  },
  {
    trigger: "en items /testtime2",
    content: "/en/tocTest/tocType/testtime2-2",
  },
  {
    trigger: "en items /testtime23",
    content: "/en/tocTest/tocType/testtime3-2",
  },
  {
    trigger: "ja items",
    content: "/ja/tocTest/tocType",
  },
  {
    trigger: "ja items/testtime2",
    content: "/ja/tocTest/tocType/testtime2",
  },
  {
    trigger: "ja items/testtime23",
    content: "/ja/tocTest/tocType/testtime3",
  },
  {
    trigger: "ja items",
    content: "/ja/tocTest/tocType",
  },
  {
    trigger: "ja items/testtime2",
    content: "/ja/tocTest/tocType/testtime2-2",
  },
  {
    trigger: "ja items/testtime23",
    content: "/ja/tocTest/tocType/testtime3-2",
  },
];

const quaryItems = [
  {
    trigger: "en quaryItems",
    content: "/en/tocTest/tocType?q=testQuary",
  },
  {
    trigger: "en quaryItems /testtime2",
    content: "/en/tocTest/tocType/testtime2?q=testQuary",
  },
  {
    trigger: "en quaryItems /testtime23",
    content: "/en/tocTest/tocType/testtime3?q=testQuary",
  },
  {
    trigger: "en quaryItems",
    content: "/en/tocTest/tocType?q=testQuary",
  },
  {
    trigger: "en quaryItems /testtime2",
    content: "/en/tocTest/tocType/testtime2-2?q=testQuary",
  },
  {
    trigger: "en quaryItems /testtime23",
    content: "/en/tocTest/tocType/testtime3-2?q=testQuary",
  },
  {
    trigger: "ja quaryItems",
    content: "/ja/tocTest/tocType?q=testQuary",
  },
  {
    trigger: "ja quaryItems/testtime2",
    content: "/ja/tocTest/tocType/testtime2?q=testQuary",
  },
  {
    trigger: "ja quaryItems/testtime23",
    content: "/ja/tocTest/tocType/testtime3?q=testQuary",
  },
  {
    trigger: "ja quaryItems",
    content: "/ja/tocTest/tocType?q=testQuary",
  },
  {
    trigger: "ja quaryItems/testtime2",
    content: "/ja/tocTest/tocType/testtime2-2?q=testQuary",
  },
  {
    trigger: "ja quaryItems/testtime23",
    content: "/ja/tocTest/tocType/testtime3-2?q=testQuary",
  },
  {
    trigger: "ja items",
    content: "/ja/tocTest/tocType",
  },
];
