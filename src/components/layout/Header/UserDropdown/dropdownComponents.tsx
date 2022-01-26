import { classnames } from "@/helpers/attributes";
import Link from "next/link";

interface DropdownItemProps {
  path?: string;
  type?: "primary" | "secondary";
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  path,
  type,
}) => {
  return (
    <li
      className={classnames(
        "bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors",
        { "text-gray-700": type !== "secondary" }
      )}
    >
      {path ? (
        <Link href={path} passHref>
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
};

export const DropdownSeparator: React.FC<{ inList?: boolean }> = ({
  inList = true,
}) => {
  return inList ? (
    <li className="bg-gray-50 py-2">
      <hr />
    </li>
  ) : (
    <div className="bg-gray-50 py-2">
      <hr />
    </div>
  );
};
