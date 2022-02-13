import React from "react";
import { FaSearch, FaBell, FaPencilAlt } from "react-icons/fa";
import { User } from "@/types/user";
import { UserDropdown } from "./UserDropdown/UserDropdown";

interface UserBarProps {
  user: User;
}

const iconClass =
  "fill-gray-400 hover:fill-blue-500 transition-colors w-5 h-5 cursor-pointer";

export const UserBar: React.FC<UserBarProps> = ({ user }) => {
  return (
    <ul className="flex justify-between content-center gap-5 my-auto">
      <UserBarIcon icon={<FaSearch className={iconClass} />} path="/search" />
      <UserBarIcon icon={<FaBell className={iconClass} />} />
      <UserBarIcon
        icon={<FaPencilAlt className={iconClass} />}
        path="/publication/new"
      />
      <li className="flex content-center items-center cursor-pointer">
        <UserDropdown user={user} />
      </li>
    </ul>
  );
};

interface UserBarIconProps {
  icon: JSX.Element;
  path?: string;
}

export const UserBarIcon: React.FC<UserBarIconProps> = ({ icon, path }) => {
  return (
    <li className="flex content-center items-center">
      {path ? <a href={path}>{icon}</a> : icon}
    </li>
  );
};
