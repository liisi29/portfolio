import Link from "next/link";
import React from "react";
import { blocks, IBlock } from "./cv";
import BlockListWithTriangles from "../BlockListWithTriangles";
import InlineListWithDots from "../InlineListWithDots";

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
        className={`flex flex-col xl:grid grid-cols-9 mx-auto p-2 ${textColor.p}`}
      >
        {blocks.map((el, i) => {
          return <Content key={i} props={el} />;
        })}
      </div>
    </div>
  );
}

export default Timeline;

function BubbleAndLine({ show }: { show: "always" | "xl" | "sm" }) {
  const container =
    "col-start-5 col-end-6 mx-auto relative mr-10 contents xl:block";
  const inside1 = (
    <div className="h-full w-6 flex items-center justify-center">
      <div className={`h-full w-1 _bg-contrast pointer-events-none`}></div>
    </div>
  );
  const bubble = (
    <div
      className={`bubble w-6 h-6 top-1/2 -mt-3 rounded-full _bg-contrast mx-auto`}
    ></div>
  );
  const showClassName = `
  ${show === "always" ? "block" : ""} 
  ${show === "xl" ? "hidden xl:block" : ""} 
  ${show === "sm" ? "block xl:hidden" : ""}`;
  const iconAndLine = (
    <div className={`bubble-and-line-container ${container} ${showClassName}`}>
      {inside1}
      {bubble}
    </div>
  );
  return iconAndLine;
}

function Content({ props }: { props: any }) {
  const { side } = props;
  const container = "flex  contents";
  const element = <Element props={props} />;
  const left = (
    <div className={`${container} flex-row-reverse time-line-left`}>
      {element}
      <BubbleAndLine show="always" />
    </div>
  );
  const right = (
    <div className={`${container} time-line-right`}>
      <BubbleAndLine show="xl" />
      {element}
      <BubbleAndLine show="sm" />
    </div>
  );

  return side === "left" ? left : right;
}

function Element({ props }: { props: Partial<IBlock> }) {
  const { title, body, side, date, company, more } = props;
  const col =
    side === "left" ? "col-start-1 col-end-5" : "col-start-6 col-end-10";
  return (
    <div
      className={`${col} ${contentBg} ${contentShadow} p-4 rounded-xl my-4 mr-auto relative`}
    >
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <div className="absolute top-[-1rem] right-0 text-right text-sm text-gray-500">
        <h4>{company}</h4>
        <h4>{date}</h4>
      </div>

      <div className="leading-tight text-justify">
        <BlockListWithTriangles list={body} />
        <div className="px-8 py-4 ">
          <InlineListWithDots list={props.tech} />
        </div>
      </div>
      {more && (
        <div className="p-8 ">
          <div
            className={`_text-contrast _link underline before:content-["▶"] before:absolute before:left-0 before:top-0 relative pl-8`}
          >
            <Link href={more.link}>{more.label}</Link>
          </div>
        </div>
      )}
    </div>
  );
}
