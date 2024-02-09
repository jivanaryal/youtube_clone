// import React from 'react'
import logo from "../../assets/logo/ytlogo.png";
import addNew from "../../assets/logo/addNew.png";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
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
            <input
              type="text"
              className="border-2 border-gray-400 w-[30rem] p-2 outline-none rounded-3xl"
              placeholder="Search"
            />
            <IoSearchOutline className="text-2xl" />
            <div className="">
              <MdKeyboardVoice className="text-2xl" />
            </div>
          </div>
          {/* top-right section */}
          <div className="flex gap-3">
            <div>
              <img src={addNew} alt="" />
            </div>
            <div> notification bell</div>
            <div>profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
