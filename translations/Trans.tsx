import React from "react";
import en from "translations/en.json";

function Trans({ k, page }: { k: string; page: Page }) {
  // @ts-ignore
  return <span>{en[page][k]}</span>;
}

export default Trans;

type Page = "about" | "work" | "headers" | "main" | "nav" | "footer";
