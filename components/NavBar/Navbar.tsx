import Image from "next/image";
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
  const pages = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "about",
      text: "About",
    },
    {
      link: "skills",
      text: "Skills",
    },
    {
      link: "work",
      text: "Work",
    },
    {
      link: "contact",
      text: "Contact",
    },
  ];
  const linkedIn = <FaLinkedinIn />;
  const email = <AiOutlineMail />;
  const twitter = <FaTwitter />;
  const github = <FaGithub />;
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo.png"
          alt="/"
          width="254"
          height="20"
        ></Image>
        <div>
          <ul className="hidden md:flex uppercase text-sm ">
            {pages.map((p, i) => {
              return (
                <Link href={p.link} key={p.link}>
                  <li className="ml-10 hover:border-b _link">{p.text}</li>
                </Link>
              );
            })}
          </ul>
          <div className="md:hidden" onClick={handleOpenClick}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <Sidebar
        pages={pages}
        showSidebar={showSidebar}
        handleCloseClick={handleCloseClick}
      ></Sidebar>
    </div>
  );
};
export default NavBar;
