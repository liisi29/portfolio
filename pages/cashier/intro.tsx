import ListOfTexts from "@components/elements/ListOfTexts";

const { title, list } = {
  title: "Introduction",
  list: [
    "Sell tickets",
    "Check in the bus",
    "Mark no shows",
    "Release seats",
    "View bought tickets",
    "Return tickets",
    "Modify tickets",
    "Add luggage",
    "Change seats",
    "Sell different addons",
    "Download reports",
    "Sell vouchers",
    "Connect bus tickets to different client cards",
    "Etc... It is a big application",
  ],
};
export default function IntroMe() {
  return (
    <div>
      <h2>{title}</h2>
      <ListOfTexts list={list} />
    </div>
  );
}
