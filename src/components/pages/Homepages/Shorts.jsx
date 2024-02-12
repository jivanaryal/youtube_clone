// import React from 'react'
import homeitem from "../../../assets/images/homeItem.png";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
function Shorts() {
  return (
    <div className="h-full  flex justify-center  gap-6 pt-12">
      <div className="flex gap-7">
        <div className="rounded-2xl">
          <img
            src={homeitem}
            alt="ltitudeS"
            className="h-[550px] w-[380px]   rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-6 mt-24 text-center">
          {/* like button */}
          <div className="cursor-pointer">
            <AiFillLike className="bg-gray-300 border-1 rounded-full text-[40px] p-2" />
            <p className="text-sm">5.6M</p>
          </div>
          {/* dislike button */}
          <div className="cursor-pointer">
            <AiFillDislike className="bg-gray-300 border-1 rounded-full text-[40px] p-2" />
            <p>Dislike</p>
          </div>
          {/* comment */}
          <div className=" cursor-pointer">
            <BiSolidCommentDetail className="bg-gray-300 border-1 rounded-full text-[40px] p-2" />
            <p>22K</p>
          </div>
          {/* share button */}
          <div className="cursor-pointer">
            <IoIosShareAlt className="bg-gray-300 border-1 rounded-full text-[40px] p-2" />
            <p>Share</p>
          </div>
          {/* more  */}
          <div className="cursor-pointer">
            <IoMdMore className="bg-gray-300 border-1 rounded-full text-[40px] p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shorts;
