import upload from "../../../assets/logo/upload.png";
const CDashboard = () => {
  return (
    <div className="pl-10 pt-6 h-full bg-gray-100">
      <div>
        <div className="font-semibold  text-2xl">Channel Dashboard</div>

        <div className="grid grid-cols-3 mt-8">
          <div className="border-2  h-[500px] bg-white">
            <div className="border-2 border-dashed m-3 h-[475px]">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="image">
                  <img src={upload} alt="" />
                </div>
                <div className="text-xs  w-60">
                  Want to see metrics on your recent video? Upload and publish a
                  video to get started.
                </div>
                <button className="upload bg-blue-700 mt-4 py-1 px-2 rounded-sm font-semibold text-white">
                  UPLOAD PHOTOS
                </button>
              </div>
            </div>
          </div>
          <div className="rightbox"></div>
          <div className="fybox"></div>
        </div>
      </div>
    </div>
  );
};

export default CDashboard;
