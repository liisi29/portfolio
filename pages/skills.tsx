import LinkBack from "@components/elements/linkButtons/LinkBack";
import LinkMainProject from "@components/elements/linkButtons/LinkMainProject";
import LayoutPage from "@components/layout/LayoutPage";
import StackTable from "@components/pages/stack/StackTable";

export default function WebCashier() {
  return (
    <LayoutPage section="skills">
      <div className="relative">
        <div className="">
          <h1>My skills</h1>
          <h2>What stack I have used and learned</h2>
        </div>
        <StackTable />
        <div className="my-28 flex">
          <div className="mr-4">
            <LinkBack />
          </div>
          <div>
            <LinkMainProject />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
