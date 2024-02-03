import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="sticky top-0 left-0 w-[20%] bg-[#ffffff] z-50 min-h-screen max-h-screen  shadow-xl  ">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <div className="sticky top-0 left-0">
            <Navbar />
          </div>
          <div className="bg-[#F0F4F6] min-h-[91vh] -z-50">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
