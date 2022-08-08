import { SkillKey } from "@data/skills";

export interface TableListItem {
    description?: string[];
    key: SkillKey | string;
    level?: Level;
    since?: string|number;
    text: string;
    texts?: string[];
}
// export enum Level {
//     Main,
//     Production,
//     Learned,
//     Recent,
// }
export type Level = 
"ba" | 
"exchange" | 
"learned" | 
"main" |
"notCompleted" |
"production" | 
"recent";