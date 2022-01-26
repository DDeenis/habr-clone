import Image from "next/image";
import React from "react";

interface AvatarProps {
  image: string;
}

export const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return (
    <div className="rounded-sm border-[1px] border-solid border-gray-400 w-8 h-8">
      <Image
        src={image}
        alt="avatar"
        className="object-cover"
        width={32}
        height={32}
      />
    </div>
  );
};
