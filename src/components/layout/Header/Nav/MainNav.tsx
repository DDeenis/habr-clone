import { navItems, NavItemType } from "@/helpers/componentsSettings/header";
import Link from "next/link";
import React from "react";
import { MobileNav } from "./MobileNav";
import MediaQuery from "react-responsive";
import { breakpoints } from "@/utils/media/mediaQueryTools";

export const MainNav = () => {
  return (
    <div className="flex content-center items-center">
      <MediaQuery {...breakpoints.lg}>
        <nav className="w-full max-w-3xl hidden md:block" aria-label="primary">
          <ul className="flex justify-between content-center items-center flex-wrap gap-5">
            {navItems.map((i) => (
              <NavItem key={i.path} {...i} />
            ))}
          </ul>
        </nav>
      </MediaQuery>
      <MobileNav />
    </div>
  );
};

export const NavItem: React.FC<NavItemType> = ({ title, path }) => {
  return (
    <li className="text-[.875rem] text-gray-400 hover:text-blue-500 transition-colors font-medium py-[1rem] box-border leading-4">
      <Link href={path}>{title}</Link>
    </li>
  );
};
