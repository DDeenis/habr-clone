import { Avatar } from "@/components/common/Avatar";
import React from "react";
import { FaClipboardList, FaCog, FaSignOutAlt } from "react-icons/fa";
import { User } from "@/types/user";
import { DropdownItem, DropdownSeparator } from "./dropdownComponents";

interface UserDropdownContentProps {
  user: User;
}

export const UserDropdownContent: React.FC<UserDropdownContentProps> = ({
  user,
}) => {
  return (
    <>
      <div className="p-4 box-border bg-gray-50">
        <a
          href={`/users/${user.username}`}
          className="flex gap-3 items-center w-max"
        >
          <Avatar image={user.avatar} />
          <span className="text-blue-400">@{user.username}</span>
        </a>
      </div>
      <DropdownSeparator inList={false} />
      <ul>
        <DropdownItem path={`/users/${user.username}/posts`}>
          <span className="block p-4 box-border">Статьи</span>
        </DropdownItem>
        <DropdownItem path={`/users/${user.username}/comments`}>
          <span className="block p-4 box-border">Комментарии</span>
        </DropdownItem>
        <DropdownItem path="/conversations">
          <span className="block p-4 box-border">Диалоги</span>
        </DropdownItem>
        <DropdownItem path={`/users/${user.username}/favorites/posts`}>
          <span className="block p-4 box-border">Закладки</span>
        </DropdownItem>
        <DropdownItem path="/ppa/about">
          <span className="block p-4 box-border">ППА</span>
        </DropdownItem>
        <DropdownItem path="/beta">
          <span className="block p-4 box-border">Бета-тестирование</span>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem path="/sandbox/start">
          <span className="block p-4 box-border">Как стать автором</span>
        </DropdownItem>
        <DropdownItem path="/docs/help/rules">
          <span className="block p-4 box-border">Правила сайта</span>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem path="/auth/settings/profile" type="secondary">
          <span className="px-4 py-3 box-border flex gap-3 items-center">
            <FaCog className="fill-gray-400 w-5 h-5" />
            <span className="text-gray-400">Настройки профиля</span>
          </span>
        </DropdownItem>
        <DropdownItem type="secondary">
          <span className="px-4 py-3 box-border flex gap-3 items-center cursor-pointer">
            <FaClipboardList className="fill-gray-400 w-5 h-5" />
            <span className="text-gray-400">Язык, лента</span>
          </span>
        </DropdownItem>
        <DropdownItem path="/logout" type="secondary">
          <span className="px-4 py-3 box-border flex gap-3 items-center">
            <FaSignOutAlt className="fill-gray-400 w-5 h-5" />
            <span className="text-gray-400">Выход</span>
          </span>
        </DropdownItem>
      </ul>
    </>
  );
};
