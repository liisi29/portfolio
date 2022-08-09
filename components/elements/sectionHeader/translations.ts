export const sectionHeaderTranslations: Record<SectionHeaderTranslation, string> = {
    about: "About me",
    career: "Where I've worked",
    contact: "Let's get in touch",
    webcashier: "My main project",
    skills: "Skills",
    stack: "Stack",
    lifeLessons: "Life lessons",
    education: "Education",
    experience: "Experience"
};

export type SectionHeaderTranslation = MainPageSectionHeaderTranslation | LayoutPageHeaderTranslation | LayoutParagraphHeaderTranslation;
export type MainPageSectionHeaderTranslation = "about" | "experience" | "contact" | "stack";
export type LayoutPageHeaderTranslation = "webcashier" | "skills" | "education" | "career";
export type LayoutParagraphHeaderTranslation = "lifeLessons";