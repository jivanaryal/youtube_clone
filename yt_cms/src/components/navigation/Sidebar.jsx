import { IoIosMenu } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import ytlogo from "../../assets/logo/ytlogo.png";
const SidebarData = [
  {
    logo: <RxDashboard />,
    name: "dashboard",
    path: "/",
  },
  {
    logo: <RxDashboard />,
    name: "Home",
    path: "/home",
  },
];

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="relative">
      <div>
        <h1 className="text-3xl p-2 font-bold">
          <img src={ytlogo} alt="" className="w-32" />
        </h1>
      </div>
      <div className="absolute right-4 top-4 text-3xl">
        <IoIosMenu />
      </div>

      <div className="pt-10  flex flex-col gap-4">
        {SidebarData.map((val, i) => {
          return (
            <Link key={i} to={val.path}>
              <div
                className={`flex items-center gap-2 font-semibold text-sm text-gray-70000 capitalize border-[1px] text-gray-500 py-2 rounded-lg shadow-md shadow-gray-100 mx-4 pl-2  cursor-pointer ${
                  location.pathname === val.path && "bg-[#3185FB] text-white"
                }`}
              >
                <div className="text-red">{val.logo}</div>
                <div>{val.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
