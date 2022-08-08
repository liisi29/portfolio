const { message } = {
  message: "Designed and built by Liisi Raidaru",
};
export default function Footer() {
  return (
    <footer className="_bg-black md:flex justify-between text-gray-500 px-2">
      <div>{message}</div>
      <div>
        <span className="text-gray-500">Head</span>
        <span className="text-gray-300">Script</span>
        <span className="text-gray-500">Id</span>
      </div>
    </footer>
  );
}
