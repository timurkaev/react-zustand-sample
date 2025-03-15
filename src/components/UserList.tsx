import React, { useEffect } from "react";
import { useUsersStore } from "../store/userStore";
import { UserCard } from "./UserItem";

export const UserList: React.FC = () => {
  const { users, loading, fetchUsers } = useUsersStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Список пользователей</h1>
      {loading && <p>Загрузка...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <button
        onClick={fetchUsers}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Обновить
      </button>
    </div>
  );
};
