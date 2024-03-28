"use client";
import React, {
  forwardRef,
  use,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  useTransition,
} from "react";
import { usePathname } from "next/navigation";

function page() {
  const pathName = usePathname();

  const childRef = useRef();

  const handleClick = () => {
    childRef.current.getData();
  };

  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div className="space-y-5">
        <button onClick={handleClick} className="button">
          click
        </button>
        <Child ref={childRef} data={"hii from child"} />
      </div>
    </div>
  );
}

export default page;

const Child = forwardRef(({ data }, ref) => {
  useImperativeHandle(ref, () => ({
    getData: () => console.log(data),
    logging: () => console.log("hii from logging"),
  }));
  return (
    <>
      <div>Child Component</div>
      <div>{data}</div>
    </>
  );
});
