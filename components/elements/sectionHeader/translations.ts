export const sectionHeaderTranslations: Record<SectionHeaderTranslation, string> = {
    about: "About me",
    work: "Where I've worked",
    contact: "Let's get in touch",
    webcashier: "My main project",
    lifeLessons: "Life lessons"
};

export type SectionHeaderTranslation = MainPageSectionHeaderTranslation | LayoutPageHeaderTranslation | LayoutParagraphHeaderTranslation;
export type MainPageSectionHeaderTranslation = "about" | "work" | "contact";
export type LayoutPageHeaderTranslation = "webcashier";
export type LayoutParagraphHeaderTranslation = "lifeLessons";