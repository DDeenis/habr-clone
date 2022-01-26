import { navItems } from "@/helpers/componentsSettings/header";
import React from "react";
import { HeaderNavItem } from "./HeaderNavItem";

export const HeaderNav = () => {
  return (
    <nav className="w-full mx-auto max-w-3xl" aria-label="primary">
      <ul className="list-none m-0 p-0 flex justify-between content-center">
        {navItems.map((i) => (
          <HeaderNavItem key={i.path} {...i} />
        ))}
      </ul>
    </nav>
  );
};
