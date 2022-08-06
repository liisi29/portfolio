import React, { PropsWithChildren } from "react";
import SectionHeader from "@components/elements/sectionHeader/SectionHeader";
import { PageHeaderType } from "@components/elements/dto";

function LayoutPage({
  children,
  section,
}: PropsWithChildren & { section: PageHeaderType }) {
  return (
    <section
      className="_bg-white before:content-[''] 
    before:w-[1000px] before:h-[1000px]
    before:bg-slate-700 
    before:left-[-100px] before:top-[-1000px]
    before:absolute
    before:rotate-[-100deg]
    "
    >
      <SectionHeader section={section} />
      <article className="flex flex-col xl:flex-row text-justify ">
        {children}
      </article>
    </section>
  );
}

export default LayoutPage;
