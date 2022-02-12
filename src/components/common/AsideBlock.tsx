import React from "react";

export const AsideBlock = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <aside>
      <ul className="hidden lg:flex flex-col gap-4 bg-white p-4 box-border h-max lg:max-w-sm">
        {children}
      </ul>
    </aside>
  );
};

AsideBlock.Element = ({ children }: React.PropsWithChildren<{}>) => (
  <li>{children}</li>
);

AsideBlock.Title = ({ children }: React.PropsWithChildren<{}>) => (
  <AsideBlock.Element>
    <span className="font-medium text-gray-500">{children}</span>
  </AsideBlock.Element>
);

AsideBlock.Separator = () => (
  <AsideBlock.Element>
    <hr />
  </AsideBlock.Element>
);
