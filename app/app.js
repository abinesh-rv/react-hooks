import React from "react";
import SideBar from "./_components/SideBar";

function App({ children }) {
  return (
    <div className="h-[95vh] w-[95vw] rounded-lg border border-cyan-500 flex overflow-hidden">
      <SideBar />
      <div className="text-white p-4 w-full text-lg">{children}</div>
    </div>
  );
}

export default App;
