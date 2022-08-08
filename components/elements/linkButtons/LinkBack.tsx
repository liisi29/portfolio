import { useRouter } from "next/router";

export default function LinkBack() {
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
    <button
      onClick={clickHandler}
      className="animate-pop _animation-fill-backwards _link "
    >
      Back
    </button>
  );
}
