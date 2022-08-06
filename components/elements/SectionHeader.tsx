import React from "react";
import Trans from "translations/Trans";
import { SectionHeaderType } from "./dto";

export default function SectionHeader({
  section,
  sectionColor,
}: {
  section: SectionHeaderType;
  sectionColor?: "light" | "dark";
}) {
  const color = sectionColor === "dark" ? "text-white" : "";
  return (
    <div
      className={`hidden lg:block uppercase text-xl tracking-wider ${color} absolute top-1/2 left-0 -rotate-90 w-[8rem] max-w-[8rem] overflow-x-visible whitespace-nowrap`}
    >
      <Trans page="headers" k={section} />
    </div>
  );
}
