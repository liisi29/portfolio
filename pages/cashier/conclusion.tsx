const lessons = {
  title: "What I have learned",
  list: [
    "Research the end user",
    "Love your team",
    "No spaghetti code! Please!",
    'Every "let\'s cut the corner" will hurt you in the end',
    "The importance of tests!",
  ],
};

export default function Conclusion() {
  return (
    <div>
      <h2>{lessons.title}</h2>
      <ul>
        {lessons.list.map((t: string, i: number) => (
          <li
            key={i}
            className={`before:content-["▶"] before:_text-contrast before:absolute before:left-0 before:top-0 relative pl-8`}
          >
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
