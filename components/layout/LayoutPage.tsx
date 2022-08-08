import React, { PropsWithChildren } from "react";
import SectionHeader from "@components/elements/sectionHeader/SectionHeader";
import { LayoutPageHeaderTranslation } from "@components/elements/sectionHeader/translations";

function LayoutPage({
  children,
  section,
}: PropsWithChildren & { section: LayoutPageHeaderTranslation }) {
  return (
    <section
      className="_bg-white 
      before:content-[''] 
      before:w-[1000px] before:h-[1000px]
    before:bg-slate-700 
      before:left-[-100px] before:top-[-1000px]
      before:absolute
      before:rotate-[-100deg] overflow-x-hidden lg:overflow-x-visible
    "
    >
      <SectionHeader section={section} hideForSmall="true" />
      <article className="flex flex-col lg:flex-row text-justify ">
        {children}
      </article>
    </section>
  );
}

export default LayoutPage;
