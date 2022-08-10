import Image from "next/image";

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
//prettier-ignore
const story = <div> 
  <div>Usually when I say my project uses Aurelia I get: Aurelia? Never heard of it.</div>
  <div className="flex flex-col lg:flex-row">Well.. {aureliaLink} is a javascript framework made by {robLink}</div>
  <div>Rob used to be one of the main developers behind Angular, but then decided to make his own framework.</div> 
  <div>At the time Aurelia seemed fresh. Unopinionated. Highly configurable. Easy to learn. It really was a good framework.</div>
  <div>I would say it is somewhere between Vue and React.</div> 
  <div>It has two way bindings and computed elements like vue. But it uses javascript classes like React did 
  back then and is highly unopinionated. Just like React.</div> 
  <div>Our final choice was between Angular (the 1st edition) and Aurelia and we chose Aurelia because it was lighter and more configurable.
  Aurelia helps you to write an application but it does not force you to write it in a certain way.
  </div>
</div>

export default function Aurelia() {
  return (
    <div>
      <h2>What the heck is Aurelia?</h2>
      <div className="">
        {story}
        <div className="right">
          <Image
            src="/skills/aurelia.png"
            alt="aurelia"
            width={200}
            height={200}
          ></Image>
        </div>
      </div>
    </div>
  );
}
