import React, { PropsWithChildren } from "react";
import SectionHeader from "@components/elements/sectionHeader/SectionHeader";
import { LayoutParagraphHeaderTranslation } from "@components/elements/sectionHeader/translations";

export default function LayoutParagraph({
  children,
  section,
}: PropsWithChildren & { section: LayoutParagraphHeaderTranslation }) {
  return (
    <section className="_bg-white">
      <SectionHeader section={section} />
      <article className="flex flex-col xl:flex-row text-justify ">
        {children}
      </article>
    </section>
  );
}
