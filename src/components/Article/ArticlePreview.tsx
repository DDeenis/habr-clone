import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleType } from "src/types/articles";
import { ArticleTags } from "./ArticleTags";
import { FaChartBar, FaEye, FaBookmark, FaCommentAlt } from "react-icons/fa";
import { classnames } from "@/helpers/attributes";

interface ArticlePreviewProps {
  article: ArticleType;
}

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article }) => {
  return (
    <article className="w-full bg-white mx-auto rounded-md box-border py-4 px-5 flex flex-col gap-3">
      <h1>
        <Link href={`/posts/${article.id}`} passHref>
          <a className="font-semibold font-sans text-xl hover:text-blue-400 transition-colors">
            {article.title}
          </a>
        </Link>
      </h1>
      <ArticleTags tags={article.tags} />
      {article.coverImage && (
        <figure className="hidden lg:block">
          <Link href={`/posts/${article.id}`} passHref>
            <a>
              <Image
                src={article.coverImage.url}
                alt={article.coverImage.caption}
                className="object-cover cursor-pointer"
                width={750}
                height={420}
                unoptimized
              />
            </a>
          </Link>
          <figcaption className="text-sm text-gray-400 italic">
            {article.coverImage.caption}
          </figcaption>
        </figure>
      )}
      <p className="text-base hidden lg:block">{article.cut}</p>
      <button className="max-w-[110px] border-[1px] border-blue-400 box-border rounded-sm p-2 text-blue-400 text-sm hover:text-white hover:bg-blue-400 transition-colors duration-500 my-3">
        {article.buttonText ?? "Читать далее"}
      </button>
      <ul className="flex gap-5">
        <li className="flex gap-2 content-center items-center">
          <FaChartBar className="w-4 h-4 fill-gray-400" />
          <span
            className={classnames("text-sm", {
              "text-green-400": article.rate > 0,
              "text-red-600": article.rate < 0,
              "text-gray-400": article.rate === 0,
            })}
          >
            {article.rate > 0 && "+"}
            {article.rate}
          </span>
        </li>
        <li className="flex gap-2 content-center items-center">
          <FaEye className="w-4 h-4 fill-gray-400" />
          <span className="text-sm text-gray-400">{article.views}</span>
        </li>
        <li className="flex gap-2 content-center items-center cursor-pointer">
          <FaBookmark className="w-4 h-4 fill-gray-400" />
          <span className="text-sm text-gray-400">{article.marks}</span>
        </li>
        <li className="cursor-pointer">
          <Link href={`/post/${article.id}/comments`} passHref>
            <a className="flex gap-2 content-center items-center">
              <FaCommentAlt className="w-4 h-4 fill-gray-400" />
              <span className="text-sm text-gray-400">{article.comments}</span>
            </a>
          </Link>
        </li>
      </ul>
    </article>
  );
};
