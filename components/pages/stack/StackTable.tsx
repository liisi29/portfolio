import InlineListWithDots from "@components/elements/InlineListWithDots";
import LinkMainProject from "@components/elements/linkButtons/LinkMainProject";
import { Level, TableListItem } from "@components/elements/table/dto";
import Table from "@components/elements/table/Table";
import { Skill, SkillList, skills as raw } from "@data/skills";

type SkillListTable = Skill & TableListItem;

const list: SkillListTable[] = [
  Object.assign(raw.aurelia, {
    level: "main" as Level,
    description: [
      `Aurelia has been my main framework for the last 6 years. It is similar to React and Vue.`,
    ],
  }),
  Object.assign(raw.bootstrap, {
    level: "main" as Level,
    description: [
      `Bootstrap has been my main design library for the last 6 years`,
    ],
  }),
  Object.assign(raw.css, {
    level: "main" as Level,
    description: [
      `I have used custom written and library css excessively for 9 years`,
    ],
  }),
  Object.assign(raw.git, {
    level: "main" as Level,
    description: [
      `Since 2016 my main source control has been git, so I've used it a lot. I have also taken courses about it as the tool is used so much and it is important to know it to the core.`,
    ],
  }),
  Object.assign(raw.html, {
    level: "main" as Level,
    description: [
      `I have used custom written and library snippets excessively for 9 years`,
    ],
  }),
  Object.assign(raw.jquery, {
    level: "main" as Level,
    description: [
      `It used to be everywhere so I have also used it a lot. Now it has been years since I've written jQuery :) I still can though. I think.`,
    ],
  }),
  Object.assign(raw.javascript, {
    level: "main" as Level,
    description: [
      `I have learned, used, loved and hated Javascript for the last 9 years. I have written it in server side (learning code) and front side (production code) I find it fascinating!`,
    ],
  }),
  Object.assign(raw.less, {
    level: "main" as Level,
    description: [
      `Less has been my main css preprocessor for the last 6 years. I have written custom less code and customization for library`,
    ],
  }),
  Object.assign(raw.mongo, {
    level: "learned" as Level,
    description: [
      `I have used it in small projects since 2015. Am no expert, but can handle basic scenarios`,
    ],
  }),
  Object.assign(raw.nextjs, {
    level: "recent" as Level,
    description: [
      `Next.js is quite new to me. I recently discovered it and I really like it. This portfolio is also based on Next.js`,
    ],
  }),
  Object.assign(raw.node, {
    level: "learned" as Level,
    description: [
      `Unfortunately I have not been able to use Node.js in my work. But as I really like it, I have learned a lot about it. I have taken high level courses and used it in smaller projects`,
    ],
  }),
  Object.assign(raw.react, {
    level: "production" as Level,
    description: [`I have used and learned React a lot for the last 4 years.`],
  }),
  Object.assign(raw.redux, {
    level: "production" as Level,
    description: [
      `I cannot say I am a fan, but Redux is important if you want to work with React. I've been using Redux in production code since 2021.`,
    ],
  }),
  Object.assign(raw.tailwind, {
    level: "learned" as Level,
    description: [
      `Tailwind is a new thing. As it is just css, I learned it quickly and used it in this portfolio. I think it is a great tool for easy prototyping or quick projects`,
    ],
  }),
  Object.assign(raw.typescript, {
    level: "main" as Level,
    description: [
      `I have used it excessively for the last 6 years. I have taken courses about it and I think for the time being it is a very handy and important tool for writing cleaner, more readable and bugfree javascript code`,
    ],
  }),
  Object.assign(raw.rest, {
    level: "main" as Level,
    description: [
      `Writing: I have not written production level REST api's.`,
      `Consuming: My main project uses them. A lot.`,
      `I have worked with backend team to discuss best practices on how to create dedicated API for the project`,
    ],
  }),
];
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
export default function StackTable() {
  const ths = ["Tech", "Since", "Description", "Level"];
  return (
    <div>
      <Table ths={ths} list={list} />
      <div className="flex mt-12">
        <div className="min-w-[10rem]">{generalStack.title}</div>
        <div>{<InlineListWithDots list={generalStack.list} />}</div>
      </div>
    </div>
  );
}
