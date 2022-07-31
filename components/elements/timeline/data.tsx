import { text } from "stream/consumers";

const texts = {
  turnit: [
    "Architecting and implementing the front end of a webcashier application that is used daily by ticket agents in bus- and trainstations",
    "Started from zero",
    "Have maintained and developed the application front end alone for more than 5 years",
    "Have done user reasearch of clients, proposed and implemented scalable solutions to issues identified during the research",
    "The application is in everyday use in several countries in Europe, in Africa and USA",
    "The application supports over 20 languages",
  ],
  tgrupp: [
    "Developed and maintained code for ticket selling webpages in several countries.",
    "The webpages were themed and based on custom-template",
    "Developed and implemented user interface for bus ticket machine",
    "Configured bus ticket machine in bus stations",
  ],
  uptime: [
    "Helped to maintain big legacy projects",
    "Developed front end system based on Sharepoint",
    "Started leaning towards front end",
  ],
  kam: [
    "Was manager for a team of 3 members",
    "Deadlines",
    "Creating the content",
    "Recruitment",
    "Money flows",
    "Customer support",
  ],
};

export const blocks: IBlock[] = [
  {
    title: "Senior Frontend Developer",
    company: "Turnit",
    side: "left",
    body: texts.turnit,
    tech: [
      "aurelia.js",
      "typescript",
      "less",
      "bootstrap",
      "architecture",
      "planning",
    ],
    date: "Since 2016",
  },
  {
    title: "Frontend Developer",
    company: "T Grupp",
    side: "right",
    body: texts.tgrupp,
    date: "2015 - 2016",
    tech: ["angular.js", "javascript", "knockout.js", "css", "html"],
  },
  {
    title: "Junior Software Developer",
    company: "Uptime",
    side: "left",
    body: texts.uptime,
    date: "2013 - 2015",
    tech: ["javascript", "jquery", "css", "html", "c#", "bootstrap"],
  },
  {
    title: "Project Manager",
    company: "KAM",
    side: "right",
    body: texts.kam,
    date: "2009 - 2013",
    tech: [
      "marketing",
      "budget",
      "project management",
      "time management",
      "seo",
    ],
  },
];

export interface IBlock {
  title: string;
  company: string;
  side: "right" | "left";
  body: string[];
  date: string;
  tech: string[];
}
