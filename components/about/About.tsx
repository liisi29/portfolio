import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function About() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 relative"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-wider text-[red]">About</p>
          <h2 className="py-4">Who am I </h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            justo vehicula, volutpat nisl eget, dignissim orci. Aenean
            vestibulum tincidunt feugiat. Ut ante magna, consectetur id eros ac,
            scelerisque consequat libero. Maecenas diam magna, tincidunt vel
            imperdiet ac, viverra vitae augue. Aliquam iaculis libero eget odio
            suscipit vulputate. Integer venenatis urna ut turpis vestibulum, nec
            luctus massa tincidunt. Donec in quam nisl. Nullam cursus lectus
            vitae urna tempor hendrerit. Fusce efficitur mauris purus, eget
            tincidunt diam sodales non. Nullam eget leo dignissim, convallis
            velit sed, semper ipsum. Proin congue dictum nisl at convallis
          </p>
          <p className="py-2 text-gray-600 cursor-pointer">Check it out</p>
        </div>
        <div
          className={`${
            imageIsLoaded ? "animate-[slideFromRight_2s_ease-in-out]" : ""
          } w-full h-auto m-auto _image justify-center p-4`}
        >
          <Image
            className="rounded-xl"
            src="/../public/assets/face.jpg"
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
      </div>
    </div>
  );
}

export default About;
