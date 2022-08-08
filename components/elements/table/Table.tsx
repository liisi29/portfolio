import { Level, TableListItem } from "./dto";

export type TableHeaderItemKey = "since" | "title" | "description" | "level";
export interface TableHeaderItem {
  text: string;
  key: TableHeaderItemKey;
  showDescriptionInSm?: boolean;
}

const levelTranslation: Record<Level, string> = {
  ba: "Bachelor",
  exchange: "Exchange student",
  learned: "Learned",
  main: "Main",
  notCompleted: "Not completed",
  production: "Production",
  recent: "Recent",
};

const spacing = "py-3 px-6";
const odd = `${spacing} _bg-white`;
const even = `${spacing} _bg-cream`;
const first = `${odd}`;
export default function Table({
  ths,
  list,
}: {
  ths: TableHeaderItem[];
  list: TableListItem[];
}) {
  const sinceText = ths.find((h) => h.key === "since")?.text;
  const levelText = ths.find((h) => h.key === "level")?.text;
  const desc = ths.find((h) => h.key === "description");
  const descText = desc?.text;
  const showDescriptionInSm = desc?.showDescriptionInSm;

  const body = "flex items-center justify-center";
  const container = "container";
  const table = "w-full flex flex-row flex-no-wrap overflow-hidden my-5";
  const row2 = " sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0";
  const row =
    "flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0";
  const tableBody = "flex-1 sm:flex-none";

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-left">
        <thead className="text-xs uppercase _bg-dark border-b border-gray-400 hidden sm:table-header-group">
          <tr>
            {ths.map((h, i) => (
              <th
                key={`th${i}`}
                scope="col"
                className={i % 2 === 0 ? even : odd}
              >
                {h.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((s) => {
            return (
              <tr
                key={s.key}
                className={`${row} _bg-cream border-b border-gray-400`}
              >
                <th
                  scope="row"
                  className={`${first} _text-contrast whitespace-nowrap`}
                >
                  <div id={s.key}>
                    {s.texts
                      ? s.texts.map((t, i) => <p key={`text${i}`}>{t}</p>)
                      : s.text}
                  </div>
                </th>
                {s.since && (
                  <td className={`${even}`}>
                    <p>
                      <span className="sm:hidden uppercase text-xs">
                        {sinceText}:
                      </span>{" "}
                      {s.since}
                    </p>
                  </td>
                )}
                {s.description && (
                  <td className={`${odd}`}>
                    {s.description.map((d, i) => (
                      <p key={`description${i}`}>
                        {showDescriptionInSm && (
                          <span className="sm:hidden uppercase text-xs">
                            {descText}:{" "}
                          </span>
                        )}
                        {d}
                      </p>
                    ))}
                  </td>
                )}
                {s.level && (
                  <td className={`${even}`}>
                    <p>
                      <span className="sm:hidden uppercase text-xs">
                        {levelText}:
                      </span>{" "}
                      {levelTranslation[s.level]}
                    </p>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
