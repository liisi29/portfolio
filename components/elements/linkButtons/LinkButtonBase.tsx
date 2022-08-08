import Link from "next/link";

export default function LinkButtonBase({
  color,
  href,
  label,
  back,
}: {
  href: string;
  label: string;
  back?: string;
  color?: "contrast" | "white";
}) {
  const url = !!back ? `${href}?back=${back}` : href;
  return (
    <Link href={url}>
      <button
        className={`animate-pop _animation-fill-backwards _link ${
          color === "white" ? "_border-white" : ""
        }`}
      >
        {label}
      </button>
    </Link>
  );
}
