import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import {
  FaAngleDown,
  FaAngleRight,
  FaHistory,
  FaMusic,
  FaDownload,
  FaYoutube,
} from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import {
  SiYoutubegaming,
  SiYoutubemusic,
  SiYoutubestudio,
} from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { AiOutlineTrophy } from "react-icons/ai";
import {
  MdOutlineWatchLater,
  MdEmojiFlags,
  MdOutlineFeedback,
} from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
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
    logo: <RiVideoLine />,
    name: "your videos",
  },
  {
    logo: <MdOutlineWatchLater />,
    name: "watch later",
  },
  {
    logo: <FaDownload />,
    name: "Downlods",
  },
  {
    logo: <BiLike />,
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
const Explore = [
  {
    logo: <FaArrowTrendUp />,
    name: "Trending",
  },
  {
    logo: <FaMusic />,
    name: "Music",
  },
  {
    logo: <SiYoutubegaming />,
    name: "Gaming",
  },
  {
    logo: <AiOutlineTrophy />,
    name: "SPorts",
  },
];

const MoreFromYt = [
  { icon: <FaYoutube />, name: "YouTube Premium" },
  { icon: <SiYoutubestudio />, name: "YouTube Studio" },
  { icon: <SiYoutubemusic />, name: "YouTube Music" },
  { icon: <TbBrandYoutubeKids />, name: "YouTube Kids" },
];
const Settigs = [
  {
    logo: <IoSettingsOutline />,
    name: "Settings",
  },
  {
    logo: <MdEmojiFlags />,
    name: "Report history",
  },
  {
    logo: <IoMdHelpCircleOutline />,
    name: "Help",
  },
  {
    logo: <MdOutlineFeedback />,
    name: "Send feedback",
  },
];
const ltop = [
  {
    name: "About",
  },
  {
    name: "Press",
  },
  {
    name: "Copyright",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Creator",
  },
  {
    name: "Advertise",
  },
  {
    name: "Developer",
  },
];
const lbottom = [
  {
    name: "Terms",
  },
  {
    name: "Privacy",
  },
  {
    name: "Policy & Safety",
  },
];
const Sidebar = () => {
  return (
    <div className="border-r-2">
      <div className="flex flex-col gap-1 mt-2 ml-2 mr-1">
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
      {/* You section */}
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
      {/* Subscription section */}
      <hr className="ml-2 mr-1 mt-2" />
      <div className="ml-2 mr-1  mb-4">
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
        <div className="flex items-center gap-5 mt-2 py-3 pl-4 border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100 ">
          <div className="text-2xl">
            <FaAngleDown />
          </div>
          <div className="text-sm font-semibold">Show More</div>
        </div>
      </div>
      {/* Explore Section */}
      <hr className="ml-2 mr-1 mt-2" />
      <div className="Explore">
        <div className="mx-4  mb-4">
          <div className="flex items-center gap-4 mt-4 py-2 pl-4 border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100 ">
            <div className="text-xl font-semibold">Explore</div>
          </div>
          {Explore.map((val, i) => (
            <div
              key={i}
              className="flex gap-5 pl-4 py-2 items-center capitalize  border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100"
            >
              <div className="text-2xl rounded-md">{val.logo}</div>
              <div className="text-sm font-semibold text-gray-800">
                {val.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="ml-2 mr-1 mt-2" />
      {/* More from youtube */}
      <div className="more from youtube">
        <div className="ml-2 mr-1 mb-4">
          <div className="flex items-center gap-4 mt-4 py-2 pl-3 border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100 ">
            <div className="text-md font-semibold">More From Youtube</div>
          </div>
          {MoreFromYt.map((val, i) => (
            <div
              key={i}
              className="flex gap-5 pl-4 py-2 items-center capitalize  border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100"
            >
              <div className="text-2xl rounded-md text-red-600">{val.icon}</div>
              <div className="text-sm font-semibold text-gray-800">
                {val.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="ml-2 mr-1 mt-2" />
      {/* Settings section last wala */}
      <div className="settings mt-2">
        <div className="ml-2 mr-1 mb-2">
          {Settigs.map((val, i) => (
            <div
              key={i}
              className="flex gap-5 pl-4 py-2 items-center capitalize  border-white   hover:outline-none hover:rounded-xl hover:border-gray-400 hover:bg-gray-100"
            >
              <div className="text-2xl rounded-md">{val.logo}</div>
              <div className="text-sm font-semibold text-gray-800">
                {val.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="ml-2 mr-1 mt-2" />
      {/* Sidebar ko last section */}
      <div className="last section mt-2 mr-2 ml-2">
        <div className="ltop">
          <div className="ml-2 mb-2 mr-1 grid grid-cols-3 place-content-center">
            {ltop.map((val, i) => (
              <div className="text-xs font-semibold text-gray-800">
                {val.name}
              </div>
            ))}
          </div>
        </div>
        <div className="lbottom mt-4 mr-2">
          <div className="ml-2 mb-1 flex justify-between">
            {lbottom.map((val, i) => (
              <div className="text-xs font-semibold text-gray-800" key={i}>
                {val.name}
              </div>
            ))}
          </div>
          <div classame="ml-2 mr-2 text-xs font-semibold text-gray-800">
            <p className="">How YouTube works</p>
            <p className="">Test new feature</p>
          </div>
        </div>
      </div>
      <div className="copyright ml-4  mr-2 my-4 text-xs font-semibold text-gray-00">
        <span>&copy; 2024 Google LLC</span>
      </div>
    </div>
  );
};

export default Sidebar;
