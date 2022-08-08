import LinkButtonBase from "./LinkButtonBase";

export default function LinkMainProject({
  color,
  back,
}: {
  back?: string;
  color?: "contrast" | "white";
}) {
  return (
    <LinkButtonBase
      href={"/cashier"}
      back={back}
      color={color}
      label={"My main project"}
    />
  );
}
