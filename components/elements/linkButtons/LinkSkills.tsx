import Link from "next/link";

export default function LinkSkills({
  color,
}: {
  color?: "contrast" | "white";
}) {
  return (
    <Link href="/skills">
      <button
        className={`animate-pop _animation-fill-backwards _link ${
          color === "white" ? "_border-white" : ""
        }`}
      >
        My skills
      </button>
    </Link>
  );
}
