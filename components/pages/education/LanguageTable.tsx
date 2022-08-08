import { Level, TableListItem } from "@components/elements/table/dto";
import Table, { TableHeaderItem } from "@components/elements/table/Table";
const list: TableListItem[] = [
  {
    key: "estonian",
    text: "Estonian",
    description: [`Native`],
  },
  {
    key: "english",
    text: "English",
    description: [`Very good in speech and in writing`],
  },
  {
    key: "spanish",
    text: "Spanish",
    description: [`Good in speech and in writing`],
  },
];
export default function LanguageTable() {
  const ths: TableHeaderItem[] = [
    { text: "Language", key: "title" },
    { text: "Level", key: "level" },
  ];
  return (
    <div>
      <Table ths={ths} list={list} />
    </div>
  );
}
