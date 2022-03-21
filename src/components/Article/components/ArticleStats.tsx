import { Comments } from "./stats/Comments";
import { Marks } from "./stats/Marks";
import { Rate } from "./stats/Rate";
import { Views } from "./stats/Views";

interface ArticleStatsProps {
  commentsHref: string;
  rate?: number;
  views: number;
  marks?: number;
  comments: number;
}

export const ArticleStats = ({
  commentsHref,
  rate,
  views,
  marks,
  comments,
}: ArticleStatsProps) => {
  const isRate = rate !== undefined;
  const isMarks = marks !== undefined;

  return (
    <ul className="flex gap-5 justify-between md:justify-start">
      {isRate && (
        <li>
          <Rate value={rate} />
        </li>
      )}
      <li>
        <Views value={views} />
      </li>
      {isMarks && (
        <li>
          <Marks value={marks} />
        </li>
      )}
      <li>
        <Comments value={comments} href={commentsHref} />
      </li>
    </ul>
  );
};
