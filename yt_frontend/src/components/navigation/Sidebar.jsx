import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaAngleRight, FaHistory } from "react-icons/fa";
import sub1 from "../../assets/subscription/sub1.jpg";
import sub2 from "../../assets/subscription/sub2.jpg";
import sub3 from "../../assets/subscription/sub3.jpg";
import sub4 from "../../assets/subscription/sub4.jpg";
import sub5 from "../../assets/subscription/sub5.jpg";
import sub6 from "../../assets/subscription/sub6.jpg";

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
    logo: <FaHistory />,
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
  {
    logo: <IoMdHome />,
    name: "watch later",
  },
  {
    logo: <IoMdHome />,
    name: "Your Clips",
  },
  {
    logo: <IoMdHome />,
    name: "Liked Videos",
  },
];

const Subscriptions = [
  {
    logo: sub1,
    name: "Sahil Khanna",
  },
  {
    logo: sub2,
    name: "Manoj Belbase",
  },
  {
    logo: sub3,
    name: "Ai Lookup",
  },
  {
    logo: sub4,
    name: "TechPana",
  },
  {
    logo: sub5,
    name: "In-Depth Story",
  },
  {
    logo: sub6,
    name: "Ansh Mehra",
  },
];

const Sidebar = () => {
  return (
    <div className="     ">
      <div className="flex flex-col gap-1 mx-4 mt-2 ">
        {SidebarItem.map((val, i) => (
          <div
            key={i}
            className="flex gap-2 pl-4 py-2 items-center capitalize  border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100"
          >
            <div className="text-2xl">{val.logo}</div>
            <div className="text-sm font-semibold text-gray-800">
              {val.name}
            </div>
          </div>
        ))}
      </div>

      <hr className="ml-2 mr-1 mt-4" />

      <div className="mx-4">
        <div className="flex items-center gap-4 mt-4 py-2 pl-4 border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100 ">
          <div className="text-xl font-semibold">You</div>
          <div>
            <FaAngleRight />
          </div>
        </div>
        {SideYou.map((val, i) => (
          <div
            key={i}
            className="flex gap-5 pl-4 py-2 items-center capitalize  border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100"
          >
            <div className="text-2xl">{val.logo}</div>
            <div className="text-sm font-semibold text-gray-800">
              {val.name}
            </div>
          </div>
        ))}
      </div>

      <hr className="ml-2 mr-1 mt-4" />

      <div className="mx-4  mb-10">
        <div className="flex items-center gap-4 mt-4 py-2 pl-4 border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100 ">
          <div className="text-xl font-semibold">Subscriptions</div>
        </div>
        {Subscriptions.map((val, i) => (
          <div
            key={i}
            className="flex gap-5 pl-4 py-1 items-center capitalize  border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100"
          >
            <div className="text-2xl rounded-md">
              <img src={val.logo} alt="" className="w-10 rounded-full" />
            </div>
            <div className="text-sm font-semibold text-gray-800">
              {val.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
