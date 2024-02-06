import { IoMdHome } from "react-icons/io";
import profile from "../../../assets/logo/profile.png";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const CSidebarItem = [
  {
    logo: <IoMdHome />,
    name: "dashboard",
  },
  {
    logo: <SiYoutubeshorts />,
    name: "contents",
  },
  {
    logo: <MdOutlineSubscriptions />,
    name: "analytics",
  },
  {
    logo: <MdOutlineSubscriptions />,
    name: "comments",
  },
  {
    logo: <MdOutlineSubscriptions />,
    name: "subtitles",
  },
  {
    logo: <MdOutlineSubscriptions />,
    name: "copyright",
  },
  {
    logo: <MdOutlineSubscriptions />,
    name: "earn",
  },
];

const CSidebar = () => {
  return (
    <div className="bg-white fixed w-[16%] top-[65px] pt-6 h-screen left-0 border-2">
      {/* profile section */}
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="image">
            <img src={profile} alt="profile" className="w-40" />
          </div>
          <div className="font-semibold text-sm">Your Channel</div>
          <div className="text-xs text-gray-700 ">Jivan Aryal</div>
        </div>

        {/* content section */}

        <div className="pt-4">
          <div>
            {CSidebarItem.map((val, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-5 pl-4 py-2 items-center capitalize  border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100 "
                >
                  <div className="text-red-500 text-2xl">{val.logo}</div>
                  <div>{val.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSidebar;
