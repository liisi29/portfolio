import LayoutParagraph from "@components/layout/LayoutParagraph";

const { title, messages, list } = {
  title: "What I have learned",
  messages: [
    `"You learn most from the mistakes you make", they say. Oh, I should be smart as hell for believe me, I've made many..`,
    `But after all is said and done I've always tried to take some time and think things over.`,
    `Some conclusions that I've made along the way:`,
  ],
  list: [
    "Team love! Team is important. Team is your family, your lover and best friend. You learn from them and you teach them. Team is the most important thing in development!",
    "No spaghetti code! Please! Take your time. Think. And refactor.",
    "Keep your methods small. Keep your files small. Keep your commits small.. Small is better",
    "Every corner you cut will bite you before the end",
    "Write tests for your code! But not any tests. Only meaningful tests matter!",
    "Research the end user",
    "Learn! Keep learning! And learn some more. You will never know it all..",
    "Do not be afaid!",
    "Comfort zone is not your friend! It's ok to be calm for a few months, but then you have to start pushing again",
  ],
};

export default function LifeLessons() {
  return (
    <LayoutParagraph section="lifeLessons">
      <div id="lifeLessons">
        <h2>{title}</h2>
        <div className="mb-4">
          {messages.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </div>
        <ul>
          {list.map((t: string, i: number) => (
            <li
              key={i}
              className={`before:content-["▶"] before:_text-contrast before:absolute before:left-0 before:top-0 relative pl-8`}
            >
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </LayoutParagraph>
  );
}
