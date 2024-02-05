// import React from 'react'
import logo from "../../assets/logo/ytlogo.png";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { BiBell } from "react-icons/bi";
import { TbVideoPlus } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <div>
      <div>
        <div className="h-14 items-center bg-white shadow-xl  flex justify-between px-8">
          {/*logos */}
          <div className="flex items-center gap-4">
            <IoIosMenu className="text-3xl" />
            <img src={logo} alt="youtube clone" className="h-10 w-26 " />
          </div>
          {/* search bar and voice command */}
          <div className="flex gap-3 items-center">
            <div className="flex ">
              <input
                type="text"
                className="border border-gray-300 w-[30rem] p-2 outline-none rounded-l-3xl"
                placeholder="Search"
              />
              <button className=" border border-gray-300  rounded-r-3xl px-6 py-2 bg-gray-200 ">
                <IoSearchOutline className="text-2xl" />
              </button>
            </div>

            <div className=" border-none rounded-full p-1 bg-gray-200 ">
              <MdKeyboardVoice className="text-2xl" />
            </div>
          </div>
          {/* top-right section */}
          <div className="flex gap-5">
            <div className="cursor-pointer p-1 border-none hover:border hover:bg-gray-200 hover:rounded-full">
              <TbVideoPlus className="text-2xl" />
            </div>
            <div className="cursor-pointer p-1 border-none hover:border hover:bg-gray-200 hover:rounded-full">
              <BiBell className="text-2xl" />
            </div>
            <div className="cursor-pointer p-1 border-none hover:border hover:bg-gray-200 hover:rounded-full">
              <CgProfile className="text-2xl " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
