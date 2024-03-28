"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CounterContext } from "./context";

function page() {
  const pathName = usePathname();
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount((v) => v + 1);
  };
  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div className="space-y-5">
        <CounterContext.Provider value={{ updateCount }}>
          <div>parent component :- count value : {count}</div>
          <div className="flex gap-4 justify-center">
            <Child1 />
            <Child2 />
          </div>
        </CounterContext.Provider>
        <div className="text-cyan-400">* resolves prop drilling issue</div>
      </div>
    </div>
  );
}

function Child1() {
  const { updateCount } = useContext(CounterContext);
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div>From child 1</div>
        <button className="button" onClick={updateCount}>
          update state
        </button>
      </div>
      <GrandChild1 />
    </div>
  );
}

function Child2() {
  const { updateCount } = useContext(CounterContext);
  return (
    <div>
      <div>From child 2</div>
      <button className="button" onClick={updateCount}>
        update state
      </button>
    </div>
  );
}

function GrandChild1() {
  const { updateCount } = useContext(CounterContext);
  return (
    <div>
      <div>From grandchild 1</div>
      <button className="button" onClick={updateCount}>
        update state
      </button>
    </div>
  );
}

export default page;
