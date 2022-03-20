import { Avatar } from "@/components/common/Avatar";
import { formatArticleDate } from "@/helpers/stringUtils";
import { User } from "@/types/user";
import { format, formatRelative } from "date-fns";
import { ru } from "date-fns/locale";
import React from "react";

type Props = {
  user: User;
  publishedAt: Date;
};

export const ArticleUserInfo = ({ user, publishedAt }: Props) => {
  // const dateFormatted = formatRelative(publishedAt, Date.now(), {
  //   locale: ru,
  // });
  // const dateFormatted = format(publishedAt, "d MMMM в hh:mm", {
  //   locale: ru,
  // });
  const dateFormatted = formatArticleDate(publishedAt);

  return (
    <div className="flex gap-2 items-center justify-start">
      <a
        href={`/users/${user.username}`}
        className="flex gap-2 items-center justify-start"
      >
        <Avatar size="sm" image={user.avatar} />
        <span className="text-[.8125rem] font-bold hover:text-blue-800 transition-colors">
          {user.username}
        </span>
      </a>
      <span className="text-[.8125rem] text-gray-400 font-medium">
        <time dateTime={publishedAt.toISOString()}>{dateFormatted}</time>
      </span>
    </div>
  );
};
