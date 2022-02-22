import { UserFeed } from "@/components/Feed/UserFeed";
import { Aside } from "@/components/layout/Aside/Aside";
import { ScrollTopBtn } from "@/components/layout/Aside/ScrollTopBtn";
import { Header } from "@/components/layout/Header/Header";
import { useArticles } from "@/hooks/articles";
import faker from "@faker-js/faker";

const Home = () => {
  faker.locale = "ru";
  const articles = useArticles();

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex gap-4 justify-between mx-auto px-3 py-4 xl:px-0 w-full max-w-[1096px] relative">
        <UserFeed articles={articles} />
        <Aside />
      </div>
      <ScrollTopBtn />
    </main>
  );
};

export default Home;
