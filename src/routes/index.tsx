import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { DetailCard } from "../pages/detail card";
import Header from "../components/navBar";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-card" element={<DetailCard />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
};

export default RoutesMain;
