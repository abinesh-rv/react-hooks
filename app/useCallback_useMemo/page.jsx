"use client";
import React, { useCallback, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

function page() {
  const pathName = usePathname();

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);

  const handleClick = () => {
    alert(one);
  };

  const handleCallbackClick = useCallback(() => {
    alert(one);
  }, [two]);

  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">useCallback and useMemo</div>
      <div className="flex flex-col gap-4">
        <div>current value of state 1 : {one.toString()}</div>
        <div className="flex  gap-4 items-center">
          <button className="button" onClick={() => handleClick()}>
            without callback
          </button>
          <button className="button" onClick={() => handleCallbackClick()}>
            with callback of dependency state two
          </button>
        </div>
        <button className="button" onClick={() => setOne(!one)}>
          change state one
        </button>
        <button className="button" onClick={() => setTwo(!two)}>
          change state two
        </button>
      </div>
      <div>
        <div>useCallback</div>
        <div className="text-cyan-500">* memorized callback</div>
      </div>
      <div>
        <div>useMemo</div>
        <div className="text-cyan-500">* memorized value</div>
      </div>
      <div>
        <div className="text-center tracking-wider text-cyan-300">
          {
            "useCallback( func() , []) is equivalent to useMemo( () => func() , [])"
          }
        </div>
      </div>
    </div>
  );
}

export default page;
