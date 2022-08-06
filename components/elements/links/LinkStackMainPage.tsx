import Link from "next/link";

export default function LinkStackMainPage() {
  return (
    <Link href="/#stack">
      <button className="animate-pop _animation-fill-backwards _link ">
        Go to main page Stack
      </button>
    </Link>
  );
}
