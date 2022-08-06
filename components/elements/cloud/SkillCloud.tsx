import React from "react";
import Cloud, { ICloudItem } from "./Cloud";
import { skills as raw } from "@data/skills";

function SkillCloud() {
  // prettier-ignore
  const skills: ICloudItem[] = [
    Object.assign(raw.react, { size: "text-3xl", top: "top-96", horizontal: "left-12" }),
    Object.assign(raw.javascript, { size: "text-5xl", top: "top-40", horizontal: "left-36" }),
    Object.assign(raw.typescript, { size: "text-4xl", top: "top-[20rem]", horizontal: "left-32" }),
    Object.assign(raw.aurelia, { size: "text-4xl", top: "top-[28rem]", horizontal: "left-40" }),
    Object.assign(raw.bootstrap, { size: "text-3xl", top: "top-24", horizontal: "left-80 lg:left-68" }),
    Object.assign(raw.tailwind, { size: "text-lg", top: "top-[14rem]", horizontal: "left-80" }),
    Object.assign(raw.nextjs, { size: "text-lg", top: "top-24", horizontal: "left-48" }),
    Object.assign(raw.redux, { size: "text-lg", top: "top-[18rem]", horizontal: "left-96" }),
    Object.assign(raw.css, { size: "text-2xl", top: "top-[16rem] lg:top-12", horizontal: "left-80 lg:left-[30rem]" }),
    Object.assign(raw.git, { size: "text-2xl", top: "top-12", horizontal: "left-24" }),
    Object.assign(raw.html, { size: "text-lg", top: "top-28", horizontal: "left-28" }),
    Object.assign(raw.jquery, { size: "text-lg", top: "lg:top-[16rem] top-32", horizontal: "left-80 lg:left-56" }),
    Object.assign(raw.less, { size: "text-xl", top: "top-36", horizontal: "left-2" }),
    Object.assign(raw.mongo, { size: "text-lg", top: "top-56", horizontal: "left-10" }),
    Object.assign(raw.node, { size: "text-lg", top: "top-52", horizontal: "left-44" }),
  ];

  return <Cloud items={skills} from="left" />;
}

export default SkillCloud;
