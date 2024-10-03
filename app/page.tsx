import Transfer from "./components/Transfer";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-row justify-between py-4 px-2">
        <div className="flex text-4xl cursor-pointer p-4">Union</div>
        <div className="flex text-xl cursor-pointer border border-white p-4 rounded-2xl text-center items-center">Connect Wallet</div>
      </div>
      <div className="flex flex-col">
        <Transfer />
      </div>
    </div>
  );
}
