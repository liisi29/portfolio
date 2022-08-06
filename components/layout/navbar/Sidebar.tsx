import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import IconList from "../../elements/IconList";

const { contact } = {
  contact: "Contact",
};

export interface IProps {
  showSidebar: boolean;
  handleCloseClick: () => void;
  pages: { link: string; text: string }[];
}

function Sidebar({ showSidebar, handleCloseClick, pages }: IProps) {
  const linkedIn = <FaLinkedinIn />;
  const email = <AiOutlineMail />;
  const twitter = <FaTwitter />;
  const github = <FaGithub />;
  const animation = "ease-in duration-500";
  const position = "fixed top-0";
  return (
    <>
      <div
        className={`left-0 h-screen bg-black/70 ${position} ${animation} 
        ${showSidebar ? "w-full" : "w-0"}`}
      ></div>
      <div
        className={`h-screen _bg-white p-10 sm:w-[60%] md:w-[45%] ${animation} ${position} ${
          showSidebar ? "right-0 w-[75%]" : "right-[-100%]"
        }`}
      >
        <div className="flex w-full justify-end">
          <div className="_round-icon p-3 _link" onClick={handleCloseClick}>
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className="uppercase text-center">
            {pages.map((p, i) => {
              return (
                <Link href={p.link} key={p.link}>
                  <li className="py-4 _link">{p.text}</li>
                </Link>
              );
            })}
          </ul>
          <div className="pt-10 md:pt-40">
            <p className="hidden md:block tracking-widget">{contact}</p>
            <IconList />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
