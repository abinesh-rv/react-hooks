"use client";

import { usePathname } from "next/navigation";
import {
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "incAge": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changeAge": {
      return {
        ...state,
        age: Number(action.newAge),
      };
    }
    case "changeName": {
      return {
        name: action.newName,
        age: state.age,
      };
    }
  }
};

const initialState = { name: "abi", age: 21 };

function page() {
  const pathName = usePathname();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="space-y-10">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div>
        <input
          value={state.name}
          className="input mr-4"
          onChange={(e) =>
            dispatch({ type: "changeName", newName: e.target.value })
          }
        />
        <input
          type="number"
          value={state.age}
          className="input mr-4"
          onChange={(e) =>
            dispatch({ type: "changeAge", newAge: e.target.value })
          }
        />
        <button className="button" onClick={() => dispatch({ type: "incAge" })}>
          increment age
        </button>
        <div>
          name : {state.name} , age : {state.age}
        </div>
      </div>
    </div>
  );
}

export default page;
