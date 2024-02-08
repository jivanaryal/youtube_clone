import singleitem from "../../../assets/images/singleItem.png";
import manoj from "../../../assets/subscription/sub2.jpg";
const SingleHomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="left col-span-8 ">
          <div className="image">
            <img src={singleitem} alt="" />
          </div>
          <div className="text-xl font-bold">
            What if Today is Your Last Day? – A Story of a Monk & an Abbot |
            Sadhguru
          </div>
          <div className="lskcm">
            <div className="flex items-center">
              <img
                src={manoj}
                alt=""
                className="border-1 outline-none rounded-full w-8"
              />
              <div className="">
                <div className="chname">Manoj Belbase</div>
                <div className="subcrib">11.7M subscribers</div>
              </div>
            </div>

            <div className="subcriber"></div>
          </div>
        </div>
        <div className="right col-span-4 "></div>
      </div>
    </div>
  );
};

export default SingleHomePage;
