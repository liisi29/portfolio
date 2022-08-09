import ExperiencePromo from "@components/pages/experience/counterWithText/ExperiencePromo";
import SectionHeader from "@components/elements/sectionHeader/SectionHeader";
import LinkRow from "@components/elements/linkButtons/LinkRow";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeader section="experience" />
      <article>
        <div>
          <ExperiencePromo />
          <LinkRow all={false} back={"/#experience"}></LinkRow>
        </div>
      </article>
    </section>
  );
}
