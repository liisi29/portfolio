import BlockListWithTriangles from "@components/elements/lists/BlockListWithTriangles";

const { title, list } = {
  title: "More about the application. What can you do with the it?",
  list: [
    "Sell tickets (of course)",
    "View already bought tickets. There is A LOT of data that comes with a ticket. Names, addresses, comments, routes, addoms, seats, etc.. Lot of stuff.",
    "Return tickets. And get a refund. Or not get a refund",
    "Modify tickets. With cost or without cost..",
    "Check in the whole bus",
    "Check in individual people or mark them as no-shows",
    "Release seats for no-shows or book seats for other passengers",
    "Add luggage. Add more luggage. Return the added luggage. Change the luggage. Lose the luggage.. Oh, no, wait.. this is not done by the application.",
    "Change seats. Book seats for pets or children or special needs. And make sure everyone has their friend beside them.",
    "Sell different addons. Like water. Or bycicle. Or insurance. Or parking pass for your car.",
    "Download reports. Many reports. All kinds of reports. I would never have thought there are so many reports in the world",
    "Sell vouchers. This is a cool one! You can specify the value of a voucher and the price. And then sell them and later use them to pay for the bus tickets",
    "Connect bus tickets to different client cards. Or travel passes - which is like a prepay that lets you ride for free for some time or some routes.",
    "Etc... It is a big application :)",
  ],
};
export default function Application() {
  return (
    <div>
      <h2>{title}</h2>
      <BlockListWithTriangles list={list} />
    </div>
  );
}
