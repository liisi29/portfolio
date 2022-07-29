import { Http2ServerRequest } from "http2";
import IconList from "../elements/IconList";
import SkillCloud from "../elements/SkillCloud";

const Main = () => {
  return (
    <section className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="py-4 m-auto">Hi, my name is</p>
          <h1>Liisi Raidaru</h1>
          <h3 className="uppercase mt-6">I like to build things</h3>
          <p className="py-4 mx-w-[70%] m-auto">I am a front end developer</p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <IconList />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <SkillCloud />
      </div>
    </section>
  );
};
export default Main;
