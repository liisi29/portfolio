import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
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
          <ul className="hidden md:flex">
            {pages.map((p, i) => {
              return (
                <Link href={p.link} key={p.link}>
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    {p.text}
                  </li>
                </Link>
              );
            })}
          </ul>

          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
