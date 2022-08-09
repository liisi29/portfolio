import LinkButtonBase from "./LinkButtonBase";

export default function LinkExperience({
  color,
  back,
}: {
  back?: string;
  color?: "contrast" | "white";
}) {
  return (
    <LinkButtonBase
      href={"/experience"}
      back={back}
      color={color}
      label={"My career path"}
    />
  );
}
