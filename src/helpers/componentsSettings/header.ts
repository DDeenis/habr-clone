export interface NavItemType {
  title: string;
  path: string;
}

export const navItems: NavItemType[] = [
  {
    title: "Моя лента",
    path: "/feed",
  },
  {
    title: "Все потоки",
    path: "/all",
  },
  {
    title: "Разработка",
    path: "/develop",
  },
  {
    title: "Администрирование",
    path: "/admin",
  },
  {
    title: "Дизайн",
    path: "/design",
  },
  {
    title: "Менеджмент",
    path: "/management",
  },
  {
    title: "Маркетинг",
    path: "/marketing",
  },
  {
    title: "Научпоп",
    path: "/popsci",
  },
];
