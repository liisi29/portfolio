import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./Sidebar";

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleCloseClick = () => {
    setShowSidebar(false);
  };
  const handleOpenClick = () => {
    setShowSidebar(true);
  };
  // prettier-ignore
  const pages = [
    { link: "/", text: "Home", delay: "_animation-delay-2" },
    { link: "/#about", text: "About", delay: "_animation-delay-3" },
    { link: "/#work", text: "Work", delay: "_animation-delay-4" },
    { link: "/#contact", text: "Contact", delay: "_animation-delay-5" },
  ];
  const linkedIn = <FaLinkedinIn />;
  const email = <AiOutlineMail />;
  const twitter = <FaTwitter />;
  const github = <FaGithub />;
  return (
    <header className="absolute md:relative w-full h-20 z-[100]">
      <div className="flex justify-end items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul className="hidden md:flex font-mono">
            {pages.map((p, i) => {
              return (
                <Link href={p.link} key={p.link}>
                  <li
                    className={`animate-pop _animation-fill-backwards ${p.delay} ml-10 hover:border-b _link`}
                  >
                    {p.text}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div
            className="md:hidden absolute right-4 top-4"
            onClick={handleOpenClick}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <Sidebar
        pages={pages}
        showSidebar={showSidebar}
        handleCloseClick={handleCloseClick}
      ></Sidebar>
    </header>
  );
};
export default NavBar;