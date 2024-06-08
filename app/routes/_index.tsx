import { ModeToggle } from "~/components/toggle";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-cyan-300 dark:bg-black flex justify-between py-[30px] px-[60px]">
      <h1 className="text-gray-800 font-bold dark:text-white text-4xl">QTX</h1>
   <ModeToggle/>
    </div>
  );
}
