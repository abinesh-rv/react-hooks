"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

function page() {
  const pathName = usePathname();
  const state = useState(0);
  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div className="text-2xl">Counter</div>
      <div className="flex gap-4 items-center">
        <button
          className={`button ${
            state[0] == 0 ? "bg-red-500" : "bg-cyan-400"
          } hover:${state[0] == 0 ? "bg-red-500" : "bg-white"}`}
          onClick={() => state[1]((state) => state - 1)}
          disabled={state[0] == 0 ? true : false}
        >
          -
        </button>
        <div className="text-2xl">{state[0]}</div>
        <button
          className="button"
          onClick={() => state[1]((state) => state + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default page;
