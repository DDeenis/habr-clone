import { Avatar } from "@/components/common/Avatar";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import {
  FaSearch,
  FaBell,
  FaPencilAlt,
  FaClipboardList,
  FaBackspace,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

interface User {
  username: string;
  avatar: string;
  notifications?: {
    from: User[];
    action: string;
    article: string;
    date: Date;
  }[];
}

interface UserBarProps {
  user: User;
}

const iconClass =
  "fill-gray-400 hover:fill-blue-500 transition-colors w-5 h-5 cursor-pointer";

export const UserBar: React.FC<UserBarProps> = ({ user }) => {
  return (
    <ul className="flex justify-between content-center gap-5 self-end">
      <UserBarIcon icon={<FaSearch className={iconClass} />} path="/search" />
      <UserBarIcon icon={<FaBell className={iconClass} />} />
      <UserBarIcon
        icon={<FaPencilAlt className={iconClass} />}
        path="/publication/new"
      />
      <li className="flex content-center items-center cursor-pointer">
        <Popover className="relative cursor-auto">
          <Popover.Button>
            <Avatar image={user.avatar} />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 md:right-[1px] drop-shadow-md w-[300px] rounded-b-md overflow-hidden flex flex-col">
            <div className="p-4 box-border bg-gray-50">
              <Link href={`/users/${user.username}`} passHref>
                <a className="flex gap-3 items-center w-max">
                  <Avatar image={user.avatar} />
                  <span className="text-blue-400">@{user.username}</span>
                </a>
              </Link>
            </div>
            <hr />
            <ul>
              <li className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                <Link href={`/users/${user.username}/posts`} passHref>
                  <a className="block p-4 box-border">Статьи</a>
                </Link>
              </li>
              <li className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                <Link href={`/users/${user.username}/comments`} passHref>
                  <a className="block p-4 box-border">Комментарии</a>
                </Link>
              </li>
              <li className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                <Link href={`/conversations`} passHref>
                  <a className="block p-4 box-border">Диалоги</a>
                </Link>
              </li>
              <li className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                <Link href={`/users/${user.username}/favorites/posts`} passHref>
                  <a className="block p-4 box-border">Закладки</a>
                </Link>
              </li>
              <li className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                <Link href={`/ppa/about`} passHref>
                  <a className="block p-4 box-border">ППА</a>
                </Link>
              </li>
              <li className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                <Link href={`/beta`} passHref>
                  <a className="block p-4 box-border">Бета-тестирование</a>
                </Link>
              </li>
              <li className="bg-gray-50 py-2">
                <hr />
              </li>
              <li className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                <Link href={`/sandbox/start`} passHref>
                  <a className="block p-4 box-border">Как стать автором</a>
                </Link>
              </li>
              <li className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                <Link href={`/docs/help/rules`} passHref>
                  <a className="block p-4 box-border">Правила сайта</a>
                </Link>
              </li>
              <li className="bg-gray-50 py-2">
                <hr />
              </li>
              <li className="bg-gray-50 hover:bg-blue-50  hover:text-blue-600 transition-colors">
                <Link href={`/auth/settings/profile`} passHref>
                  <a className="px-4 py-3 box-border flex gap-3 items-center">
                    <IoMdSettings className="fill-gray-400 w-5 h-5" />
                    <span className="text-gray-400">Настройки профиля</span>
                  </a>
                </Link>
              </li>
              <li className="bg-gray-50 hover:bg-blue-50  hover:text-blue-600 transition-colors">
                <span className="px-4 py-3 box-border flex gap-3 items-center cursor-pointer">
                  <FaClipboardList className="fill-gray-400 w-5 h-5" />
                  <span className="text-gray-400">Язык, лента</span>
                </span>
              </li>
              <li className="bg-gray-50 hover:bg-blue-50  hover:text-blue-600 transition-colors">
                <Link href={`/logout`} passHref>
                  <a className="px-4 py-3 box-border flex gap-3 items-center">
                    <FaBackspace className="fill-gray-400 w-5 h-5" />
                    <span className="text-gray-400">Выход</span>
                  </a>
                </Link>
              </li>
            </ul>
          </Popover.Panel>
        </Popover>
      </li>
    </ul>
  );
};

interface UserBarIconProps {
  icon: JSX.Element;
  path?: string;
}

export const UserBarIcon: React.FC<UserBarIconProps> = ({ icon, path }) => {
  return (
    <li className="flex content-center items-center">
      {path ? (
        <Link href={path} passHref>
          <a>{icon}</a>
        </Link>
      ) : (
        icon
      )}
    </li>
  );
};
