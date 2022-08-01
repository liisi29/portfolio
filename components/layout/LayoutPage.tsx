import React, { FC, PropsWithChildren, useEffect } from "react";
import NavBar from "./navbar/Navbar";
import Head from "next/head";
import SectionHeader from "@components/elements/SectionHeader";

function LayoutPage({
  children,
  section,
}: PropsWithChildren & { section: Pages }) {
  useEffect(() => {
    document?.querySelector("body")?.classList.add("_bg-dark");
    return () => document?.querySelector("body")?.classList.remove("_bg-dark");
  }, []);
  return (
    <section id="about" className="_bg-skew _bg-white">
      <SectionHeader section={section} />
      <article className="flex flex-col xl:flex-row text-justify">
        {children}
      </article>
    </section>
  );
}

export default LayoutPage;

type Pages = "webcashier";
