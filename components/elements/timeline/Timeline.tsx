import React from "react";
import { blocks, IBlock } from "./data";

const contentBg = "bg-transparent";
const contentShadow = ""; // "shadow-md";
const textColor = {
  h1: "text-gray-800",
  h2: "text-gray-600",
  p: "text-gray-600",
};

function Timeline() {
  // https://tailwind-elements.com/docs/standard/components/timeline/
  // https://tailwindcomponents.com/component/vertical-timeline

  return (
    <div className="w-full">
      <div
        className={`flex flex-col md:grid grid-cols-9 mx-auto p-2 ${textColor.p}`}
      >
        {blocks.map((el, i) => {
          return <Content key={i} props={el} />;
        })}
      </div>
    </div>
  );
}

export default Timeline;

function Content({ props }: { props: any }) {
  const { side } = props;

  const iconAndLine = (
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className={`h-full w-1 _bg-contrast pointer-events-none`}></div>
      </div>
      <div
        className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full _bg-contrast`}
      ></div>
    </div>
  );
  const container = "flex md:contents";
  const element = <Element props={props} />;
  const left = (
    <div className={`${container} flex-row-reverse`}>
      {element}
      {iconAndLine}
    </div>
  );
  const right = (
    <div className={`${container}`}>
      {iconAndLine}
      {element}
    </div>
  );

  return side === "left" ? left : right;
}

function Element({ props }: { props: Partial<IBlock> }) {
  const { title, body, side, date, company } = props;
  const col =
    side === "left" ? "col-start-1 col-end-5" : "col-start-6 col-end-10";
  return (
    <div
      className={`${col} ${contentBg} ${contentShadow} p-4 rounded-xl my-4 mr-auto relative`}
    >
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <div className="absolute top-[-1rem] right-0 text-right text-gray-500">
        <h4 className="text-sm">{company}</h4>
        <h4 className="text-sm">{date}</h4>
      </div>

      <div className="leading-tight text-justify">
        <ul>
          {(body || []).map((t, i) => (
            <li
              key={`time${i}`}
              className={`before:content-["▶"] before:_text-contrast before:absolute before:left-0 before:top-0 relative pl-8`}
            >
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
}
