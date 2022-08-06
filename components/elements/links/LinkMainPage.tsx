import Link from "next/link";

export default function LinkMainPage() {
  return (
    <Link href="/">
      <button className="animate-pop _animation-fill-backwards _link ">
        Go to main page
      </button>
    </Link>
  );
}
