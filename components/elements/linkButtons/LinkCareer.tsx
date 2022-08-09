import LinkButtonBase from "./LinkButtonBase";

export default function LinkCareer({
  color,
  back,
}: {
  back?: string;
  color?: "contrast" | "white";
}) {
  return (
    <LinkButtonBase
      href={"/career"}
      back={back}
      color={color}
      label={"My career path"}
    />
  );
}
