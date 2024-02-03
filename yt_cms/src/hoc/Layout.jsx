import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="sidebar w-[20%] bg-white-500 z-50  shadow-2xl rounded-md max-h-screen min-h-screen">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <div className="nav">
            <Navbar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
