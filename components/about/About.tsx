import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SectionHeader from "@components/elements/SectionHeader";
import Trans from "translations/Trans";

function About() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <section id="about" className="_bg-skew">
      <SectionHeader section="about" sectionColor="dark" />
      <article className="flex flex-col xl:flex-row text-justify">
        <div className="lg:pr-4">
          <p className="py-2">
            <Trans page="about" k="name" />
          </p>
          <p className="py-2">
            <Trans page="about" k="iLike" />
          </p>
          <p className="py-2">
            <Trans page="about" k="iStarted" />
          </p>
          <p className="py-2">
            <Trans page="about" k="firstJob" />
          </p>
          <p className="py-2">
            <Trans page="about" k="today1" />
            <br />
            <Trans page="about" k="today2" />
            <br />
            <Trans page="about" k="today3" />
          </p>
        </div>
        <div
          className={`${
            imageIsLoaded ? "animate-[slideFromRight_1s_ease-in-out]" : ""
          } w-full h-auto m-auto justify-center p-4 max-w-lg`}
        >
          <Image
            className="rounded-xl"
            src="/assets/face_gray-shirt.jpg"
            alt="/"
            width="960"
            height="1280"
            onLoad={(event) => {
              const target = event.target;
              // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
              if ((target as any).src?.indexOf("data:image/gif;base64") < 0) {
                setImageIsLoaded(true);
              }
            }}
          ></Image>
        </div>
      </article>
    </section>
  );
}

export default About;
