import { ScrollTopBtn } from "@/components/layout/Aside/ScrollTopBtn";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { useUser } from "@/hooks/user";
import faker from "@faker-js/faker";
import React from "react";

const App = ({ children }: React.PropsWithChildren<null>) => {
  faker.locale = "ru";
  const user = useUser();

  return (
    <div className="bg-gray-100 min-h-screen isolate">
      <Header user={user} />
      <main>{children}</main>
      <Footer username={user.username} />
      <ScrollTopBtn />
    </div>
  );
};

export default App;
