import LinkBack from "@components/elements/linkButtons/LinkBack";
import { useEffect } from "react";

export default function FourOFour() {
  useEffect(() => {
    var canvas = document.getElementById("canvas");
    //@ts-ignore
    var c = canvas?.getContext("2d");
    //@ts-ignore
    var centerX = canvas?.width / 2;

    var trunkHeight = 100;
    var branchLengthRatio = 0.75;
    var branchAngleDifference = 0.27;
    var branchingDepth = 10;

    //@ts-ignore
    function drawTree(x1, y1, x2, y2, branchLength, branchAngle, depth) {
      if (depth == 0) return;
      else {
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.closePath();
        c.stroke();

        branchLength *= branchLengthRatio;
        //@ts-ignore
        function branch(angle) {
          var branchX2 = x2 + branchLength * Math.cos(angle);
          var branchY2 = y2 + branchLength * Math.sin(angle);
          drawTree(x2, y2, branchX2, branchY2, branchLength, angle, depth - 1);
        }

        // Right branch
        branch(branchAngle + branchAngleDifference);

        // Left branch
        branch(branchAngle - branchAngleDifference);
      }
    }

    function redrawTree() {
      //@ts-ignore
      c.clearRect(0, 0, canvas?.width, canvas?.height);

      var x1 = centerX;
      //@ts-ignore
      var y1 = canvas?.height;
      var x2 = centerX;
      //@ts-ignore
      var y2 = canvas?.height - trunkHeight;
      drawTree(x1, y1, x2, y2, trunkHeight, -Math.PI / 2, branchingDepth);
    }

    canvas?.addEventListener("mousemove", function (e) {
      branchLengthRatio = e.x / 300;
      //@ts-ignore
      branchAngleDifference = (e.y / canvas?.height) * Math.PI;
      redrawTree();
      console.log("branchLengthRatio = " + branchLengthRatio);
      console.log("branchAngleDifference = " + branchAngleDifference);
    });

    redrawTree();
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-start items-center ">
      <div>
        <canvas id="canvas" width="400" height="400" />
      </div>
      <div className="mt-24 lg:ml-24 lg:mt-0">
        <h1>Page not found</h1>
        <div className="mt-16 m-auto align-center w-full">
          <LinkBack color="gray" />
        </div>
      </div>
    </div>
  );
}
