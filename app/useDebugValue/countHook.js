"use client";
import React, { useDebugValue, useState } from "react";

export default function useCount() {
  const [count, setCount] = useState(0);

  useDebugValue(count == 0 ? "0" : "updated");

  const updateCount = () => {
    setCount((v) => (v += 1));
  };

  return [count, updateCount];
}
