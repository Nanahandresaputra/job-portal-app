import * as components from "../components/index";
import * as pages from "../pages/index";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RouterPages = () => {
  const { seed } = useSelector((state) => state.user);
  return (
    <Router>
      <components.Navbar />
      <Routes>
        <Route path="/" element={<pages.Home />} />
        <Route path="login" element={<pages.Login />} />
        <Route path="register" element={<pages.Register />} />
        <Route path="job-detail/:id" element={<pages.JobDetail />} />
        <Route path="profile" element={seed ? <pages.Profile /> : <Navigate to="/login" />} />
      </Routes>
      <components.Footer />
    </Router>
  );
};

export default RouterPages;
