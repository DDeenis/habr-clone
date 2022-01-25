import { NavItemType } from "@/helpers/componentsSettings/header";
import Link from "next/link";
import React from "react";

export const HeaderNavItem: React.FC<NavItemType> = ({ title, path }) => {
  return (
    <li className="text-[.875rem] text-gray-400 hover:text-blue-500 transition-colors py-[1rem] leading-4">
      <Link href={path}>{title}</Link>
    </li>
  );
};
