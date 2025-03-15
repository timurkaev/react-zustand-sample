import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("../pages/Home"));
const UserInfo = lazy(() => import("../pages/UserInfoPage"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Загрузка...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserInfo />} />
      </Routes>
    </Suspense>
  );
};
