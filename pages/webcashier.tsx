import Bus from "@components/bus/bus";
import { Carousel } from "@components/carusel/Carousel";
import LayoutPage from "@components/layout/LayoutPage";
import Image from "next/image";

export default function WebCashier() {
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
            <Image
              className="rounded-xl "
              src="/cashier/sell.jpg"
              alt="/"
              width="1700"
              height="935"
            ></Image>
          </div>
        </div>
        <div>
          <h4>Introduction</h4>
          <ul>
            <li>Sell tickets</li>
            <li>Check in the bus</li>
            <li>Mark no shows</li>
            <li>Release seats</li>
            <li>View bought tickets</li>
            <li>Return tickets</li>
            <li>Modify tickets</li>
            <li>Add luggage</li>
            <li>Change seats</li>
            <li>Sell different addons</li>
            <li>Download reports</li>
            <li>Sell vouchers</li>
            <li>Connect bus tickets to different client cards</li>
            <li>Etc... It is a big application :</li>
          </ul>
        </div>
        <div>
          <h4>Technology</h4>
          <p>
            We chose Aurelia as our main framework. Also the project is based on
            typescript, bootstrap and REST api.
          </p>
          <h4>Ehh?! What is Aurelia? Never heard of it</h4>
          <p>
            Yes.. Well.. Aurelia is a javascript framework made by Rob Eisenberg
            https://aurelia.io/
          </p>
          <p>
            Rob used to be one of the main developers behind Angular, but then
            decided to make his own framework
          </p>
          <p>
            At the time Aurelia was fresh and modern. Unopinionated. Highly
            configurable, easy to learn. It really was and is a good framework.
            Unfortunately Rob Eisenberg was hired by Microsoft and Aurelia never
            got the full fame..
          </p>
        </div>
        <div>
          <h4>What I did?</h4>
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
          <h4>Work processes</h4>
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
          <h4>What I learned?</h4>
          <ul>
            <li>Research the end user</li>
            <li>Love your team</li>
            <li>No spaghetti code! Please!</li>
            <li>
              Every <span>cut the corder - the deadline is coming</span> will
              hurt you in the end
            </li>
            <li>The importance of tests!</li>
          </ul>
        </div>
        <Carousel />
      </div>
    </LayoutPage>
  );
}
