import { classnames } from "@/helpers/attributes";
import React from "react";

interface AvatarProps {
  image: string;
  className?: string;
  size?: "md" | "sm" | "lg";
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  image,
  className,
  size = "md",
  onClick,
}) => {
  return (
    <div
      className={classnames(
        "rounded-sm border-[1px] border-solid border-gray-400",
        className,
        {
          "w-6 h-6": size === "sm",
          "w-8 h-8": size === "md",
          "w-9 h-9": size === "lg",
        }
      )}
      onClick={onClick}
    >
      <img src={image} alt="avatar" className="object-cover w-full h-full" />
    </div>
  );
};
