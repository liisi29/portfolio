import LinkBack from "@components/elements/linkButtons/LinkBack";
import LinkEducation from "@components/elements/linkButtons/LinkEducation";
import LinkHome from "@components/elements/linkButtons/LinkHome";
import LinkMainProject from "@components/elements/linkButtons/LinkMainProject";
import LinkRow from "@components/elements/linkButtons/LinkRow";
import LayoutPage from "@components/layout/LayoutPage";
import StackTable from "@components/pages/stack/StackTable";

export default function Skills() {
  return (
    <LayoutPage section="skills">
      <div className="relative">
        <div className="">
          <h1>My skills</h1>
          <h2>What stack I have used and learned</h2>
        </div>
        <StackTable />
        <LinkRow />
      </div>
    </LayoutPage>
  );
}
