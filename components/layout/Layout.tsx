import React, { FC, PropsWithChildren } from "react";
import NavBar from "./navbar/Navbar";
import Head from "next/head";

function Layout({ children }: PropsWithChildren) {
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

export default Layout;
