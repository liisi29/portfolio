import Counter from "@components/pages/experience/counter/Counter";

export default function CounterWithText({
  text1,
  text2,
  years,
}: {
  text1: string;
  text2: string;
  years: "6" | "9";
}) {
  const main = "6";
  const isMain = years === main;
  const textColor = isMain ? "_text-contrast" : "";
  const textSize = isMain ? "text-[10rem]" : "text-[4rem]";
  return (
    <div className="flex text-xl items-center">
      <div>{text1}</div>
      <div className={`${textColor} ${textSize} p-2`}>
        {years}
        {/* <Counter years={years} /> */}
      </div>
      <div>{text2}</div>
    </div>
  );
}
