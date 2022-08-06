import React from "react";
import {
  SectionHeaderTranslation,
  sectionHeaderTranslations,
} from "./translations";

export default function SectionHeader({
  section,
  sectionColor,
}: {
  section: SectionHeaderTranslation;
  sectionColor?: "light" | "dark";
}) {
  const color = sectionColor === "dark" ? "text-white" : "";
  return (
    <div
      className={`hidden lg:block uppercase text-xl tracking-wider ${color} absolute top-1/2 left-0 -rotate-90 w-[8rem] max-w-[8rem] overflow-x-visible whitespace-nowrap`}
    >
      {sectionHeaderTranslations[section]}
    </div>
  );
}
