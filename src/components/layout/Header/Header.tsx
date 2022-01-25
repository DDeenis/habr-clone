import React from "react";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <header className="w-full border-b-2 border-gray-300">
      <div className="w-full mx-auto max-w-7xl flex justify-between">
        <HeaderNav />
      </div>
    </header>
  );
};
