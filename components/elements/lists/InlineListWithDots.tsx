function InlineListWithDots({ list }: { list?: string[] }) {
  return (
    <div className="flex flex-wrap">
      {(list || []).map((t, i) => (
        <div className="_text-contrast whitespace-nowrap" key={t}>
          <span className="px-1">{t}</span>
          <span
            // prettier-ignore
            className={`px-1 ${ i === (list || []).length - 1 ? "hidden" : ""} `}
          >
            •
          </span>
        </div>
      ))}
    </div>
  );
}
export default InlineListWithDots;
