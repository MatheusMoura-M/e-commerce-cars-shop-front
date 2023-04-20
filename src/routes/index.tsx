import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { DetailCard } from "../pages/detail card";
import { LoginPage } from "../pages/login";
import RegisterUserPage from "../pages/registerUser/register.page";


const RoutesMain = () => {
  return (
    <Routes>
      {/* <Home /> */}
      <Route path="/" element={<RegisterUserPage />} />
      <Route path="/detail-card" element={<DetailCard />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default RoutesMain;
