import { Link } from "react-router-dom";
import homeItem from "../../../assets/images/homeItem.png";
import profile from "../../../assets/images/profile.png";
const homePageItem = [
  {
    image: homeItem,
    profilePic: profile,
    title: "Git and Github for Beginners-Crash Course",
    channelName: "freeCodeCamp.org",
    views: "3.8M views",
    times: "3 years ago",
  },
  {
    image: homeItem,
    profilePic: profile,
    title: "Git and Github for Beginners-Crash Course",
    channelName: "freeCodeCamp.org",
    views: "3.8M views",
    times: "3 years ago",
  },
  {
    image: homeItem,
    profilePic: profile,
    title: "Git and Github for Beginners-Crash Course",
    channelName: "freeCodeCamp.org",
    views: "3.8M views",
    times: "3 years ago",
  },
  {
    image: homeItem,
    profilePic: profile,
    title: "Git and Github for Beginners-Crash Course",
    channelName: "freeCodeCamp.org",
    views: "3.8M views",
    times: "3 years ago",
  },
  {
    image: homeItem,
    profilePic: profile,
    title: "Git and Github for Beginners-Crash Course",
    channelName: "freeCodeCamp.org",
    views: "3.8M views",
    times: "3 years ago",
  },
  {
    image: homeItem,
    profilePic: profile,
    title: "Git and Github for Beginners-Crash Course",
    channelName: "freeCodeCamp.org",
    views: "3.8M views",
    times: "3 years ago",
  },
  {
    image: homeItem,
    profilePic: profile,
    title: "Git and Github for Beginners-Crash Course",
    channelName: "freeCodeCamp.org",
    views: "3.8M views",
    times: "3 years ago",
  },
];

const HomePage = () => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-4">
        {homePageItem.map((val, i) => {
          return (
            <div key={i}>
              <Link to="/singleitem">
                <div>
                  <div>
                    <img src={val.image} alt="" className="rounded-xl" />
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="mb-8">
                      <img src={val.profilePic} alt="" className="w-10" />
                    </div>
                    <div className="items leading-6">
                      <div className="text-black font-semibold">
                        {val.title}
                      </div>
                      <div className=" text-gray-600 hover:text-gray-900">
                        {val.channelName}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="view">{val.views}</div>

                        <div>{val.times}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
