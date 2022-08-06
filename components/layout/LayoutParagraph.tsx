import React, { FC, PropsWithChildren, useEffect } from "react";
import SectionHeader from "@components/elements/SectionHeader";
import { ParagraphHeaderType } from "@components/elements/dto";

export default function LayoutParagraph({
  children,
  section,
}: PropsWithChildren & { section: ParagraphHeaderType }) {
  return (
    <section className="_bg-white">
      <SectionHeader section={section} />
      <article className="flex flex-col xl:flex-row text-justify ">
        {children}
      </article>
    </section>
  );
}
