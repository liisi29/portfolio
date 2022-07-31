import React from "react";

function Cloud({
  items,
  from,
}: {
  items: ICloudItem[];
  from: "left" | "right";
}) {
  const fromLeft1 = "left-0";
  const fromLeft2 = "animate-[slideFromLeft_1s_ease-in-out] left-0";
  const fromRight1 = "right-0";
  const fromRight2 = "animate-[slideFromRight_1s_ease-in-out] right-0";

  const horizontal1 = from === "left" ? fromLeft1 : fromRight1;
  const horizontal2 = from === "left" ? fromLeft2 : fromRight2;

  const vertical1 = from === "left" ? "top-[-6rem]" : "bottom-0";
  const vertical2 = from === "left" ? "top-0" : "bottom-0";

  return (
    <div
      className={`hidden lg:block ${horizontal1} ${vertical1} h-[30rem] lg:h-full w-2/5 w-max-[30%] relative lg:absolute`}
    >
      {items.map((el, i) => (
        <div
          style={{ animationDelay: `${i / 4}s` }}
          key={el.text}
          className={`${el.size} ${el.top} ${el.horizontal} ${horizontal2} ${vertical2} 
          transition-all w-fit
          _animation-fill-backwards 
          text-xl 
          text-gray-200 opacity-40 2xl:opacity-100         
          uppercase 
          absolute`}
        >
          #{el.text}
        </div>
      ))}
    </div>
  );
}

export default Cloud;

export interface ICloudItem {
  text: string;
  year?: string | number;
  size: string;
  top: string;
  horizontal: string;
}
