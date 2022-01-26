import { NavItemType } from "@/helpers/componentsSettings/header";
import Link from "next/link";
import React from "react";

export const HeaderNavItem: React.FC<NavItemType> = ({ title, path }) => {
  return (
    <li className="text-[.875rem] text-gray-400 hover:text-blue-500 transition-colors font-medium py-[1rem] box-border leading-4">
      <Link href={path}>{title}</Link>
    </li>
  );
};
