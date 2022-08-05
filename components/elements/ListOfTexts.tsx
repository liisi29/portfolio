function ListOfTexts({ list }: { list?: string[] }) {
  return (
    <ul>
      {(list || []).map((t: string, i: number) => (
        <li
          key={i}
          className={`before:content-["▶"] before:_text-contrast before:absolute before:left-0 before:top-0 relative pl-8`}
        >
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
export default ListOfTexts;
