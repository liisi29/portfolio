import InlineListWithDots from "@components/elements/InlineListWithDots";
import LinkMainProject from "@components/elements/linkButtons/LinkMainProject";
import { skills as raw } from "@data/skills";
enum Level {
  Main,
  Production,
  Learned,
  Recent,
}

const { list, title } = {
  title: "My skills",
  list: [
    Object.assign(raw.aurelia, {
      level: Level.Main,
      description: [
        `Aurelia has been my main framework for the last 6 years. It is similar to React and Vue.`,
      ],
      production: "yes",
    }),
    Object.assign(raw.bootstrap, {
      level: Level.Main,
      description: [
        `Bootstrap has been my main design library for the last 6 years`,
      ],
      production: "yes",
    }),
    Object.assign(raw.css, {
      level: Level.Main,
      description: [
        `I have used custom written and library css excessively for 9 years`,
      ],
    }),
    Object.assign(raw.git, {
      level: Level.Main,
      description: [
        `Since 2016 my main source control has been git, so I've used it a lot. I have also taken courses about it as the tool is used so much and it is important to know it to the core.`,
      ],
    }),
    Object.assign(raw.html, {
      level: Level.Main,
      description: [
        `I have used custom written and library snippets excessively for 9 years`,
      ],
    }),
    Object.assign(raw.jquery, {
      level: Level.Main,
      description: [
        `It used to be everywhere so I have also used it a lot. Now it has been years since I've written jQuery :) I still can though. I think.`,
      ],
    }),
    Object.assign(raw.javascript, {
      level: Level.Main,
      description: [
        `I have learned, used, loved and hated Javascript for the last 9 years. I have written it in server side (learning code) and front side (production code) I find it fascinating!`,
      ],
    }),
    Object.assign(raw.less, {
      level: Level.Main,
      description: [
        `Less has been my main css preprocessor for the last 6 years. I have written custom less code and customization for library`,
      ],
    }),
    Object.assign(raw.mongo, {
      level: Level.Learned,
      description: [
        `I have used it in small projects since 2015. Am no expert, but can handle basic scenarios`,
      ],
    }),
    Object.assign(raw.nextjs, {
      level: Level.Recent,
      description: [
        `Next.js is quite new to me. I recently discovered it and I really like it. This portfolio is also based on Next.js`,
      ],
    }),
    Object.assign(raw.node, {
      level: Level.Learned,
      description: [
        `Unfortunately I have not been able to use Node.js in my work. But as I really like it, I have learned a lot about it. I have taken high level courses and used it in smaller projects`,
      ],
    }),
    Object.assign(raw.react, {
      level: Level.Production,
      description: [
        `I have used and learned React a lot for the last 4 years.`,
      ],
      production: "yes",
    }),
    Object.assign(raw.redux, {
      level: Level.Production,
      description: [
        `I cannot say I am a fan, but Redux is important if you want to work with React. I've been using Redux in production code since 2021.`,
      ],
    }),
    Object.assign(raw.tailwind, {
      level: Level.Learned,
      description: [
        `Tailwind is a new thing. As it is just css, I learned it quickly and used it in this portfolio. I think it is a great tool for easy prototyping or quick projects`,
      ],
    }),
    Object.assign(raw.typescript, {
      level: Level.Main,
      description: [
        `I have used it excessively for the last 6 years. I have taken courses about it and I think for the time being it is a very handy and important tool for writing cleaner, more readable and bugfree javascript code`,
      ],
    }),
    Object.assign(raw.rest, {
      level: Level.Main,
      description: [
        `Writing: I have not written production level REST api's.`,
        `Consuming: My main project uses them. A lot.`,
        `I have worked with backend team to discuss best practices on how to create dedicated API for the project`,
      ],
    }),
  ],
};
const generalStack = {
  title: "General",
  list: [
    "Youtrack",
    "Git",
    "Upsource",
    "Octopus",
    "Teamcity",
    "Kibana",
    "SQL",
    "Vercel",
    "VS Code",
    "Webstorm",
  ],
};
const spacing = "py-3 px-6";
const odd = `${spacing} _bg-white`;
const even = `${spacing} _bg-cream`;
const first = `${odd}`;
export default function StackTable() {
  const level = (level: Level) => {
    let inner = "";
    switch (level) {
      case Level.Main:
        inner = "Main";
        break;
      case Level.Production:
        inner = "Production";
        break;
      case Level.Learned:
        inner = "Small projects";
        break;
      default:
        inner = "Learning";
    }
    return <div>{inner}</div>;
  };
  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-left">
          <thead className="text-xs uppercase _bg-dark border-b border-gray-400 ">
            <tr>
              <th scope="col" className={`${first}`}>
                Tech
              </th>
              <th scope="col" className={`${even}`}>
                Since
              </th>
              <th scope="col" className={`${odd}`}>
                Description
              </th>
              <th scope="col" className={`${even}`}>
                Level
              </th>
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
                    <h4 id={s.key}>{s.text}</h4>
                  </th>
                  <td className={`${even}`}>
                    <p>{s.since}</p>
                  </td>
                  <td className={`${odd}`}>
                    {s.description.map((d, i) => (
                      <p key={`description${i}`}>{d}</p>
                    ))}
                  </td>
                  <td className={`${even}`}>{level(s.level)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex mt-12">
        <div className="min-w-[10rem]">{generalStack.title}</div>
        <div>{<InlineListWithDots list={generalStack.list} />}</div>
      </div>
    </div>
  );
}
