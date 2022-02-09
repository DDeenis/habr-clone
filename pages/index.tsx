import { ArticlesPreviewPage } from "@/components/Article/ArticlesPreviewPage";
import { PopularBlogs } from "@/components/Blogs/PopularBlogs";
import { Header } from "@/components/layout/Header/Header";
import { useArticles as getArticles } from "@/hooks/articles";
import { useBestBlogs } from "@/hooks/blogs";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ArticleType } from "src/types/articles";
import { BlogType } from "src/types/blogs";

const Home: NextPage<{ articles: ArticleType[]; blogs: BlogType[] }> = ({
  articles,
}) => {
  const blogs = useBestBlogs();
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex gap-4 justify-between items-start mx-auto px-3 py-4 xl:px-0 w-full max-w-[1096px]">
        <ArticlesPreviewPage articles={articles} />
        <PopularBlogs blogs={blogs} />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = getArticles();

  return {
    props: {
      articles,
    },
  };
};
