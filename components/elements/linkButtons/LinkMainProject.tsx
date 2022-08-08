import LinkButtonBase from "./LinkButtonBase";

export default function LinkMainProject({ back }: { back?: string }) {
  return (
    <LinkButtonBase href={"/cashier"} back={back} label={"My main project"} />
  );
}
