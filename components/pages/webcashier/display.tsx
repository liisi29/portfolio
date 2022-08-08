import { Carousel } from "@components/carusel/Carousel";
export default function Display() {
  return (
    <div className="text-right pb-20 overflow-x-hidden">
      <small>The application looks like this:</small>
      <div className="hidden lg:flex max-w-full  flex-wrap justify-center border-double border-4 bg-slate-700 m-5">
        <Carousel />
      </div>
    </div>
  );
}
