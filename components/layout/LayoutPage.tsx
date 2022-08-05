import React, { FC, PropsWithChildren, useEffect } from "react";
import NavBar from "./navbar/Navbar";
import Head from "next/head";
import SectionHeader from "@components/elements/SectionHeader";

function LayoutPage({
  children,
  section,
}: PropsWithChildren & { section: Pages }) {
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
      <div className="test">.</div>
      <SectionHeader section={section} />
      <article className="flex flex-col xl:flex-row text-justify ">
        {children}
      </article>
    </section>
  );
}

export default LayoutPage;

type Pages = "webcashier";
