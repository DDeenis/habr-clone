import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleImage } from "src/types/articles";

interface CoverImageProps {
  img?: ArticleImage;
  href?: string;
}

export const CoverImage = ({ img, href }: CoverImageProps) => {
  return img ? (
    <figure className="hidden lg:block">
      {href ? (
        <Link href={href} passHref>
          <a>
            <Image
              src={img.url}
              alt={img.caption}
              className="object-cover cursor-pointer"
              width={750}
              height={420}
              unoptimized
            />
          </a>
        </Link>
      ) : (
        <Image
          src={img.url}
          alt={img.caption}
          className="object-cover cursor-pointer"
          width={750}
          height={420}
          unoptimized
        />
      )}
      <figcaption className="text-sm text-gray-400 italic">
        {img.caption}
      </figcaption>
    </figure>
  ) : null;
};
