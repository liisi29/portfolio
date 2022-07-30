import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import IconList from "../elements/IconList";

export interface IProps {
  showSidebar: boolean;
  handleCloseClick: () => void;
  pages: { link: string; text: string }[];
}

const Sidebar = ({ showSidebar, handleCloseClick, pages }: IProps) => {
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
        <div className="border-b border-gray-300 my-4">
          <p className="w-[85%] md:w-[90%] py-4">
            Let{encodeURI("'")}s build stuff
          </p>
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
          <div className="pt-40">
            <p className="uppercase tracking-widget">
              Let{encodeURI("'")}s connect
            </p>
            <IconList />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
