import ExperienceList from "@components/pages/experience/ExperienceList";
import LoveToCode from "@components/pages/experience/loveCode/LoveToCode";
const list = ["Writing code", "Senior/production level", "years of experience"];

export default function ExperiencePromo() {
  return (
    <div className="w-full">
      <div className="flex w-full justify-end -mt-32 mb-32">
        <div>Coding since </div>
        <h4 className="pl-4">2013</h4>
      </div>
      <div className="flex flex-col lg:flex-row w-full mb-24 text-xl items-center">
        <div>{list[1]}</div>
        <div className={`_text-contrast text-8xl p-2`}>6</div>
        <div>{list[2]}</div>
      </div>
      <ExperienceList />
      <div className="flex w-full my-24">
        <LoveToCode />
      </div>
    </div>
  );
}
