import LinkButtonBase from "./LinkButtonBase";

export default function LinkHome({
  color,
  back,
}: {
  back?: string;
  color?: "contrast" | "white";
}) {
  return <LinkButtonBase href={"/"} back={back} color={color} label={"Home"} />;
}
