import { Link } from "react-router-dom";
import homeItem from "../../../assets/images/homeItem.png";
import profile from "../../../assets/images/profile.png";
import { useEffect, useState } from "react";
import axios from "axios";

export const homePageItem = [
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
  const [youtubeData, setYoutubeData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/ypost").then((res) => {
      setYoutubeData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-4">
        {youtubeData.map((val, i) => {
          console.log(val);
          return (
            <div key={i}>
              <Link to="/singleitem">
                <div>
                  <div>
                    <img
                      src={`http://localhost:4000/public/${val.thumbimage}`}
                      alt=""
                      className="rounded-xl w-full h-96"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="mb-8">
                      <img
                        src={`http://localhost:4000/public/${val.profile}`}
                        alt="thumbimage"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="items leading-6">
                      <div className="text-black font-semibold">
                        {val.title}
                      </div>
                      <div className=" text-gray-600 hover:text-gray-900">
                        {val.chname}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="view">100M</div>

                        <div>{val.postdate}</div>
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
