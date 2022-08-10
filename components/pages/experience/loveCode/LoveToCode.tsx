import { AiFillHeart } from "react-icons/ai";

export default function LoveToCode() {
  return (
    <div className="flex text-2xl items-center">
      <div className="pr-2">I</div>
      <div className="_text-contrast pr-2">
        <AiFillHeart />
      </div>
      <div className="pr-2">to</div>
      <div className="uppercase">{`<code\\>`}</div>
    </div>
  );
}
