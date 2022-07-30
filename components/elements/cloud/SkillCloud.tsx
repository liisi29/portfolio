import React from "react";
import Cloud, { ICloudItem } from "./Cloud";

function SkillCloud() {
  // prettier-ignore
  const skills: ICloudItem[] = [
    { text: "react", year: 2018, size: "text-3xl", top: "top-96", horizontal: "left-12" },
    { text: "javascript", year: 2015, size: "text-5xl", top: "top-40", horizontal: "left-36" },
    { text: "typescript", year: 2016, size: "text-4xl", top: "top-[20rem]", horizontal: "left-32" },
    { text: "aurelia.js", year: 2016, size: "text-4xl", top: "top-[28rem]", horizontal: "left-40" },
    { text: "bootstrap", year: 2013, size: "text-3xl", top: "top-24", horizontal: "left-80 lg:left-68" },
    { text: "tailwind.css", year: "recent", size: "text-lg", top: "top-[14rem]", horizontal: "left-80" },
    { text: "vue.js", year: "recent", size: "text-lg", top: "top-24", horizontal: "left-48" },
    { text: "redux", year: 2021, size: "text-lg", top: "top-[18rem]", horizontal: "left-96" },
    { text: "css", year: 2013, size: "text-2xl", top: "top-[16rem] lg:top-12", horizontal: "left-80 lg:left-[30rem]" },
    { text: "git", year: 2018, size: "text-2xl", top: "top-12", horizontal: "left-24" },
    { text: "html", year: 2013, size: "text-lg", top: "top-28", horizontal: "left-28" },
    { text: "jquery", year: 2013, size: "text-lg", top: "lg:top-[16rem] top-32", horizontal: "left-80 lg:left-56" },
    { text: "less", year: 2016, size: "text-xl", top: "top-36", horizontal: "left-2" },
    { text: "mongoDB", year: 2015, size: "text-lg", top: "top-56", horizontal: "left-10" },
    { text: "node.js", year: 2013, size: "text-lg", top: "top-52", horizontal: "left-44" },
  ];

  return <Cloud items={skills} from="left" />;
}

export default SkillCloud;
