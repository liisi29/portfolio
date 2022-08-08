import React from "react";
import {
  SectionHeaderTranslation,
  sectionHeaderTranslations,
} from "./translations";

export default function SectionHeader({
  section,
  sectionColor,
  hideForSmall,
}: {
  section: SectionHeaderTranslation;
  sectionColor?: "light" | "dark";
  hideForSmall?: "true";
}) {
  const color = sectionColor === "dark" ? "text-white" : "";
  return (
    <div
      className={`${
        hideForSmall ? "hidden lg:block" : ""
      } block uppercase text-xl tracking-wider ${color} lg:absolute lg:top-1/2 lg:left-0 lg:-rotate-90 w-[8rem] max-w-[8rem] overflow-x-visible whitespace-nowrap`}
    >
      {sectionHeaderTranslations[section]}
    </div>
  );
}
