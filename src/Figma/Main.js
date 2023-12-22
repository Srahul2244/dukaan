import React from "react";
import Dashboard from "./Dashboard";
import SideNav from "./Figma";

const Main = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%]">
          <SideNav />
        </div>
        <div className="w-[80%]">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Main;
