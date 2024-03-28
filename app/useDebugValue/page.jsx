"use client";
import { usePathname } from "next/navigation";
import useCount from "./countHook";

function page() {
  const pathName = usePathname();
  const [count, updateCount] = useCount();
  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div className="space-y-5">
        <div>custom hook</div>
        <div> count value : {count}</div>
        <button className="button" onClick={() => updateCount()}>
          update count
        </button>
      </div>
    </div>
  );
}

export default page;
