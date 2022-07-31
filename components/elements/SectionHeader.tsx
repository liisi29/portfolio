import React from "react";
import Trans from "translations/Trans";

function SectionHeader({
  section,
  sectionColor,
}: {
  section: "about" | "work" | "contact";
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

export default SectionHeader;
