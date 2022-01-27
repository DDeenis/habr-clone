import { Avatar } from "@/components/common/Avatar";
import Link from "next/link";
import React from "react";
import { FaClipboardList, FaCog, FaSignOutAlt } from "react-icons/fa";
import { User } from "src/types/user";
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
    </>
  );
};