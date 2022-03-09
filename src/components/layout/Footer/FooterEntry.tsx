import React from "react";

interface Props {
  title: string;
  entries: { title: string; href: string }[];
}

export const FooterEntry: React.FC<Props> = ({ title, entries }) => {
  return (
    <div className="w-full max-w-xs">
      <h3 className="text-white text-sm font-bold">{title}</h3>
      <hr className="my-4 border-gray-600" />
      <ul className="flex flex-col gap-1">
        {entries.map((e) => (
          <li key={e.title}>
            <a
              href={e.href}
              className="text-white text-[0.8125rem] hover:opacity-60 transition-opacity"
            >
              {e.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
