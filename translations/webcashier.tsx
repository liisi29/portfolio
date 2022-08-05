import { ReactElement } from "react";

export const texts = {
  introduction: {
    title: "Introduction",
    list: [
      "Sell tickets",
      "Check in the bus",
      "Mark no shows",
      "Release seats",
      "View bought tickets",
      "Return tickets",
      "Modify tickets",
      "Add luggage",
      "Change seats",
      "Sell different addons",
      "Download reports",
      "Sell vouchers",
      "Connect bus tickets to different client cards",
      "Etc... It is a big application",
    ],
  },
  tech: {
    title: "Technology",
    paragraphs: [
      `We chose Aurelia as our main framework. Also the project is
      based on typescript, bootstrap and REST api.`,
      `Rob used to be one of the main developers behind Angular, but
      then decided to make his own framework`,
      `At the time Aurelia was fresh and modern. Unopinionated. Highly
      configurable, easy to learn. It really was and is a good
      framework. Unfortunately Rob Eisenberg was hired by Microsoft
      and Aurelia never got the full fame..`,
    ],
  },
  lessons: {
    title: "What I have learned",
    list: [
      "Research the end user",
      "Love your team",
      "No spaghetti code! Please!",
      'Every "let\'s cut the corner" will hurt you in the end',
      "The importance of tests!",
    ],
  },
};
//prettier-ignore
export const Aurelia = ({aurelia, rob}: {aurelia:ReactElement, rob:ReactElement}) => <div> 
  <div>Usually when I say my project uses Aurelia I get: Aurelia? Never heard of it.</div>
  <div className="flex">Well.. {aurelia} is a javascript framework made by {rob}.</div>
  <div>Rob used to be one of the main developers behind Angular, but then decided to make his own framework.</div> 
  <div>At the time Aurelia seemed fresh. Unopinionated. Highly configurable. Easy to learn. It really was a good framework.</div>
  <div>I would say it is somewhere between Vue and React.</div> 
  <div>It has two way bindings and computed elements like vue. But it uses javascript classes like React did 
  back then and is highly unopinionated. Just like React.</div> 
  <div>Our final choice was between Angular (the 1st edition) and Aurelia and we chose Aurelia because it was lighter and more configurable.
  Aurelia helps you to write an application but it does not force you to write it in a certain way.
  </div>
</div>
