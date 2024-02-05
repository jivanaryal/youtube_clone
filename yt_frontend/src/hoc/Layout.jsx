import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

const Layout = () => {
  return (
    <div>
      <div>
        <div className="Navbar sticky top-0">
          <Navbar />
        </div>
        <div className="flex">
          <div className="w-[15%] sticky top-0 left-0">
            <Sidebar />
          </div>
          <div className="w-[85%] mx-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
