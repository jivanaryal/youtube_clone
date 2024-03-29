import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";
import { useEffect, useState } from "react";
import CNav from "../user-cms/components/navigation/CNav";
import CSidebar from "../user-cms/components/navigation/CSidebar";

const Layout = () => {
  const [showCms, setShowCms] = useState(true);
  const [showSingleItem, setShowSingleItem] = useState(false);
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
        {/* <div>verify the conflict</div> */}
        <div className="Navbar sticky top-0">
          {showCms ? (
            <Navbar showCms={showCms} setShowCms={setShowCms} />
          ) : (
            <CNav />
          )}
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-2 ">
            {showCms ? <Sidebar /> : <CSidebar />}
          </div>
          <div className="col-span-10 mx-3 min-h-[90vh]">
            <Outlet
              showSingleItem={showSingleItem}
              setShowSingleItem={setShowSingleItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
