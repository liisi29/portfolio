import Bus from "@components/bus/Bus";
import LayoutPage from "@components/layout/LayoutPage";
import Image from "next/image";
import { texts } from "@translations/webcashier";
import Aurelia from "./aurelia";
import Conclusion from "./conclusion";
import Stack from "./stack";
import Intro from "./intro";
import Display from "./display";
import Dev from "./dev";
import Me from "./me";

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
        <Display />
        <Me />
        <Dev />
        <Intro />
        <Stack />
        <Conclusion />
        <Aurelia />
      </div>
    </LayoutPage>
  );
}
