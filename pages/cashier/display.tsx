import { Carousel } from "@components/carusel/Carousel";
export default function Display() {
  return (
    <div className="text-right pb-20">
      <small>The application looks like this:</small>
      <div className="max-w-full flex flex-wrap justify-center border-double border-4 bg-slate-700 m-5">
        <Carousel />
      </div>
    </div>
  );
}
