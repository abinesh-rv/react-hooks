"use client";
import React, {
  use,
  useEffect,
  useId,
  useRef,
  useState,
  useTransition,
} from "react";
import { usePathname } from "next/navigation";

function page() {
  const pathName = usePathname();

  const id = useId();

  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div className="space-y-5">
        <Input />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam
          iusto quis id reiciendis saepe possimus asperiores nihil quaerat
          temporibus laboriosam praesentium illo expedita facere perspiciatis,
          dolor sed? Consequatur reiciendis dicta mollitia fugit eius, adipisci
          ex quis neque perferendis nulla porro unde illum deleniti architecto
          possimus impedit ipsum magni error.
        </div>
        <Input />
      </div>
    </div>
  );
}

export default page;

const Input = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mr-4">
        Label
      </label>
      <input id={id} className="input" />
    </div>
  );
};
