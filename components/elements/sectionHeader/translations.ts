export const sectionHeaderTranslations: Record<SectionHeaderTranslation, string> = {
    about: "About me",
    work: "Where I've worked",
    contact: "Let's get in touch",
    webcashier: "My main project",
    skills: "Skills",
    stack: "Stack",
    lifeLessons: "Life lessons"
};

export type SectionHeaderTranslation = MainPageSectionHeaderTranslation | LayoutPageHeaderTranslation | LayoutParagraphHeaderTranslation;
export type MainPageSectionHeaderTranslation = "about" | "work" | "contact" | "stack";
export type LayoutPageHeaderTranslation = "webcashier" | "skills";
export type LayoutParagraphHeaderTranslation = "lifeLessons";