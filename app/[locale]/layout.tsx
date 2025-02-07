import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (
    !routing.locales.includes(locale as "en" | "de" | "ja" | "zh-CN" | "zh-TW")
  ) {
    notFound();
  }

  const messages = await getMessages();

  const sideMenuData = [
    { name: "home →", link: "/" },
    { name: "express PDF Viewer →", link: "/pdfViwer/express" },
    { name: "toc Test →", link: "/en/tocTest/tocType/test" },
  ];

  setRequestLocale(locale);

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <div className="flex">
          <div className="border">
            <div className="p-3">
              <Link href={"/en"} className="underline m-2">
                en
              </Link>
              /
              <Link href={"/ja"} className="underline m-2">
                ja
              </Link>
            </div>
            <nav>
              <ul>
                {sideMenuData.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link} className="underline m-2">
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <main className="w-full">{children}</main>
        </div>
      </NextIntlClientProvider>
    </>
  );
}
