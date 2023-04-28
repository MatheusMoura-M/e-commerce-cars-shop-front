import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { DetailCard } from "../pages/detail card";
import { LoginPage } from "../pages/login";
import RegisterUserPage from "../pages/registerUser/register.page";
import ResetPasswordPage from "../pages/resetPassword";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterUserPage />} />
      <Route path="/detail-card" element={<DetailCard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/resetpass/:token" element={<ResetPasswordPage />} />
    </Routes>
  );
};

export default RoutesMain;
