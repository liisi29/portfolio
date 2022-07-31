import React from "react";
import Cloud, { ICloudItem } from "./Cloud";

function EduCloud() {
  // prettier-ignore
  const skills: ICloudItem[] = [
    { text: "good vibes", size: "text-3xl", top: "bottom-[24rem]", horizontal: "right-[3rem]" },
    { text: "architecture", size: "text-3xl", top: "bottom-[10rem]", horizontal: "right-[9rem]" },
    { text: "clean code", size: "text-4xl", top: "bottom-[20rem]", horizontal: "right-[8rem]" },
    { text: "solid", size: "text-4xl", top: "bottom-[28rem]", horizontal: "right-[10rem]" },
    { text: "scalability", size: "text-lg", top: "bottom-[32rem]", horizontal: "right-[20rem] lg:right-[18rem]" },
    { text: "dry", size: "text-3xl", top: "bottom-[14rem]", horizontal: "right-[20rem]" },
    { text: "maintainablity", size: "text-lg", top: "bottom-[14rem]", horizontal: "right-[2rem]" },
    { text: "systems", size: "text-lg", top: "bottom-[18rem]", horizontal: "right-[24rem]" },
    { text: "team work", size: "text-5xl", top: "bottom-[6rem]", horizontal: "right-[20rem] lg:right-[20rem]" },
    { text: "fellow freaks ♥", size: "text-2xl", top: "bottom-[3rem]", horizontal: "right-[6rem]" },
    { text: "puzzles", size: "text-lg", top: "bottom-[7rem]", horizontal: "rigth-[7rem]" },
  ];

  return <Cloud items={skills} from="right" />;
}

export default EduCloud;
