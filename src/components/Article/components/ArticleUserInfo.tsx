import { Avatar } from "@/components/common/Avatar";
import { User } from "@/types/user";
import { formatRelative } from "date-fns";
import { ru } from "date-fns/locale";
import React from "react";

type Props = {
  user: User;
  publishedAt: Date;
};

export const ArticleUserInfo = ({ user, publishedAt }: Props) => {
  const dateFormatted = formatRelative(publishedAt, Date.now(), {
    locale: ru,
  });

  return (
    <div className="flex gap-2 items-center justify-start">
      <a
        href={`/users/${user.username}`}
        className="flex gap-2 items-center justify-start"
      >
        <Avatar size="sm" image={user.avatar} />
        <span className="text-sm font-bold hover:text-blue-800 transition-colors">
          {user.username}
        </span>
      </a>
      <span className="text-sm text-gray-400 font-medium">{dateFormatted}</span>
    </div>
  );
};
