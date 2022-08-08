import React, { PropsWithChildren } from "react";
import NavBar from "./navbar/Navbar";
import Head from "next/head";

export default function LayoutMain({ children }: PropsWithChildren) {
  return (
    <div>
      <Head>
        <title>Liisi | Front End Developer</title>
        <meta name="robots" content="noindex"></meta>
        <meta name="description" content="Love code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
    </div>
  );
}
