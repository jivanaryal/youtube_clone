import logo from "../../assets/logo/ytlogo.png";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { BiBell } from "react-icons/bi";
import { TbVideoPlus } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar({ showCms, setShowCms }) {
  const [show, setShow] = useState(true);
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
            <div className="flex relative">
              <input
                type="search"
                className={`border border-gray-300 w-[30rem] p-2 pl-5 outline-none rounded-l-3xl ${
                  show === true ? "w-[29rem] pl-10" : "w-[30rem]"
                }`}
                placeholder="Search"
                onClick={() => {
                  setShow(!show);
                }}
              />
              <div
                className={`absolute top-3 text-xl left-2 text-gray-500 block  ${
                  show === true ? "hidden" : "block"
                }`}
              >
                <IoSearchOutline />
              </div>
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
              <Link to="/cdashboard">
                {" "}
                <TbVideoPlus
                  className="text-2xl"
                  onClick={() => {
                    setShowCms(false);
                  }}
                />
              </Link>
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
