import { ArticlesPreviewPage } from "@/components/Article/ArticlesPreviewPage";
import { ReadingNowArticles } from "@/components/Article/ReadingNowArticles";
import { PopularBlogs } from "@/components/Blogs/PopularBlogs";
import { Header } from "@/components/layout/Header/Header";
import { useArticles } from "@/hooks/articles";
import { useBestBlogs } from "@/hooks/blogs";

const Home = () => {
  const blogs = useBestBlogs();
  const articles = useArticles();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex gap-4 justify-between items-start mx-auto px-3 py-4 xl:px-0 w-full max-w-[1096px]">
        <ArticlesPreviewPage articles={articles} />
        <aside className="flex-col gap-3 hidden lg:flex">
          <PopularBlogs blogs={blogs} />
          <ReadingNowArticles articles={articles} />
        </aside>
      </div>
    </div>
  );
};

export default Home;
