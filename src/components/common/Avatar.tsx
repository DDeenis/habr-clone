import { classnames } from "@/helpers/attributes";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  image: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  image,
  className,
  onClick,
}) => {
  return (
    <div
      className={classnames(
        "rounded-sm border-[1px] border-solid border-gray-400 w-8 h-8",
        className
      )}
      onClick={onClick}
    >
      <Image
        src={image}
        alt="avatar"
        className="object-cover"
        width={32}
        height={32}
        unoptimized
      />
    </div>
  );
};
