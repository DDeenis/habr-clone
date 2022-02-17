import React from "react";

export const AsideBlock = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <ul className="flex flex-col gap-4 bg-white py-4 px-6">{children}</ul>
    </div>
  );
};

AsideBlock.Element = ({ children }: React.PropsWithChildren<{}>) => (
  <li>{children}</li>
);

AsideBlock.Title = ({ children }: React.PropsWithChildren<{}>) => (
  <AsideBlock.Element>
    <span className="font-medium text-gray-600 uppercase text-[0.8125rem]">
      {children}
    </span>
  </AsideBlock.Element>
);

AsideBlock.Separator = () => (
  <AsideBlock.Element>
    <hr />
  </AsideBlock.Element>
);
