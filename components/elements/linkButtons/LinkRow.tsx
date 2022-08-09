import { PropsWithChildren } from "react";
import LinkBack from "./LinkBack";
import LinkEducation from "./LinkEducation";
import LinkCareer from "./LinkCareer";
import LinkHome from "./LinkHome";
import LinkMainProject from "./LinkMainProject";
import LinkSkills from "./LinkSkills";

export default function LinkRow({
  color,
  back,
  all = true,
}: {
  back?: string;
  color?: "contrast" | "white";
  all?: boolean;
}) {
  return (
    <div className="my-28 flex flex-wrap">
      {all && (
        <Col>
          <LinkBack />
        </Col>
      )}
      {all && (
        <Col>
          <LinkHome />
        </Col>
      )}
      <Col>
        <LinkMainProject back={back} color={color} />
      </Col>
      <Col>
        <LinkCareer back={back} color={color} />
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
  return <div className="mr-4 mt-4">{children}</div>;
}
