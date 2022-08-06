const { list } = {
  list: [
    `In 2016 we started with an application for ticket agents in busstations
    to sell tickets.`,
    `I have been lead- and/or solo developer of the application for the whole
    time.`,
    `Since 2016 then the application has grown a lot.`,
    `What started out as a small application to be used in busstations in
    France, is now a tool for busstations, trainstations and phone customer
    support.`,
    `The application supports more than 20 languages and is in everyday use
    in`,
  ],
};

export default function Intro() {
  return (
    <div>
      {list.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
      <p>
        <span className="font-bold">Europe</span>: Estonia, Latvia, Lithuania,
        Sweden, Norway, Poland, Germany, France, Spain
      </p>
      <p>
        <span className="font-bold">Africa</span>: Morocco and{" "}
        <span className="font-bold">USA</span>
      </p>
    </div>
  );
}
