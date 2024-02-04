import { RiAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="w-10/12 mx-auto pt-10">
      <div className="">
        <Link to={"/home/addHome"}>
          {" "}
          <div className="flex items-center gap-2 border-[1px]  w-fit px-3 py-2  rounded-md shadow-md bg-[#ffffff] ">
            <div className="border-[3px] rounded-full  bg-[#DDF5F0] border-green-500  cursor-pointer">
              <RiAddFill className="text-green-500 text-2xl" />
            </div>
            <button className="cursor-pointer">Add New Post</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
