import { DOMElement } from "react";
import TriangleListItemBase from "./TriangleListItemBase";

export default function BlockListWithTriangles({
  list,
}: {
  list?: (string | JSX.Element)[];
}) {
  return (
    <ul>
      {(list || []).map((t, i: number) => (
        <TriangleListItemBase key={i}>{t}</TriangleListItemBase>
      ))}
    </ul>
  );
}
