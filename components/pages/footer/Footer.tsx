import React from "react";
import Image from "next/image";
import Trans from "translations/Trans";

function Footer() {
  return (
    <footer className="_bg-black flex justify-between text-gray-500 px-2">
      <div>
        <Trans page="footer" k="builtBy" />
      </div>
      <div>
        <span className="text-gray-500">Head</span>
        <span className="text-gray-300">Script</span>
        <span className="text-gray-500">Id</span>
      </div>
    </footer>
  );
}

export default Footer;
