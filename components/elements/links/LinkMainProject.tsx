import Link from "next/link";

export default function LinkMainProject() {
  return (
    <Link href="/cashier">
      <button className="animate-pop _animation-fill-backwards _link ">
        Read about my main project
      </button>
    </Link>
  );
}
