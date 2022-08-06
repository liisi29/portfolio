import IconList from "../../elements/IconList";
import SkillCloud from "../../elements/cloud/SkillCloud";
import EduCloud from "../../elements/cloud/EduCloud";

const { greeting, iLike, iAm } = {
  greeting: "Hi, my name is",
  iLike: "I like to build things",
  iAm: "I am a front end developer",
};

export default function Main() {
  return (
    <section className="w-full h-screen text-center">
      <div className="max-w-[1240px] z-10  w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="py-4 m-auto">{greeting}</p>
          <h1>
            <span className="_text-contrast">Liisi</span> Raidaru
          </h1>
          <h3 className="uppercase mt-6">{iLike}</h3>
          <p className="py-4 mx-w-[70%] m-auto">{iAm}</p>
          <IconList />
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
