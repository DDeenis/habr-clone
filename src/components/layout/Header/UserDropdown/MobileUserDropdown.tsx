import { Avatar } from "@/components/common/Avatar";
import { classnames } from "@/helpers/attributes";
import { Dialog, Transition } from "@headlessui/react";
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
    <>
      <Avatar
        image={user.avatar}
        onClick={openDialog}
        className="block lg:hidden"
      />
      <Transition
        show={open}
        enter="transition-all duration-500 ease-out"
        enterFrom="-bottom-full"
        enterTo="bottom-0"
        leave="transition-all duration-300 ease-out"
        leaveFrom="bottom-0"
        leaveTo="-bottom-full"
      >
        <Dialog
          open={open}
          onClose={closeDialog}
          className={classnames("fixed left-0 right-0 isolate transition-all", {
            "bottom-0": open,
            "-bottom-full": !open,
          })}
        >
          <Dialog.Overlay
            className={classnames(
              "fixed inset-0 bg-black/60 -z-10 transition-opacity",
              { "opacity-100": open, "opacity-0": !open }
            )}
          />
          <Dialog.Description className={"z-10 bg-gray-50"} as="div">
            <UserDropdownContent user={user} />
          </Dialog.Description>
        </Dialog>
      </Transition>
    </>
  );
};
