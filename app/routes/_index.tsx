import type { MetaFunction } from "@remix-run/node";
import { ModeToggle } from "~/components/toggle";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-red-600 text-8xl">Welcome to Remix</h1>
   <ModeToggle/>
    </div>
  );
}
