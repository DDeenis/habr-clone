import { MainContainer } from "@/components/common/MainContainer";
import { UserFeed } from "@/components/Feed/UserFeed";
import { Aside } from "@/components/layout/Aside/Aside";
import { useArticles } from "@/hooks/articles";
import faker from "@faker-js/faker";

const Home = () => {
  faker.locale = "ru";
  const articles = useArticles();

  return (
    <MainContainer className="flex gap-4 justify-between px-3 py-4 xl:px-0 relative">
      <UserFeed articles={articles} />
      <Aside />
    </MainContainer>
  );
};

export default Home;
