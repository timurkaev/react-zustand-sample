import React from "react";
import { User } from "../types/user";

interface UserInfoProps {
  user: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return <div>{user.name}</div>;
};
