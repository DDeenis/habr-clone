import { classnames } from "@/helpers/attributes";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";

interface MobileBottomModalProps {
  button: JSX.Element;
  isOpen: boolean;
  close: () => void;
}

export const MobileBottomModal = ({
  button,
  children,
  isOpen,
  close,
}: React.PropsWithChildren<MobileBottomModalProps>) => {
  return (
    <>
      {button}
      <Transition
        show={isOpen}
        enter="transition-all duration-500 ease-out"
        enterFrom="-bottom-full"
        enterTo="bottom-0"
        leave="transition-all duration-300 ease-out"
        leaveFrom="bottom-0"
        leaveTo="-bottom-full"
      >
        <Dialog
          open={isOpen}
          onClose={close}
          className={classnames("fixed left-0 right-0 isolate transition-all", {
            "bottom-0": isOpen,
            "-bottom-full": !isOpen,
          })}
        >
          <Dialog.Overlay
            className={classnames(
              "fixed inset-0 bg-black/60 -z-10 transition-opacity",
              { "opacity-100": isOpen, "opacity-0": !isOpen }
            )}
          />
          <Dialog.Description className={"z-10 bg-gray-50"} as="div">
            {children}
          </Dialog.Description>
        </Dialog>
      </Transition>
    </>
  );
};
