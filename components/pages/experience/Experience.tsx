const { title, list } = {
  title: "I have:",
  list: [
    <span key="0">
      been in charge of a <strong>big application</strong> that is a working
      tool in many countries
    </span>,
    <span key="1">
      done <strong>end user research</strong> and applied the results to
      development
    </span>,
    <span key="3">
      <strong>proposed</strong> and <strong>implemented</strong> new features
    </span>,
    <span key="4">
      worked in <strong>feature teams</strong> having close contact with
      designers, management and end users
    </span>,
    <span key="5">
      <strong>arhitectured</strong> and <strong>written</strong> production
      front end from scratch
    </span>,
    <span key="6">
      provided <strong>technical insight</strong>
    </span>,
  ],
};

export default function ExperienceList() {
  return (
    <div>
      <div>{title}</div>
      <BlockListWithTriangles list={list} />
    </div>
  );
}

import BlockListWithTriangles from "@components/elements/lists/BlockListWithTriangles";
