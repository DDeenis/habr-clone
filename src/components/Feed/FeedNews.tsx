import { ArticleType } from "@/types/articles";
import { formatRelative } from "date-fns";
import { ru } from "date-fns/locale";
import { FaCommentAlt } from "react-icons/fa";
import { ArticlePreviewTitle } from "../Article/components/ArticlePreviewTitle";

interface Props {
  articles: ArticleType[];
}

export const FeedNews = ({ articles }: Props) => {
  return (
    <ul className="flex flex-col gap-4 bg-white py-4 px-6 w-full">
      <li className="pb-2">
        <span className="font-medium text-gray-600 uppercase text-[0.8125rem]">
          Новости
        </span>
      </li>
      {articles.map((a) => (
        <li className="flex flex-col gap-2" key={a.id}>
          <ArticlePreviewTitle variant="secondary" href={`/news/${a.id}`}>
            {a.title}
          </ArticlePreviewTitle>
          <div className="flex gap-6">
            <span className="text-sm text-gray-400">
              {formatRelative(a.publishedAt, Date.now(), {
                locale: ru,
              })}
            </span>
            <div>
              <a
                href={`/news/${a.id}/comments`}
                className="flex gap-2 content-center items-center"
              >
                <FaCommentAlt className="w-4 h-4 fill-gray-400" />
                <span className="text-sm text-gray-400">{a.comments}</span>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
