import React, { useEffect, useState } from "react";
import Image from "next/image";
import pic from "../../public/assets/face.jpg";
import { useRouter } from "next/router";

function About() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <section id="about" className="_bg-skew">
      <article>
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-wider text-white">
            About me
          </p>
          <p className="py-2">My name is Liisi.</p>
          <p className="py-2">I like to build things for internet.</p>
          <p className="py-2">
            I started out by customizing Wordpress themes around 2012, but
            shortly after that I discovered Javascript. Fell in love from the
            first sight.
          </p>
          <p className="py-2">
            Although my first actual job was C#, in 2013, I quickly drifted back
            to front end and have been enjoying it ever since.
          </p>
          <p className="py-2">
            Today I am a senior front end developer in Estonian company Turnit.
            <br />I also study a lot and try to analyze my experiences,
            successes and mistakes.
            <br /> My main focus these days is clean code and building
            maintainable and scalable systems.
          </p>

          <p className="py-2 cursor-pointer">Check it out</p>
        </div>
        <div
          className={`${
            imageIsLoaded ? "animate-[slideFromRight_1s_ease-in-out]" : ""
          } w-full h-auto m-auto _image justify-center p-4`}
        >
          <Image
            className="rounded-xl"
            src={pic}
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
