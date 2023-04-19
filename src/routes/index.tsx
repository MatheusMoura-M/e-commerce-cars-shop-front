import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { DetailCard } from "../pages/detail card";
import { LoginPage } from "../pages/login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-card" element={<DetailCard />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default RoutesMain;
