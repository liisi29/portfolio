import { Http2ServerRequest } from "http2";
import IconList from "../elements/IconList";
import SkillCloud from "../elements/cloud/SkillCloud";
import EduCloud from "../elements/cloud/EduCloud";

function Main() {
  return (
    <section className="w-full h-screen text-center">
      <div className="max-w-[1240px] z-10  w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="py-4 m-auto">Hi, my name is</p>
          <h1>
            <span className="_text-contrast">Liisi</span> Raidaru
          </h1>
          <h3 className="uppercase mt-6">I like to build things</h3>
          <p className="py-4 mx-w-[70%] m-auto">I am a front end developer</p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <IconList />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <SkillCloud />
      </div>
      <div className="hidden lg:block">
        <EduCloud />
      </div>
    </section>
  );
}
export default Main;
