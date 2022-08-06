import Application from "@components/pages/webcashier/application";
import Aurelia from "@components/pages/webcashier/aurelia";
import Bus from "@components/bus/Bus";
import Display from "@components/pages/webcashier/display";
import Image from "next/image";
import Intro from "@components/pages/webcashier/intro";
import LayoutPage from "@components/layout/LayoutPage";
import LifeLessons from "@components/pages/webcashier/lifeLessons";
import Me from "@components/pages/webcashier/me";
import Responsibilities from "@components/pages/webcashier/responsibilities";
import Stack from "@components/pages/webcashier/stack";

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
        <Display />
        <Application />
        <Aurelia />
      </div>
    </LayoutPage>
  );
}
