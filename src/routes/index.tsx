import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
};

export default RoutesMain;
