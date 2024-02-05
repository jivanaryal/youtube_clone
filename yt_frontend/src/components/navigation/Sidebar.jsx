import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

const SidebarItem = [
  {
    logo: <IoMdHome />,
    name: "home",
  },
  {
    logo: <SiYoutubeshorts />,
    name: "shorts",
  },
  {
    logo: <MdOutlineSubscriptions />,
    name: "subscriptions",
  },
];

const SideYou = [
  {
    logo: <IoMdHome />,
    name: "your channel",
  },
  {
    logo: <IoMdHome />,
    name: "history",
  },
  {
    logo: <IoMdHome />,
    name: "your videos",
  },
  {
    logo: <IoMdHome />,
    name: "watch later",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-white fixed w-[15%] top-14 h-screen left-0 shadow-lg border-[1px] pt-">
      <div className="flex flex-col gap-1  mx-4 mt-2 ">
        {SidebarItem.map((val, i) => {
          return (
            <div
              key={i}
              className="flex gap-2 pl-4 py-2 items-center capitalize  border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100  "
            >
              <div className="text-2xl">{val.logo}</div>
              <div className="text-sm font-semibold text-gray-800">
                {val.name}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <hr className="ml-2 mr-1 mt-4 " />
      </div>
      <div className="mx-4">
        <div className="flex items-center gap-4 mt-4 py-2 pl-4 border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100 ">
          <div className="text-xl font-semibold">You</div>
          <div>
            <FaAngleRight />
          </div>
        </div>
        <div>
          {SideYou.map((val, i) => {
            return (
              <div
                key={i}
                className="flex gap-5 pl-4 py-2 items-center capitalize  border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100  "
              >
                <div className="text-2xl">{val.logo}</div>
                <div className="text-sm font-semibold text-gray-800">
                  {val.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="subcription"></div>
    </div>
  );
};

export default Sidebar;
