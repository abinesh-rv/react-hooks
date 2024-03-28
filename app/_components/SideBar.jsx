"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";

function SideBar() {
  const [cookie, setCookie] = useCookies(["hook"]);
  const [hook, setHook] = useState();
  const hooks = [
    "useState",
    "useEffect",
    "useRef",
    "useCallback_useMemo",
    "useContext",
    "useDebugValue",
    "useDeferredValue",
    "useTransition",
    "useId",
    "useImperativeHandle",
    "useLayoutEffect",
    "useReducer",
  ];

  const CookieHandle = (e, value) => {
    setCookie("hook", value, { path: "/" });
    setHook(value);
  };

  useEffect(() => {
    let path = cookie.hook;
    if (path) {
      setHook(path);
    } else {
      setHook("/");
    }
  }, []);
  return (
    <CookiesProvider>
      <div className="h-full w-1/6 bg-cyan-500 rounded-l-lg p-4  ">
        <div
          className={`text-center text-2xl tracking-wider`}
          onClick={(e) => CookieHandle(e, "/")}
        >
          <Link
            href={"/"}
            className={` ${hook == "/" ? "text-white" : "text-black"}`}
          >
            RV Hooks
          </Link>
        </div>
        <div className="h-full  flex flex-col justify-center text-xl gap-6">
          {hooks.map((value, index) => (
            <div key={index} onClick={(e) => CookieHandle(e, value)}>
              <Link
                href={`/${value}`}
                className={`${hook == value ? "text-white" : "text-black"}`}
              >
                {value}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </CookiesProvider>
  );
}

export default SideBar;
