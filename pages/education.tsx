import LinkBack from "@components/elements/linkButtons/LinkBack";
import LinkMainProject from "@components/elements/linkButtons/LinkMainProject";
import LayoutPage from "@components/layout/LayoutPage";
import CoursesTable from "@components/pages/education/CoursesTable";
import EducationTable from "@components/pages/education/EducationTable";
import LanguageTable from "@components/pages/education/LanguageTable";

export default function WebCashier() {
  return (
    <LayoutPage section="education">
      <div className="relative">
        <div className="">
          <h1>My education</h1>
          <h2>Formal</h2>
        </div>
        <EducationTable />
        <div className="mt-12">
          <h2>Languages</h2>
        </div>
        <LanguageTable />
        <div className="mt-12">
          <h2>Udemy Courses in 2022</h2>
        </div>
        <CoursesTable />
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
