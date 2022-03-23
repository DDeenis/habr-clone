import { navItems, NavItemType } from "@/helpers/componentsSettings/header";
import React from "react";
import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";

export const MainNav = () => {
  return (
    <div className="flex content-center items-center">
      <nav className="w-full max-w-3xl hidden lg:block" aria-label="primary">
        <ul className="flex justify-between content-center items-center flex-wrap gap-5">
          {navItems.map((i) => (
            <NavItem key={i.path} {...i} />
          ))}
        </ul>
      </nav>
      <MobileNav />
    </div>
  );
};

export const NavItem: React.FC<NavItemType> = ({ title, path }) => {
  return (
    <li className="text-[.875rem] text-gray-400 hover:text-blue-500 transition-colors font-medium py-[1rem] box-border leading-4">
      <Link to={path}>{title}</Link>
    </li>
  );
};
