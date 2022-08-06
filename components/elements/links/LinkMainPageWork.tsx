import Link from "next/link";

export default function LinkMainPageWork() {
  return (
    <Link href="/#work">
      <button className="animate-pop _animation-fill-backwards _link ">
        Go to main page Work
      </button>
    </Link>
  );
}
