import InlineListWithDots from "@components/elements/lists/InlineListWithDots";

const { title, list } = {
  title: "Technology",
  list: [
    {
      title: "Aurelia.js",
      body: `Our main choice of framework was between Angular.js (first generation
        of Angular) and Aurelia. We picked Aurelia because it was lightweight
        and highly configurable`,
    },
    {
      title: "Typescript",
      body: `We chose to use Typescript to reduce errors in runtime and make code readable. And it did the job well. Looking back now: I love the decision!`,
    },
    {
      title: "Bootstrap",
      body: `It was called "Twitter bootstrap". We chose it to make the start of the project quicker and it did it's job.`,
    },
    {
      title: "Less",
      body: `We chose between SASS, LESS and vanilla CSS. At the time less was very popular so we also chose less. It is similar to Sass and makes writing CSS easier. Also worked well with Bootstrap.`,
    },
    {
      title: "Mocha",
      body: `For testing we chose Mocha. At some point we had 90% of the application covered with tests.`,
    },
    {
      title: "React",
      body: `Since React became so popular we've injected some parts to the application that have been made in React`,
    },
    {
      title: "REST api",
      body: `The communication with backend is done over dedicated REST api.`,
    },
  ],
};
const generalStack = {
  title: "General",
  list: ["Youtrack", "Git", "Upsource", "Octopus", "Teamcity", "Kibana", "SQL"],
};
export default function Stack() {
  const parag = ({ title, body }: { title: string; body: string }) => {
    return (
      <div className="flex" key={title.replace(/[ .]+/g, "")}>
        <h4 className="_text-contrast min-w-[10rem]">{title}</h4>
        <div>{body}</div>
      </div>
    );
  };

  return (
    <div>
      <h2>{title}</h2>
      {list.map((t) => parag(t))}
      <div className="flex mt-12">
        <div className="min-w-[10rem]">{generalStack.title}</div>
        <div>{<InlineListWithDots list={generalStack.list} />}</div>
      </div>
    </div>
  );
}
