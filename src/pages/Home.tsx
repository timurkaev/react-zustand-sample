import React from "react";
import { UserList } from "../components/UserList";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <UserList />
    </div>
  );
};

export default Home;
