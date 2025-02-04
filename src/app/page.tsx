import Example from "@/components/dnd-kit/demo/Example";
import "./globals.css";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-slate-100 p-4">
      <div className="flex flex-col items-center justify-center h-full border border-dashed border-black rounded-md">
        <Example />
      </div>
    </div>
  );
}
