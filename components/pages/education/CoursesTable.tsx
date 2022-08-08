import { Level, TableListItem } from "@components/elements/table/dto";
import Table from "@components/elements/table/Table";
const list: TableListItem[] = [
  {
    key: "js",
    text: "Javascript: The Advanced Concepts (2022 Update)",
    texts: ["Javascript: The Advanced Concepts", "2022 Update"],
    description: ["Andrei Neagoie"],
    since: "25h",
  },
  {
    key: "node",
    text: "Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)",
    texts: [
      "Complete NodeJS Developer in 2022",
      "(NodeJS, Express, GraphQL,",
      "REST, MongoDB, SQL, MERN)",
    ],
    description: ["Andrei Neagoie"],
    since: "46h",
  },
  {
    key: "jest",
    text: "Testing React with Jest and React Testing Library (RTL)",
    texts: ["Testing React with Jest", "and React Testing Library (RTL)"],
    description: ["Bonnie Schulkin"],
    since: "8h",
  },
  {
    key: "react-max",
    text: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    texts: ["React", "The Complete Guide", "(incl Hooks, React Router, Redux)"],
    description: ["Maximilian Schwarzmüller"],
    since: "48h",
  },
];
export default function CoursesTable() {
  const ths = ["Language", "Duration", "Teacher"];
  return (
    <div>
      <Table ths={ths} list={list} />
    </div>
  );
}
