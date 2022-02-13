import { useUser } from "@/hooks/user";
import { MainNav } from "./Nav/MainNav";
import { UserBar } from "./UserBar";

export const Header = () => {
  const user = useUser();
  return (
    <header className="w-full border-b-[1px] border-gray-300 bg-white md:px-3 xl:px-0 block lg:sticky left-0 right-0 top-0 z-10">
      <div className="w-full mx-auto flex justify-between flex-wrap p-3 md:p-2 lg:p-0 max-w-[1096px]">
        <MainNav />
        <UserBar user={user} />
      </div>
    </header>
  );
};
