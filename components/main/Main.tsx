import { Http2ServerRequest } from "http2";
import IconList from "../iconList/IconList";
import SkillCloud from "../skills/SkillCloud";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1>
            Hi, I'm <span className="text-[red]">Liisi</span>
          </h1>
          <h3 className="uppercase mt-6">I like to build things</h3>
          <h3 className="uppercase mt-6">i am a front end developer</h3>
          <p className="py-4 text-gray-600 mx-w-[70%] m-auto">
            I am a front end dafdfdsf fdfds lorem ipsum
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <IconList />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <SkillCloud />
      </div>
    </div>
  );
};
export default Main;
