import BlockListWithTriangles from "@components/elements/lists/BlockListWithTriangles";

export default function Me() {
  const { list } = {
    list: [
      `Interfaced with clients, providing technological expertise`,
      `Proposed and implemented scalable solutions to issues identified during end-user research`,
      `Planned, architectured and wrote the code for the application`,
      `I did not design the visuals and I did not design the UX!`,
      `But I worked closely with designer, management team and backenders to understand the needs, develop, document, and manage the application`,
    ],
  };
  return (
    <div>
      <BlockListWithTriangles list={list} />
    </div>
  );
}
