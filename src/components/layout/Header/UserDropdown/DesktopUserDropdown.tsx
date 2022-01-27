import { Avatar } from "@/components/common/Avatar";
import { Popover, Transition } from "@headlessui/react";
import React from "react";
import { User } from "src/types/user";
import { UserDropdownContent } from "./UserDropdownContent";

interface DesktopUserDropdownProps {
  user: User;
}

export const DesktopUserDropdown: React.FC<DesktopUserDropdownProps> = ({
  user,
}) => {
  return (
    <Popover className="relative cursor-auto hidden md:block">
      <Popover.Button>
        <Avatar image={user.avatar} />
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10 md:right-[1px] drop-shadow-md w-[300px] rounded-b-md overflow-hidden flex flex-col">
          <UserDropdownContent user={user} />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
