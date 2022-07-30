import React from "react";
import Cloud, { ICloudItem } from "./Cloud";

function EduCloud() {
  // prettier-ignore
  const skills: ICloudItem[] = [
    { text: "good vibes", size: "text-3xl", top: "top-96", horizontal: "right-12" },
    { text: "architecture", size: "text-3xl", top: "top-40", horizontal: "right-36" },
    { text: "clean code", size: "text-4xl", top: "top-[20rem]", horizontal: "right-32" },
    { text: "solid", size: "text-4xl", top: "top-[28rem]", horizontal: "right-40" },
    { text: "dry", size: "text-3xl", top: "top-24", horizontal: "right-80 lg:right-68" },
    { text: "maintainablity", size: "text-lg", top: "top-[14rem]", horizontal: "right-80" },
    { text: "scalability", size: "text-lg", top: "top-[14rem]", horizontal: "right-[2rem]" },
    { text: "systems", size: "text-lg", top: "top-[18rem]", horizontal: "right-96" },
    { text: "team work", size: "text-5xl", top: "top-[16rem] lg:top-12", horizontal: "right-80 lg:right-[30rem]" },
    { text: "fellow freaks ♥", size: "text-2xl", top: "top-12", horizontal: "right-24" },
    { text: "puzzles", size: "text-lg", top: "top-28", horizontal: "rigth-28" },
  ];

  return <Cloud items={skills} from="right" />;
}

export default EduCloud;
