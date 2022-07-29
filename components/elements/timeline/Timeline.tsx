import React from "react";
import { blocks, IBlock } from "./data";

function Timeline() {
  // https://tailwind-elements.com/docs/standard/components/timeline/
  // https://tailwindcomponents.com/component/vertical-timeline
  const borderColor = "border-blue-600";
  const roundIconColor = "bg-blue-600";
  const textColor = {
    h1: "text-gray-800",
    h2: "text-gray-600",
    p: "text-gray-600",
  };

  const iconAndLine = (
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow-2xl "></div>
    </div>
  );
  const container = "flex md:contents";
  const left = (
    <div className={`${container} flex-row-reverse`}>
      <Element title="Tsikibriki" body="Pikem värk" side="left" />
      {iconAndLine}
    </div>
  );
  const right = (
    <div className={`${container}`}>
      {iconAndLine}
      <Element title="Tsikibriki 2222" body="Pikem värk 2222" side="right" />
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        {blocks.map((el, i) => {
          return <Content key={i} props={el} />;
        })}
      </div>
    </div>
  );
}

export default Timeline;

function Content({ props }: { props: any }) {
  const { title, body, side } = props;

  const iconAndLine = (
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow-2xl "></div>
    </div>
  );
  const container = "flex md:contents";
  const element = <Element title={title} body={body} side={side} />;
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

function Element({
  title,
  body,
  side,
}: {
  title: string;
  body: JSX.Element;
  side: "left" | "right";
}) {
  const col =
    side === "left" ? "col-start-1 col-end-5" : "col-start-6 col-end-10";
  return (
    <div className={`${col} bg-blue-500 p-4 rounded-xl my-4 mr-auto shadow-md`}>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>

      <div className="leading-tight text-justify"> {body}</div>
    </div>
  );
}
