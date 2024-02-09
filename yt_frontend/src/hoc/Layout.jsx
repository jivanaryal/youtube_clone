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
        <div className="flex">
          <div className="w-[15%]">
            <Sidebar />
          </div>
          <div className="w-[85%]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
