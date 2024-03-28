"use client";
import React, {
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";

function page() {
  const pathName = usePathname();
  const [input, setInput] = useState();
  const [isDefferedInput, setIsDefferedInput] = useState(false);
  const deferredInput = useDeferredValue(input);

  return (
    <div className="space-y-10 overflow-y-scroll h-[90vh]">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div className="space-y-5">
        <input className="input" onChange={(e) => setInput(e.target.value)} />
        <button
          className="button ml-3"
          onClick={() => setIsDefferedInput(!isDefferedInput)}
        >
          toggle passing data
        </button>
        <div>
          currently passing :
          <span className="text-cyan-400">
            {isDefferedInput ? " Deferred Input" : " Normal Input"}
          </span>
        </div>
        <div className="text-cyan-400">* observe the rendering performance</div>
        <List data={isDefferedInput ? deferredInput : input} />
      </div>
    </div>
  );
}

export default page;

export const List = memo(function List({ data }) {
  const list = [];
  for (let i = 0; i < 10000; i++) {
    list.push(data);
  }

  return (
    <div>
      {list.map((value) => (
        <div>input text : {value}</div>
      ))}
    </div>
  );
});
