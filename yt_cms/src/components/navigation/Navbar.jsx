import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="h-16 shadow-lg  -z-10 bg-[#ffffff]">
      <div className="flex h-full justify-between  items-center">
        <div className="pl-6 text-[#6a6c6e] text-base">Youtube's CMS</div>
        <div className="flex items-center gap-4">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search here"
            className="border-[1px] shadow-md shadow-purple-200 rounded-md pl-3 p-1"
          />
          <div className="flex items-center text-[#727474] pr-4 gap-3">
            <div>
              <CgProfile className="text-2xl" />
            </div>
            <div>
              <FaAngleDown className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
