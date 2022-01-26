import { Avatar } from "@/components/common/Avatar";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { FaClipboardList, FaCog, FaSignOutAlt } from "react-icons/fa";
import { User } from "src/types/user";
import { DropdownItem, DropdownSeparator } from "./dropdownComponents";

interface UserDropdownProps {
  user: User;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
  return (
    <Popover className="relative cursor-auto">
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
          <div className="p-4 box-border bg-gray-50">
            <Link href={`/users/${user.username}`} passHref>
              <a className="flex gap-3 items-center w-max">
                <Avatar image={user.avatar} />
                <span className="text-blue-400">@{user.username}</span>
              </a>
            </Link>
          </div>
          <DropdownSeparator inList={false} />
          <ul>
            <DropdownItem path={`/users/${user.username}/posts`}>
              <a className="block p-4 box-border">Статьи</a>
            </DropdownItem>
            <DropdownItem path={`/users/${user.username}/comments`}>
              <a className="block p-4 box-border">Комментарии</a>
            </DropdownItem>
            <DropdownItem path="/conversations">
              <a className="block p-4 box-border">Диалоги</a>
            </DropdownItem>
            <DropdownItem path={`/users/${user.username}/favorites/posts`}>
              <a className="block p-4 box-border">Закладки</a>
            </DropdownItem>
            <DropdownItem path="/ppa/about">
              <a className="block p-4 box-border">ППА</a>
            </DropdownItem>
            <DropdownItem path="/beta">
              <a className="block p-4 box-border">Бета-тестирование</a>
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem path="/sandbox/start">
              <a className="block p-4 box-border">Как стать автором</a>
            </DropdownItem>
            <DropdownItem path="/docs/help/rules">
              <a className="block p-4 box-border">Правила сайта</a>
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem path="/auth/settings/profile" type="secondary">
              <a className="px-4 py-3 box-border flex gap-3 items-center">
                <FaCog className="fill-gray-400 w-5 h-5" />
                <span className="text-gray-400">Настройки профиля</span>
              </a>
            </DropdownItem>
            <DropdownItem type="secondary">
              <span className="px-4 py-3 box-border flex gap-3 items-center cursor-pointer">
                <FaClipboardList className="fill-gray-400 w-5 h-5" />
                <span className="text-gray-400">Язык, лента</span>
              </span>
            </DropdownItem>
            <DropdownItem path="/logout" type="secondary">
              <a className="px-4 py-3 box-border flex gap-3 items-center">
                <FaSignOutAlt className="fill-gray-400 w-5 h-5" />
                <span className="text-gray-400">Выход</span>
              </a>
            </DropdownItem>
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
