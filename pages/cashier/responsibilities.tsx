import BlockListWithTriangles from "@components/elements/BlockListWithTriangles";

export default function Responsibilities() {
  const { title, list } = {
    title: "My responsibilities",
    list: [
      `The first choices of stack were made by our tech arhitect.`,
      `Later I made the decisions and architectured the application.`,
      `There were times when I had thorough analysis and documentation to base the code upon, 
      but most of the time my input was the description of the requested feature and I figured out what was need from backend and from the application
      to make this feature a reality.`,
    ],
  };
  return (
    <div>
      <h2>{title}</h2>
      {list.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  );
}
