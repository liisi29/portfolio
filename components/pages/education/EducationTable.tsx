import { Level, TableListItem } from "@components/elements/table/dto";
import Table, { TableHeaderItem } from "@components/elements/table/Table";

const list: TableListItem[] = [
  {
    key: "technotronics",
    text: "Electrical and Mechanical Engineering",
    texts: ["Electrical and", "Mechanical", "Engineering"],
    since: "2013",
    level: "notCompleted" as Level,
    description: [`The Estonian University of Life Sciences`],
  },
  {
    key: "neurology",
    text: "Neurology",
    since: "2005",
    level: "exchange" as Level,
    description: [`University of Salamanca (Spain)`],
  },
  {
    key: "psychology",
    text: "Psychology",
    since: "2004",
    level: "ba" as Level,
    description: [`University of Tartu (Estonia)`],
  },
];
export default function EducationTable() {
  const ths: TableHeaderItem[] = [
    { text: "Discipline", key: "title" },
    { text: "Graduation", key: "since" },
    { text: "University", key: "description" },
    { text: "Degree", key: "level" },
  ];
  return (
    <div>
      <Table ths={ths} list={list} />
    </div>
  );
}
