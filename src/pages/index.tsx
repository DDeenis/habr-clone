import { UserFeed } from "@/components/Feed/UserFeed";
import { Aside } from "@/components/layout/Aside/Aside";
import { ScrollTopBtn } from "@/components/layout/Aside/ScrollTopBtn";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { useArticles } from "@/hooks/articles";
import { useUser } from "@/hooks/user";
import faker from "@faker-js/faker";

const Home = () => {
  faker.locale = "ru";
  const articles = useArticles();
  const user = useUser();

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header user={user} />
      <div className="flex gap-4 justify-between mx-auto px-3 py-4 xl:px-0 w-full max-w-[1096px] relative">
        <UserFeed articles={articles} />
        <Aside />
      </div>
      <Footer username={user.username} />
      <ScrollTopBtn />
    </main>
  );
};

export default Home;
