"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function page() {
  const pathName = usePathname();

  const InputRef = useRef();
  const ElementRef = useRef();
  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div className="space-y-5">
        <div className="space-x-5">
          <input className="input" ref={InputRef} />
          <button className="button" onClick={() => InputRef.current.focus()}>
            Press to Focus
          </button>
          <button
            className="button"
            onClick={() => {
              ElementRef.current.innerText += " " + InputRef.current.value;
              InputRef.current.value = "";
            }}
          >
            Submit
          </button>
        </div>
        <div ref={ElementRef}>Input data : </div>
      </div>
    </div>
  );
}

export default page;
