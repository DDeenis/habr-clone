import React from "react";
import { User } from "src/types/user";
import { DesktopUserDropdown } from "./DesktopUserDropdown";
import { MobileUserDropdown } from "./MobileUserDropdown";

interface UserDropdownProps {
  user: User;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
  return (
    <>
      <DesktopUserDropdown user={user} />
      <MobileUserDropdown user={user} />
    </>
  );
};
