import { classnames } from "@/helpers/attributes";
import { navItems } from "@/helpers/componentsSettings/header";
import { Dialog, Transition } from "@headlessui/react";
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
    <>
      <FaBars
        onClick={openDialog}
        className="fill-gray-700 w-5 h-5 block lg:hidden"
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
          <Dialog.Description className={"z-10 bg-gray-50"} as="nav">
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
          </Dialog.Description>
        </Dialog>
      </Transition>
    </>
  );
};

// const DropdownItem: React.FC = ({children}) => {
//     return <li>{children}</li>
// }
