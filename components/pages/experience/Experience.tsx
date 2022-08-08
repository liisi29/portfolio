import LinkEducation from "@components/elements/linkButtons/LinkEducation";
import SectionHeader from "@components/elements/sectionHeader/SectionHeader";
import React from "react";
import Timeline from "../../elements/timeline/Timeline";

const { title, list } = {
  title: "",
  list: [
    "Writing code - 9 years of experience",
    "Production level code - 7 years of experience",
    "Since 2016 have been in charge of a big application that is in everyday use in many countries",
    "I have done End user research and applied the results to development",
    "I have proposed and implemented features to application",
    "I have been actively involved with in feature teams and provided technical insight",
    "I have arhitectured big application from scratch",
    "I have worked closely with designers, management, backend team and end users",
    "I love code, I love challenge, I love learning",
  ],
};

export default function Experience() {
  return (
    <section id="work">
      <SectionHeader section="work" />
      <article>
        <div>
          <BlockListWithTriangles list={list} />
          <div id="education">
            <LinkEducation back={"/#education"} />
          </div>
        </div>
      </article>
    </section>
  );
}

import BlockListWithTriangles from "@components/elements/BlockListWithTriangles";
