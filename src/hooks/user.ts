import { useState } from "react";
import { User } from "../types/user";
import { faker } from "@faker-js/faker";

export const useUser = () => {
  const [user, setUser] = useState<User>({
    username: "",
    avatar: "",
  });

  if (!user.username || !user.avatar) {
    setUser(createUser());
  }

  return user;
};

export const createUser = (): User => ({
  username: faker.name.firstName(),
  avatar: faker.image.avatar(),
});
