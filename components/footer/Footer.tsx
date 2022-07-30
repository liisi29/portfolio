import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="_bg-black">
      <Image
        src="/../public/assets/logo.png"
        alt="/"
        width="254"
        height="20"
      ></Image>
    </footer>
  );
}

export default Footer;
