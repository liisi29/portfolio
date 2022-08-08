import { Level, TableListItem } from "./dto";
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
  ths: string[];
  list: TableListItem[];
}) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-left">
        <thead className="text-xs uppercase _bg-dark border-b border-gray-400 ">
          <tr>
            {ths.map((h, i) => (
              <th
                key={`th${i}`}
                scope="col"
                className={i % 2 === 0 ? even : odd}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((s) => {
            return (
              <tr key={s.key} className="_bg-cream border-b border-gray-400">
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
                    <p>{s.since}</p>
                  </td>
                )}
                {s.description && (
                  <td className={`${odd}`}>
                    {s.description.map((d, i) => (
                      <p key={`description${i}`}>{d}</p>
                    ))}
                  </td>
                )}
                {s.level && (
                  <td className={`${even}`}>
                    <p>{levelTranslation[s.level]}</p>
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
