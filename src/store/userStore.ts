import { create } from "zustand";
import { fetchUser, fetchUsers } from "../utils/api";
import { User } from "../types/user";

interface UsersStore {
  users: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
}

interface UserInfoStore {
  user: User;
  loading: boolean;
  fetchUser: (userId: number) => Promise<void>;
}

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  loading: false,
  fetchUsers: async () => {
    set({ loading: true });
    try {
      const users = await fetchUsers();
      set({ users, loading: false });
    } catch (error) {
      console.error("Ошибка загрузки store пользователей", error);
      set({ loading: false });
    }
  },
}));

export const useUserInfoStore = create<UserInfoStore>((set) => ({
  user: {} as User,
  loading: false,
  fetchUser: async (userId: number) => {
    set({ loading: true });
    try {
      const user = await fetchUser(userId);
      set({ user, loading: false });
    } catch (error) {
      console.log("Ошибка загрузки store пользователя", error);
      set({ loading: false });
    }
  },
}));
