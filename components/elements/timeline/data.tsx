const texts = {
  turnit: {
    a: "I am responsible for webcashier that is used by ticket agents in bus and trainstations. And by phone support crew.",
    b: "The web application allows a user to buy/return/change/view tickets.",
    c: `And buy different addons together with tickets (water, insurance,
      transfers etc), make check-in, add luggage, change seats, get
      reports etc.`,
    d: `The application supports over 20 languages and is in everyday use in
    several countries in Europe, Africa and USA`,
  },
  tgrupp: {
    a: `Maintaining and occasional development of ticket selling webpages that
    were themed and based on custom-template`,
    b: `Bus ticket machine user interface and configuration`,
  },
};

export const blocks: IBlock[] = [
  {
    title: "Senior Frontend Developer",
    company: "Turnit",
    side: "left",
    body: (
      <div>
        <p>{texts.turnit.a}</p>
        <p>{texts.turnit.b}</p>
        <p>{texts.turnit.c}</p>
        <p>{texts.turnit.d}</p>
      </div>
    ),
    tech: ["aurelia.js", "typescript", "less", "architecutre"],
    date: "Since 2016",
  },
  {
    title: "Frontend Developer",
    company: "T Grupp",
    side: "right",
    body: (
      <div>
        <p>{texts.tgrupp.a}</p>
        <p>{texts.tgrupp.b}</p>
      </div>
    ),
    date: "2015 - 2016",
    tech: ["javascript", "jquery", "css", "html"],
  },
];

export interface IBlock {
  title: string;
  company: string;
  side: "right" | "left";
  body: JSX.Element;
  date: string;
  tech: string[];
}
