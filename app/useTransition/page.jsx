"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { usePathname } from "next/navigation";

function page() {
  const pathName = usePathname();

  const [input, setInput] = useState();

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      console.log("hii");
    });
  };

  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div className="space-y-5">
        <input
          className="input"
          onChange={handleChange}
          placeholder="write something"
        />
        {isPending ? <div>Loading.....</div> : <div>check console</div>}
      </div>
    </div>
  );
}

export default page;
