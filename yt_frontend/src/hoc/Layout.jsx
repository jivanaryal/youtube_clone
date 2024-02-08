import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";
import { useEffect, useState } from "react";
import CNav from "../user-cms/components/navigation/CNav";
import CSidebar from "../user-cms/components/navigation/CSidebar";

const Layout = () => {
  const [showCms, setShowCms] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowCms(true);
    } else if (location.pathname === "/cdashboard") {
      setShowCms(false);
    }
  }, [location]);
  return (
    <div>
      <div>
        <div className="Navbar sticky top-0">
          {showCms ? (
            <Navbar showCms={showCms} setShowCms={setShowCms} />
          ) : (
            <CNav />
          )}
        </div>
        <div className="flex">
          <div className="w-[17%] overflow-y-scroll  top-0 left-0">
            {showCms ? <Sidebar /> : <CSidebar />}
          </div>
          <div className="w-[83%] mx-3 min-h-[91vh]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
