export type SkillKey = 
 "aurelia" 
| "bootstrap"
| "css"
| "git"
| "html"
| "javascript"
| "jest"
| "jquery"
| "less"
| "mongo"
| "nextjs"
| "node"
| "react"
| "redux"
| "rest"
| "tailwind"
| "typescript";

export interface Skill  {
    key: SkillKey;
    text: string; 
    since: string;
}

export type SkillList = Record<SkillKey, Skill>;

    // prettier-ignore
export const skills: SkillList = {
    aurelia:    {key: "aurelia",    text: "Aurelia.js",     since: "2016"},
    bootstrap:  {key: "bootstrap",  text: "Bootstrap",      since: "2013"},
    css:        {key: "css",        text: "CSS",            since: "2013"},
    git:        {key: "git",        text: "Git",            since: "2013"},
    html:       {key: "html",       text: "HTML",           since: "2013"},
    jquery:     {key: "jquery",     text: "jQuery",         since: "2013"},
    javascript: {key: "javascript", text: "Javascript",     since: "2013"},
    less:       {key: "less",       text: "Less",           since: "2016"},
    mongo:      {key: "mongo",      text: "mongoDB",        since: "2015"},
    nextjs:     {key: "nextjs",     text: "Next.js",        since: "2022"},
    node:       {key: "node",       text: "Node.js",        since: "2013"},
    react:      {key: "react",      text: "React",          since: "2018"},
    redux:      {key: "redux",      text: "Redux",          since: "2021"},
    tailwind:   {key: "tailwind",   text: "Tailwind.css",   since: "2022"},
    typescript: {key: "typescript", text: "Typescript",     since: "2016"},
    rest:       {key: "rest",       text: "REST api",       since: "2016"},
    jest:       {key: "jest",       text: "Jest",           since: "2021"},
};