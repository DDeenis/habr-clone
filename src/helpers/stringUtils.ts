import {
  format,
  formatRelative,
  isWithinInterval,
  startOfYesterday,
} from "date-fns";
import { ru } from "date-fns/locale";

export const capitalize = (source: string) =>
  source[0].toUpperCase() + source.substring(1);

export const formatArticleDate = (date: Date) => {
  const yesterday = startOfYesterday();

  if (
    isWithinInterval(date, {
      start: yesterday,
      end: Date.now(),
    })
  ) {
    return formatRelative(date, Date.now(), {
      locale: ru,
    });
  }

  return format(date, "d MMMM в hh:mm", {
    locale: ru,
  });
};
