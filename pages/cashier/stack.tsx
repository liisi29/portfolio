const tech = {
  title: "Technology",
  paragraphs: [
    `We chose Aurelia as our main framework. Also the project is
    based on typescript, bootstrap and REST api.`,
    `Rob used to be one of the main developers behind Angular, but
    then decided to make his own framework`,
    `At the time Aurelia was fresh and modern. Unopinionated. Highly
    configurable, easy to learn. It really was and is a good
    framework. Unfortunately Rob Eisenberg was hired by Microsoft
    and Aurelia never got the full fame..`,
  ],
};
export default function Stack() {
  return (
    <div>
      <h2>Technology</h2>
      <p>{tech.paragraphs[0]}</p>
    </div>
  );
}
