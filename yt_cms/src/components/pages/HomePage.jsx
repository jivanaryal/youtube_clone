import { RiAddFill } from "react-icons/ri";
const HomePage = () => {
  return (
    <div className="w-10/12 mx-auto pt-10">
      <div className="">
        <div className="flex items-center gap-2 border-[1px]  w-fit px-3 py-2  rounded-md shadow-md bg-[#ffffff] ">
          <div className="border-[3px] rounded-full  bg-[#DDF5F0] border-green-500  cursor-pointer">
            <RiAddFill className="text-green-500 text-2xl" />
          </div>
          <div className="text">Add New Post</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
