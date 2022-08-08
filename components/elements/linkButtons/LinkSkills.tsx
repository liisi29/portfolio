import LinkButtonBase from "./LinkButtonBase";
export default function LinkSkills({
  color,
  back,
}: {
  back?: string;
  color?: "contrast" | "white";
}) {
  return (
    <LinkButtonBase
      href={"/skills"}
      back={back}
      color={color}
      label={"My skills"}
    />
  );
}
