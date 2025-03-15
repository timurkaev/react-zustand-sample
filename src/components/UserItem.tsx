import React from "react";
import { User } from "../types/user";
import { NavLink } from "react-router";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <NavLink to={`/user/${user.id}`}>
      <div className="p-4 rounded-lg shadow border">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Номер: {user.phone}</p>
      </div>
    </NavLink>
  );
};
