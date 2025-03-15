import React, { useEffect } from "react";
import { useUserInfoStore } from "../store/userStore";
import { useParams } from "react-router";
import { UserInfo } from "../components/UserInfo";

export const UserInfoPage: React.FC = () => {
  const { user, fetchUser, loading } = useUserInfoStore();

  const params = useParams();
  useEffect(() => {
    fetchUser(Number(params.id));
  }, []);

  if (loading) {
    return <p>Загрузка</p>;
  }

  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
};

export default UserInfoPage;
