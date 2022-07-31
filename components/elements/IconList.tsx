import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function IconList() {
  const linkedIn = <FaLinkedinIn />;
  const email = <AiOutlineMail />;
  const twitter = <FaTwitter />;
  const github = <FaGithub />;
  // prettier-ignore
  const links = [
    {icon: linkedIn, href: "https://www.linkedin.com/in/liisi-raidaru-4981621a4"},
    {icon: email, href: "mailto:liisi.raidaru@gmail.com"},
    {icon: twitter, href: "https://twitter.com/liisilais"},
    {icon: github, href: "https://github.com/liisi29"},
  ]
  return (
    <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
      <div className="flex items-center justify-between my-4 w-full lg:w-[80%]">
        {links.map((link, i) => (
          <div key={i} className="_round-icon _link tracking-widest p-4 ">
            <a href={link.href}>{link.icon}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default IconList;
