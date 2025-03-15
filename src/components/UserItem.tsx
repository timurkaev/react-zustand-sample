import React from "react";
import { User } from "../types/user";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="p-4 rounded-lg shadow border">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Номер: {user.phone}</p>
    </div>
  );
};
