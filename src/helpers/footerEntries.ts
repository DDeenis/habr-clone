interface FooterEntry {
  title: string;
  entries: { title: string; href: string }[];
}

export const getFooterYourAccount = (username: string): FooterEntry => ({
  title: "Ваш аккаунт",
  entries: [
    {
      title: "Профиль",
      href: `/users/${username}/posts`,
    },
    {
      title: "Трекер",
      href: "/tracker",
    },
    {
      title: "Диалоги",
      href: "/conversations",
    },
    {
      title: "Настройки",
      href: "/auth/settings/profile",
    },
    {
      title: "ППА",
      href: "/ppa",
    },
  ],
});

export const footerSections: FooterEntry = {
  title: "Разделы",
  entries: [
    {
      title: "Публикации",
      href: "/",
    },
    {
      title: "Новости",
      href: "/news",
    },
    {
      title: "Хабы",
      href: "/hubs",
    },
    {
      title: "Компании",
      href: "/companies",
    },
    {
      title: "Авторы",
      href: "/users",
    },
    {
      title: "Песочница",
      href: "/sandbox",
    },
  ],
};

export const footerInformation: FooterEntry = {
  title: "Информация",
  entries: [
    {
      title: "Устройство сайта",
      href: "/docs/help",
    },
    {
      title: "Для авторов",
      href: "/docs/authors/codex",
    },
    {
      title: "Для компаний",
      href: "/docs/companies/corpblogs",
    },
    {
      title: "Документы",
      href: "/docs/docs/transparency",
    },
    {
      title: "Соглашение",
      href: "/info/agreement",
    },
    {
      title: "Конфеденциальность",
      href: "/info/confidential",
    },
  ],
};

export const footerServices: FooterEntry = {
  title: "Услуги",
  entries: [
    {
      title: "Реклама",
      href: "/",
    },
    {
      title: "Тарифы",
      href: "/",
    },
    {
      title: "Контент",
      href: "/",
    },
    {
      title: "Семинары",
      href: "/",
    },
    {
      title: "Мегапроекты",
      href: "/megaprojects",
    },
  ],
};
