import { ArticleImageType } from "@/types/articles";
import { Link } from "react-router-dom";

interface CoverImageProps {
  img?: ArticleImageType;
  href?: string;
}

export const CoverImage = ({ img, href }: CoverImageProps) => {
  return img ? (
    <figure className="hidden lg:block">
      {href ? (
        <Link to={href}>
          <img
            src={img.url}
            alt={img.caption}
            className="object-cover cursor-pointer w-[750px] h-[420px]"
          />
        </Link>
      ) : (
        <img
          src={img.url}
          alt={img.caption}
          className="object-cover cursor-pointer w-[750px] h-[420px]"
          width={750}
          height={420}
        />
      )}
      <figcaption className="text-sm text-gray-400 italic">
        {img.caption}
      </figcaption>
    </figure>
  ) : null;
};
