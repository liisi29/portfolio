import React from "react";

function SkillCloud() {
  // prettier-ignore
  const skills = [
    { text: "react", year: 2018, size: "text-3xl", top: "top-96", left: "left-12" },
    { text: "javascript", year: 2015, size: "text-5xl", top: "top-40", left: "left-36" },
    { text: "typescript", year: 2016, size: "text-4xl", top: "top-[20rem]", left: "left-32" },
    { text: "aurelia.js", year: 2016, size: "text-4xl", top: "top-[28rem]", left: "left-40" },
    { text: "tailwind.css", year: "recent", size: "text-lg", top: "top-[24rem]", left: "left-80" },
    { text: "vue.js", year: "recent", size: "text-lg", top: "top-24", left: "left-48" },
    { text: "redux", year: 2021, size: "text-lg", top: "top-64", left: "left-96" },
    { text: "css", year: 2013, size: "text-2xl", top: "md:top-44 top-[16rem]", left: "left-3/4" },
    { text: "git", year: 2018, size: "text-2xl", top: "top-12", left: "left-24" },
    { text: "html", year: 2013, size: "text-lg", top: "top-28", left: "left-28" },
    { text: "jquery", year: 2013, size: "text-lg", top: "md:top-[40rem] top-32", left: "left-80 smd:left-56" },
    { text: "less", year: 2016, size: "text-xl", top: "top-36", left: "left-2" },
    { text: "mongoDB", year: 2015, size: "text-lg", top: "top-56", left: "left-10" },
    { text: "node.js", year: 2013, size: "text-lg", top: "top-52", left: "left-44" },
  ];

  return (
    <div className=" h-[30rem] md:h-full w-2/5 w-max-[30%] relative md:absolute top-[-6rem] md:top-24 left-0">
      {skills.map((el, i) => (
        <div
          style={{ animationDelay: `${i}s` }}
          key={el.text}
          className={`${el.size} ${el.top} ${el.left} transition-all _animation-fill-backwards animate-[slideFromLeft_3s_ease-in-out] text-xl text-gray-500 uppercase absolute left-0 top-0`}
        >
          #{el.text}
        </div>
      ))}
    </div>
  );
}

export default SkillCloud;
