import { ArticlesPreviewPage } from "@/components/Article/ArticlesPreviewPage";
import { Aside } from "@/components/common/Aside";
import { Header } from "@/components/layout/Header/Header";
import { useArticles } from "@/hooks/articles";
import faker from "@faker-js/faker";

const Home = () => {
  faker.locale = "ru";
  const articles = useArticles();

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex gap-4 justify-between overflow-auto mx-auto px-3 py-4 xl:px-0 w-full max-w-[1096px]">
        <ArticlesPreviewPage articles={articles} />
        <Aside />
      </div>
    </main>
  );
};

export default Home;
