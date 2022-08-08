import Link from "next/link";
import { useRouter } from "next/router";

export default function LinkMainProject({ back }: { back?: string }) {
  const base = "/cashier";
  const url = !!back ? `${base}?back=${back}` : base;
  return (
    <Link href={url}>
      <button className="animate-pop _animation-fill-backwards _link ">
        My main project
      </button>
    </Link>
  );
}
