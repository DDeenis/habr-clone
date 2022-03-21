import { UserFeed } from "@/components/Feed/UserFeed";
import { Aside } from "@/components/layout/Aside/Aside";
import { useArticles } from "@/hooks/articles";
import faker from "@faker-js/faker";

const Home = () => {
  faker.locale = "ru";
  const articles = useArticles();

  return (
    <div className="flex gap-4 justify-between mx-auto px-3 py-4 xl:px-0 w-full max-w-[1096px] relative">
      <UserFeed articles={articles} />
      <Aside />
    </div>
  );
};

export default Home;
