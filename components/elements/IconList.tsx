import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const IconList = () => {
  const linkedIn = <FaLinkedinIn />;
  const email = <AiOutlineMail />;
  const twitter = <FaTwitter />;
  const github = <FaGithub />;
  return (
    <div className="flex items-center justify-between my-4 w-full lg:w-[80%]">
      {[linkedIn, email, twitter, github].map((el, i) => (
        <div key={i} className="_round-icon _link tracking-widest p-4 ">
          {el}
        </div>
      ))}
    </div>
  );
};
export default IconList;
