import { breakpoints } from "@/utils/media/mediaQueryTools";
import React from "react";
import MediaQuery from "react-responsive";
import { User } from "src/types/user";
import { DesktopUserDropdown } from "./DesktopUserDropdown";
import { MobileUserDropdown } from "./MobileUserDropdown";

interface UserDropdownProps {
  user: User;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
  return (
    <>
      <MediaQuery {...breakpoints.lg}>
        <DesktopUserDropdown user={user} />
      </MediaQuery>
      <MobileUserDropdown user={user} />
    </>
  );
};
