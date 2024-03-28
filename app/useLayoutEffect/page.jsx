"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function page() {
  const pathName = usePathname();

  const oneRef = useRef();

  const isAuthenticated = false;

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      oneRef.current.remove();
    }
  });

  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div>
        <div ref={oneRef}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          doloribus, aperiam provident eius cum cumque tenetur! Tempore, iusto
          omnis quae repellat nobis error quo dicta aspernatur voluptates
          facilis, odio reprehenderit assumenda incidunt nulla fuga dignissimos
          saepe provident doloribus delectus maxime!
        </div>
      </div>
      <div className="text-cyan-400">
        * works in react but not in nextjs, the flickering happens, try
        refreshing
      </div>
    </div>
  );
}

export default page;
