import { IoIosMenu } from "react-icons/io";

import { RxDashboard } from "react-icons/rx";
const SidebarData = [
  {
    logo: <RxDashboard />,
    name: "dashboard",
    path: "/",
  },
  {
    logo: <RxDashboard />,
    name: "dashboard",
    path: "/dashboard",
  },
  {
    logo: <RxDashboard />,
    name: "dashboard",
    path: "/dashboard",
  },
];

console.log(SidebarData);

const Sidebar = () => {
  return (
    <div className="relative">
      <div>
        <h1 className="text-3xl p-2 font-bold">Logo</h1>
      </div>
      <div className="absolute right-4 top-4 text-3xl">
        <IoIosMenu />
      </div>

      <div className="pt-10  flex flex-col gap-6">
        {SidebarData.map((val, i) => {
          return (
            <div
              key={i}
              className={`flex items-center gap-2 font-semibold text-sm text-gray-70000 capitalize border-[1px] text-gray-500 py-2 rounded-lg shadow-md shadow-gray-100 mx-4 pl-2  cursor-pointer ${
                location.pathname == val.path && "bg-[#3185FB] text-white"
              }`}
            >
              <div className="text-red">{val.logo}</div>
              <div className="">{val.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
