import { useRouter } from "next/router";
import { ButtonBase } from "./LinkButtonBase";

export default function LinkBack({ color }: { color?: "contrast" | "white" }) {
  const router = useRouter();
  const q = router;

  const clickHandler = () => {
    const path = router.asPath.match(/\?back=(.*)$/);
    let back = null;
    if (path && path?.length > 0) {
      back = path[1];
    }
    if (back !== null) {
      router.push(back);
    } else {
      router.back();
    }
  };
  return (
    <div onClick={clickHandler}>
      <ButtonBase color={color} label={"Back"} />
    </div>
  );
}
