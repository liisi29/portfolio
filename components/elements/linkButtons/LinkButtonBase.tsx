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

  // Function components cannot be given refs.
  // https://stackoverflow.com/a/68389368
  return (
    <Link href={url}>
      <a>
        <ButtonBase color={color} label={label} />
      </a>
    </Link>
  );
}

export function ButtonBase({
  color,
  label,
}: {
  label: string;
  color?: "contrast" | "white";
}) {
  return (
    <button
      className={`animate-pop _animation-fill-backwards _link ${
        color === "white" ? "_border-white" : ""
      }`}
    >
      {label}
    </button>
  );
}
