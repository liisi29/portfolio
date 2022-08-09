import CounterWithText from "@components/pages/experience/counterWithText/CounterWithText";
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
      <div className="flex w-full mb-24">
        <CounterWithText text1={list[1]} text2={list[2]} years={"6"} />
      </div>
      <ExperienceList />
      <div className="flex w-full my-24">
        <LoveToCode />
      </div>
    </div>
  );
}
