import { Route, Routes } from "react-router-dom";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Homeee</h1>} />
    </Routes>
  );
};

export default RoutesMain;
