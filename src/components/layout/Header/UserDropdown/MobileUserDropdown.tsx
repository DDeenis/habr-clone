import { Avatar } from "@/components/common/Avatar";
import { MobileBottomModal } from "@/components/common/MobileBottomModal";
import React, { useState } from "react";
import { User } from "src/types/user";
import { UserDropdownContent } from "./UserDropdownContent";

interface MobileUserDropdownProps {
  user: User;
}

export const MobileUserDropdown: React.FC<MobileUserDropdownProps> = ({
  user,
}) => {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <MobileBottomModal
      button={
        <Avatar
          image={user.avatar}
          onClick={openDialog}
          className="block lg:hidden"
        />
      }
      isOpen={open}
      close={closeDialog}
    >
      <UserDropdownContent user={user} />
    </MobileBottomModal>
  );
};
