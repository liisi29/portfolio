import Link from "next/link";
import LinkButtonBase from "./LinkButtonBase";

export default function LinkEducation({
  color,
  back,
}: {
  back?: string;
  color?: "contrast" | "white";
}) {
  return (
    <LinkButtonBase
      href={"/education"}
      back={back}
      color={color}
      label={"My education"}
    />
  );
}
