import Timeline from "@components/timeline/Timeline";
import LayoutPage from "@components/layout/LayoutPage";
import LinkRow from "@components/elements/linkButtons/LinkRow";

export default function Career() {
  return (
    <LayoutPage section="career">
      <div className="relative">
        <Timeline />
        <div className="">
          <LinkRow />
        </div>
      </div>
    </LayoutPage>
  );
}
