import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "@components/elements/sectionHeader/SectionHeader";
import { skills as raw } from "@data/skills";
import { useRouter } from "next/router";

const { message } = {
  message: "Since:",
};

const base = "/skills/#";
// prettier-ignore
const { list } = {
  list: [
    Object.assign(raw.aurelia, {href: `${base}${raw.aurelia.key}`,}),
    Object.assign(raw.bootstrap, {href: `${base}${raw.bootstrap.key}`}),
    Object.assign(raw.css, { href: `${base}${raw.css.key}`}),
    Object.assign(raw.git, {href: `${base}${raw.git.key}`}),
    Object.assign(raw.html, {href: `${base}${raw.html.key}`}),
    Object.assign(raw.jquery, {href: `${base}${raw.jquery.key}`}),
    Object.assign(raw.javascript, {href: `${base}${raw.javascript.key}`}),
    Object.assign(raw.less, {href: `${base}${raw.less.key}`}),
    Object.assign(raw.mongo, {href: `${base}${raw.mongo.key}`}),
    Object.assign(raw.nextjs, {href: `${base}${raw.nextjs.key}`}),
    Object.assign(raw.node, {href: `${base}${raw.node.key}`}),
    Object.assign(raw.react, {href: `${base}${raw.react.key}`}),
    Object.assign(raw.redux, {href: `${base}${raw.redux.key}`}),
    Object.assign(raw.tailwind, {href: `${base}${raw.tailwind.key}`}),
    Object.assign(raw.typescript, {href: `${base}${raw.typescript.key}`}),

],
};

export default function StackLogos() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const router = useRouter();

  const clickHandler = (href: string) => {
    router.push(`${href}?back=/#stack`);
  };

  return (
    <section id="stack" className="_bg-skew-rv _bg-black">
      <SectionHeader section="stack" />
      <article className="flex flex-col lg:flex-row text-justify flex-wrap">
        {list.map((s, i) => {
          return (
            <div
              style={{ animationDelay: `${i * 0.1 + 0.4}s` }}
              key={i}
              className={`flex flex-col items-center bg-gray-200 rounded-lg border shadow-md md:flex-row md:max-w-xl
              hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4
              relative overflow-hidden transition-all duration-500 group cursor-pointer
              ${
                imageIsLoaded
                  ? "animate-[fade_1s_ease-in-out] _animation-fill-backwards"
                  : ""
              }
              `}
              onClick={clickHandler.bind(null, s.href)}
            >
              <div className="transition-all duration-500 group-hover:scale-105 tobii-zoom flex flex-row">
                <Image
                  className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={`/skills/${s.key}.png`}
                  alt="skills"
                  width="100"
                  height="100"
                  onLoad={(event) => {
                    const target = event.target;
                    // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
                    if (
                      (target as any).src?.indexOf("data:image/gif;base64") < 0
                    ) {
                      setImageIsLoaded(true);
                    }
                  }}
                ></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="mb-2 font-bold tracking-tight text-gray-900">
                    {s.text}
                  </p>
                  <p className="mb-3 font-normal text-gray-700">
                    {message} {s.since}
                  </p>
                </div>
                <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 _bg-white p-4 rounded shadow opacity-90">
                  <h6>Read more</h6>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}
