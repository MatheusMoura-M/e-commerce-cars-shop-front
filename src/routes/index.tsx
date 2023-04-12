import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { DetailCard } from "../pages/detail card";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-card" element={<DetailCard />} />
    </Routes>
  );
};

export default RoutesMain;
