import { PropsWithChildren } from "react";

export default function TriangleListItemBase({
  children,
  id,
}: PropsWithChildren & { id: string | number }) {
  return (
    <li
      key={id}
      className={`before:content-["▶"] before:_text-contrast before:absolute before:left-0 before:top-0 relative pl-8`}
    >
      {children}
    </li>
  );
}
