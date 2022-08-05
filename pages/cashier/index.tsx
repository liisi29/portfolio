import Bus from "@components/bus/Bus";
import LayoutPage from "@components/layout/LayoutPage";
import Image from "next/image";
import { texts } from "@translations/webcashier";
import Aurelia from "./aurelia";
import LifeLessons from "./lifeLessons";
import Stack from "./stack";
import Intro from "./intro";
import Display from "./display";
import Me from "./me";
import Application from "./application";
import Responsibilities from "./responsibilities";

export default function WebCashier() {
  return (
    <LayoutPage section="webcashier">
      <Bus />
      <div className="relative">
        <div className="">
          <h1>Webcashier</h1>
          <h2>My biggest project so far</h2>
        </div>
        <Intro />
        <Stack />
        <Responsibilities />
        <div className="">
          <div className="w-[50%] inline-block">
            <Me />
          </div>
          <div className="ml-12 mt-12 w-[45%] inline-block">
            <Image
              src="/cashier/modify.jpg"
              alt="modify"
              width={983}
              height={591}
            ></Image>
          </div>
        </div>
        <LifeLessons />

        <Application />
        <Display />
        <Aurelia />
      </div>
    </LayoutPage>
  );
}
