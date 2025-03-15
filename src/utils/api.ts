import { User } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Ошибка загрузки пользователей");
  }
  return response.json();
};

export const fetchUser = async (userId: number): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("Ошибка загрузки полльзовтеля");
  }
  return response.json();
};
