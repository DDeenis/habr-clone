import { navItems } from "@/helpers/componentsSettings/header";
import React from "react";
import { HeaderNavItem } from "./HeaderNavItem";

export const HeaderNav = () => {
  return (
    <nav className="w-full max-w-3xl" aria-label="primary">
      <ul className="flex justify-between content-center items-center flex-wrap">
        {navItems.map((i) => (
          <HeaderNavItem key={i.path} {...i} />
        ))}
      </ul>
    </nav>
  );
};
