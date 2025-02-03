import { useTranslations, useLocale } from "next-intl";
import React from "react";

const Home = () => {
  const locale = useLocale();
  const t = useTranslations("Header");

  return (
    <div>
      <p>現在のロケール：{locale}</p>
      <p>
        {locale}タイトル：{t("title")}
      </p>
    </div>
  );
};

export default Home;
