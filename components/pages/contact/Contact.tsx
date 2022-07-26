import IconList from "@components/elements/IconList";
import SectionHeader from "@components/elements/sectionHeader/SectionHeader";
import React, { useState } from "react";
import BigArrow from "../../elements/BigArrow";

export default function Contact() {
  return (
    <section id="contact" className="_bg-dark">
      <SectionHeader
        section="contact"
        sectionColor="dark"
        hideForSmall="true"
      />
      <BigArrow />
      <article className="max-w-[1240px] z-10  w-full h-full mx-auto text-center">
        <h2 className="py-2">Liisi Raidaru</h2>
        <IconList />
        liisi.raidaru@gmail.com
      </article>
    </section>
  );
}
