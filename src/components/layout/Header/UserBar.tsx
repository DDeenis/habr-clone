import React from "react";
import { FaSearch, FaBell, FaPencilAlt } from "react-icons/fa";
import { User } from "@/types/user";
import { UserDropdown } from "./UserDropdown/UserDropdown";
import { Icon } from "@/components/common/Icon";
import { Link } from "react-router-dom";

interface UserBarProps {
  user: User;
}

export const UserBar: React.FC<UserBarProps> = ({ user }) => {
  return (
    <ul className="flex justify-between content-center gap-5 my-auto">
      <UserBarIcon icon={<FaSearch />} path="/search" />
      <UserBarIcon icon={<FaBell />} />
      <UserBarIcon icon={<FaPencilAlt />} path="/publication/new" />
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
      {path ? (
        <Link to={path}>
          <Icon icon={icon} />
        </Link>
      ) : (
        <Icon icon={icon} />
      )}
    </li>
  );
};
