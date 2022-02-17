import { MobileBottomModal } from "@/components/common/MobileBottomModal";
import { navItems } from "@/helpers/componentsSettings/header";
import { useState } from "react";
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
            <span className="block p-3 box-border">{i.title}</span>
          </DropdownItem>
        ))}
        <DropdownSeparator />
        <DropdownItem path={"/megaprojects"}>
          <span className="block p-2 box-border">Мегапроекты</span>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem path={"/sandbox/start"}>
          <span className="block p-2 box-border">Как стать автором</span>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem path={"/docs/help/rules"}>
          <span className="block p-2 box-border">Помощь</span>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem path={"/feedback"}>
          <span className="block p-2 box-border">Техническая поддержка</span>
        </DropdownItem>
      </ul>
    </MobileBottomModal>
  );
};
