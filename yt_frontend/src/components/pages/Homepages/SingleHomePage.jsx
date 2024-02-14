import singleitem from "../../../assets/images/singleItem.png";
import manoj from "../../../assets/subscription/sub2.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { homePageItem } from "./HomePage";
import { useState } from "react";

const SingleHomePage = () => {
  const [more, setMore] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 place-content-center w-11/12 mx-auto">
        <div className="left col-span-8">
          <div className="image">
            <img src={singleitem} alt="" className="w-full" />
          </div>
          <div className="text-xl font-bold mx-4">
            What if Today is Your Last Day? – A Story of a Monk & an Abbot |
            Sadhguru
          </div>
          <div className="flex items-center  justify-between gap-8">
            <div className="flex items-center gap-3">
              <img
                src={manoj}
                alt=""
                className="border-1 outline-none rounded-full w-8"
              />
              <div className="leading-3">
                <div className="text-lg font-semibold">Manoj Belbases</div>
                <div className="text-sm">11.7M subscribers</div>
              </div>
              <div className="flex">
                <button className="bg-black text-white rounded-2xl text-base py-1 px-3">
                  subscriber
                </button>
              </div>
            </div>

            <div className="flex  items-center gap-2">
              <div className="flex items-center ">
                <div className="flex items-center  h-8 hover:bg-[#E5E5E5] px-2 rounded-l-2xl border-2">
                  <div className="text-2xl">
                    <AiOutlineLike />
                  </div>
                  <div className="number">7.7k</div>
                </div>

                <div className="flex items-center h-8 hover:bg-[#E5E5E5] border-l-none px-2 rounded-r-2xl border-2">
                  <div className="text-2xl">
                    <BiDislike />
                  </div>
                </div>
              </div>
              <div className="flex items-center border-2 rounded-2xl py-1 px-2">
                <div className="text-2xl">
                  <PiShareFatLight />
                </div>
                <div className="">share</div>
              </div>
              <div className="flex items-center border-2 rounded-2xl py-1 px-2">
                <div className="text-2xl">
                  <HiDownload />
                </div>
                <div className="">Download</div>
              </div>

              <div className="text-xl">
                <HiOutlineDotsHorizontal />
              </div>
            </div>
          </div>
          <div className="border-2 p-2 mt-5 h-28 bg-[#F2F2F2] rounded-2xl outline-none">
            <div className="flex gap-1 text-sm ">
              <p>8.4M Views</p>
              <p>7 months ago</p>
              <p>#mindrelaxmashup</p>
              <p>#foryou</p>
              <p>#foryou</p>
              <p>#goviral</p>
              <p>#longdrive</p>
            </div>
            <div className="text-sm">
              What if Today is Your Last Day? – A Story of a Monk & an Abbot |
              Sadhguru
            </div>
            <div>Discription</div>
            <button
              className="font-semibold text-base"
              onClick={() => {
                setMore(true);
              }}
            >
              ...more
            </button>
          </div>
        </div>
        <div className=" col-span-4 mt-10 flex flex-col gap-2">
          {homePageItem.map((val, i) => {
            return (
              <div key={i} className="flex gap-2">
                <div className="left">
                  <img src={val.image} alt="" className=" rounded-xl" />
                </div>
                <div className="rig">
                  <div className="text-base font-semibold leading-4">
                    {val.title}
                  </div>
                  <div className="text-sm text-gray-400">{val.channelName}</div>
                  <span className="px-2 text-xs"> 23M view</span>
                  <span className="text-xs"> 4 year</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleHomePage;
