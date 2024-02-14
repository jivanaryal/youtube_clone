import logo from "../../../assets/logo/ytlogo1.png";
import help from "../../../assets/logo/help.png";
import profile from "../../../assets/logo/profile.png";
import create from "../../../assets/logo/create.png";
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const CNav = () => {
  return (
    <div className="border-b-[1px] ">
      <div className="grid grid-cols-7 justify-between  h-[65px] ">
        <div className="flex items-center col-span-2 gap-4 ">
          <IoIosMenu className="text-3xl" />
          <img src={logo} alt="youtube clone" className="h-10 w-26 " />
        </div>
        <div className="flex items-center  col-span-3">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search across the channel"
            className="border-[1px] pl-10 font-semibold w-full rounded-md py-[6px] border-gray-400"
          />
          <IoSearchOutline className="text-xl text-gray-300 top-5 left-2 absolute" />
        </div>

        <div className="flex items-center  justify-end col-span-2 ">
          <div className="help">
            <img src={help} alt="help" className="w-10" />
          </div>
          <div className="create">
            <img src={create} alt="create" className="w-32" />
          </div>
          <div className="">
            <img src={profile} alt="" className="w-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNav;
