import { SectionOfMainPage } from "@components/pages/dto";
import React from "react";
import en from "translations/en.json";

export default function Trans({
  k,
  page,
}: {
  k: string;
  page: SectionOfMainPage;
}) {
  // @ts-ignore
  return <span>{en[page][k]}</span>;
}
