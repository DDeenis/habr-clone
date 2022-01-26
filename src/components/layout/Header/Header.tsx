import React from "react";
import { HeaderNav } from "./HeaderNav";
import { UserBar } from "./UserBar";

export const Header = () => {
  return (
    <header className="w-full border-b-[1px] border-gray-300 md:px-[10vw]">
      <div className="w-full max-w-7xl flex justify-between flex-wrap">
        <HeaderNav />
        <UserBar
          user={{
            username: "Test",
            avatar:
              "https://images.unsplash.com/photo-1642543348763-9f7b40b3abdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
      </div>
    </header>
  );
};
