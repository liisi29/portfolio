import Link from "next/link";

export default function LinkSkills() {
  return (
    <Link href="/skills">
      <button className="animate-pop _animation-fill-backwards _link ">
        My skills
      </button>
    </Link>
  );
}
