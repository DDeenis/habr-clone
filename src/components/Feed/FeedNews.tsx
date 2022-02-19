import { ArticleType } from "@/types/articles";
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
          <ArticlePreviewTitle variant="secondary" href={`/posts/${a.id}`}>
            {a.title}
          </ArticlePreviewTitle>
        </li>
      ))}
    </ul>
  );
};
