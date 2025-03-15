import React from "react";
import { UserList } from "../components/UserList";

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <UserList />
    </div>
  );
};
