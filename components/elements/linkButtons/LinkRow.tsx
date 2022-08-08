import { PropsWithChildren } from "react";
import LinkBack from "./LinkBack";
import LinkEducation from "./LinkEducation";
import LinkHome from "./LinkHome";
import LinkMainProject from "./LinkMainProject";
import LinkSkills from "./LinkSkills";

export default function LinkRow({
  color,
  back,
}: {
  back?: string;
  color?: "contrast" | "white";
}) {
  return (
    <div className="my-28 flex">
      <Col>
        <LinkBack />
      </Col>
      <Col>
        <LinkHome />
      </Col>
      <Col>
        <LinkMainProject back={back} color={color} />
      </Col>
      <Col>
        <LinkSkills back={back} color={color} />
      </Col>
      <Col>
        <LinkEducation back={back} color={color} />
      </Col>
    </div>
  );
}

function Col({ children }: PropsWithChildren) {
  return <div className="mr-4">{children}</div>;
}
