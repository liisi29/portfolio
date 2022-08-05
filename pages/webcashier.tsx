import Bus from "@components/bus/Bus";
import { Carousel } from "@components/carusel/Carousel";
import LayoutPage from "@components/layout/LayoutPage";
import Image from "next/image";
import { Aurelia, texts } from "@translations/webcashier";

export default function WebCashier() {
  const { introduction, lessons } = texts;

  const aureliaLink = (
    <a href="https://aurelia.io/" className="items-center flex px-3">
      <span className="underline _link _text-contrast _animation-fill-backwards">
        Aurelia
      </span>
    </a>
  );
  const robLink = (
    <a className="items-center flex px-3" href="https://youtu.be/fi33aDFKvxE">
      <span className="underline _link _text-contrast">Rob Eisenberg</span>
    </a>
  );
  return (
    <LayoutPage section="webcashier">
      <Bus />
      <div className="relative">
        <div className="text-right pb-20">
          <h1>Webcashier</h1>
          <h2>My biggest project so far</h2>
        </div>
        <div className="text-right">
          <p>
            Since 2016 I have been developing webcashier application for bus-and
            trainstations.
          </p>
        </div>
        <div className="text-right pb-20">
          <small>It looks like this:</small>
          <div className="max-w-full flex flex-wrap justify-center border-double border-4 bg-slate-700 m-5">
            <Carousel />
          </div>
        </div>
        <div>
          <h2>{introduction.title}</h2>
          <ul>
            {introduction.list.map((t: string, i: number) => (
              <li
                key={i}
                className={`before:content-["▶"] before:_text-contrast before:absolute before:left-0 before:top-0 relative pl-8`}
              >
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Technology</h2>
          <p>{texts.tech.paragraphs[0]}</p>
        </div>
        <div>
          <h2>Aurelia</h2>
          <div className="">
            <Aurelia aurelia={aureliaLink} rob={robLink}></Aurelia>
            <div className="right">
              <Image
                src="/cashier/aurelia-icon.svg"
                alt="aurelia"
                width={200}
                height={200}
              ></Image>
            </div>
          </div>
        </div>
        <div>
          <h2>What I did?</h2>
          <p>
            The first choices were made by our lead architect, but later I was
            quite on my own.
          </p>
          <p>
            Most of the time I made every decision regarding the tech
            architecture of the application and wrote most of the code
          </p>
          <p>I did not design the visuals and I did not design the UX!</p>
        </div>
        <div>
          <h3>Work processes</h3>
          <p>
            All the processes have changed back and forth several times during
            the years.
          </p>
          <p>
            There have been times when I get the complete analytics for my code
            almost down to method names (well.. almost)
          </p>
          <p>
            But most of the time I got the requirements from project manager and
            we talked it over with the backend guys what I need in and what they
            can send by api in order to do the feature..
          </p>
        </div>
        <div>
          <h2>{lessons.title}</h2>
          <ul>
            {lessons.list.map((t: string, i: number) => (
              <li
                key={i}
                className={`before:content-["▶"] before:_text-contrast before:absolute before:left-0 before:top-0 relative pl-8`}
              >
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LayoutPage>
  );
}
