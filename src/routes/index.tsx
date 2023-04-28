import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { DetailCard } from "../pages/detail card";
import { LoginPage } from "../pages/login";
import RegisterUserPage from "../pages/registerUser/register.page";
import { ProfileCard } from "../pages/userProfile";

const RoutesMain = () => {
  return (
    <Routes>
      {/* <Home /> */}
      <Route path="/" element={<RegisterUserPage />} />
      <Route path="/detail-card" element={<DetailCard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user-profile" element={<ProfileCard />} />
    </Routes>
  );
};

export default RoutesMain;
