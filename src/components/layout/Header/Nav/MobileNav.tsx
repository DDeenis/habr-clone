import { MobileBottomModal } from "@/components/common/MobileBottomModal";
import { navItems } from "@/helpers/componentsSettings/header";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  DropdownItem,
  DropdownSeparator,
} from "../UserDropdown/dropdownComponents";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <MobileBottomModal
      button={
        <FaBars
          onClick={openDialog}
          className="fill-gray-700 w-5 h-5 block lg:hidden"
        />
      }
      isOpen={open}
      close={closeDialog}
    >
      <ul>
        {navItems.map((i) => (
          <DropdownItem path={i.path} key={i.path}>
            <a className="block p-3 box-border">{i.title}</a>
          </DropdownItem>
        ))}
        <DropdownSeparator />
        <DropdownItem path={"/megaprojects"}>
          <a className="block p-2 box-border">Мегапроекты</a>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem path={"/sandbox/start"}>
          <a className="block p-2 box-border">Как стать автором</a>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem path={"/docs/help/rules"}>
          <a className="block p-2 box-border">Помощь</a>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem path={"/feedback"}>
          <a className="block p-2 box-border">Техническая поддержка</a>
        </DropdownItem>
      </ul>
    </MobileBottomModal>
  );
};
