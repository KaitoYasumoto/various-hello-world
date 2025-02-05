"use client";
import { useLayoutEffect, Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type accordionType = {
  trigger: string;
  content: string;
};

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  const pathname = path.slice(0, 16);
  const [accordionItem, setAccordionItem] = useState<accordionType[] | null>(
    null
  );

  useLayoutEffect(() => {
    (async () => {
      const data = await getData(pathname);

      setAccordionItem(data);
    })();
  }, [pathname]);

  return (
    <div>
      <div className="flex">
        <div className="h-60 overflow-scroll">
          {accordionItem ? (
            <Accordion
              type="single"
              collapsible
              defaultValue="content18"
              className="w-70"
            >
              {accordionItem.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <AccordionItem
                      value={`${item.content}${index}`}
                      id={`${item.content}${index}`}
                    >
                      <AccordionTrigger
                        className={`${
                          item.content.includes("/en/memoTest/dm") &&
                          "bg-green-100"
                        }
                        ${
                          item.content.includes("/en/memoTest/um") &&
                          "bg-red-100"
                        }
                          ${
                            item.content.includes("/ja/memoTest/um") &&
                            "bg-orange-100"
                          }`}
                      >
                        {item.trigger} {item.content} ⬇︎
                      </AccordionTrigger>
                      <AccordionContent className="bg-blue-200">
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

        <div id="center-contents">{children}</div>
      </div>
    </div>
  );
}

const getData = (pathname: string) => {
  const result = pathname.includes("en");

  return result ? items : items2;
};

const items = [
  {
    trigger: "trigger1",
    content: "/ja/memoTest/um/testtime1",
  },
  {
    trigger: "trigger2",
    content: "/en/memoTest/um/testtime2",
  },
  {
    trigger: "trigger3",
    content: "/en/memoTest/dm/testtime3",
  },
  {
    trigger: "trigger4",
    content: "/ja/memoTest/um/testtime1",
  },
  {
    trigger: "trigger5",
    content: "/en/memoTest/um/testtime2",
  },
  {
    trigger: "trigger6",
    content: "/en/memoTest/dm/testtime3",
  },
  {
    trigger: "trigger7",
    content: "/ja/memoTest/um/testtime1-2",
  },
  {
    trigger: "trigger8",
    content: "/en/memoTest/um/testtime2-2",
  },
  {
    trigger: "trigger9",
    content: "/en/memoTest/dm/testtime3-2",
  },
  {
    trigger: "trigger10",
    content: "content1",
  },
  {
    trigger: "trigger1",
    content: "content1",
  },
  {
    trigger: "trigger1",
    content: "content1",
  },
  {
    trigger: "trigger1",
    content: "content1",
  },
];

const items2 = [
  {
    trigger: "items1",
    content: "/ja/memoTest/um/testtime1",
  },
  {
    trigger: "items2",
    content: "/en/memoTest/um/testtime2",
  },
  {
    trigger: "items3",
    content: "/en/memoTest/dm/testtime3",
  },
  {
    trigger: "items4",
    content: "/ja/memoTest/um/testtime1",
  },
  {
    trigger: "items5",
    content: "/en/memoTest/um/testtime2",
  },
  {
    trigger: "items6",
    content: "/en/memoTest/dm/testtime3",
  },
  {
    trigger: "items7",
    content: "/ja/memoTest/um/testtime1-2",
  },
  {
    trigger: "items8",
    content: "/en/memoTest/um/testtime2-2",
  },
  {
    trigger: "items9",
    content: "/en/memoTest/dm/testtime3-2",
  },
  {
    trigger: "items10",
    content: "content1",
  },
  {
    trigger: "items1",
    content: "content1",
  },
  {
    trigger: "items1",
    content: "content1",
  },
  {
    trigger: "items1",
    content: "content1",
  },
];
