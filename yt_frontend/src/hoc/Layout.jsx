import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

const Layout = () => {
  return (
    <div>
      <div>
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="side_content">
          <div className="sidebar"></div>
          <div className="conte"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
