import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SectionHeader from "@components/elements/SectionHeader";
import Trans from "translations/Trans";

const { list } = {
  list: [
    "My name is Liisi.",
    "I like to build things for internet.",
    "I started out by customizing Wordpress themes around 2012. But shortly after that I discovered Javascript. Fell in love from the first sight.",
    "Although my first actual job was C#, in 2013, I quickly drifted back to front end and have been enjoying it ever since.",
    "Today I am a senior front end developer in Estonian company Turnit.",
    "I also study a lot and try to analyze my experiences, successes and mistakes.",
    "My main focus these days is clean code and building maintainable and scalable systems.",
  ],
};

function About() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <section id="about" className="_bg-skew _bg-dark">
      <SectionHeader section="about" sectionColor="dark" />
      <article className="flex flex-col xl:flex-row text-justify">
        <div className="lg:pr-4">
          {list.map((m, i) => (
            <p key={i} className="py-2">
              {m}
            </p>
          ))}
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
