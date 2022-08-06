import SectionHeader from "@components/elements/sectionHeader/SectionHeader";
import React from "react";
import Timeline from "../../elements/timeline/Timeline";

function Work() {
  return (
    <section id="work">
      <SectionHeader section="work" />
      <article>
        <div>
          <Timeline />
        </div>
      </article>
    </section>
  );
}

export default Work;
