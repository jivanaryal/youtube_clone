import { Formik, Form, Field } from "formik";
import { RxCross1 } from "react-icons/rx";
import { LiaUploadSolid } from "react-icons/lia";
import { MdHdrPlus } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiFeedbackLine } from "react-icons/ri";
import { PiSubtitles } from "react-icons/pi";
import { PiScreencastLight } from "react-icons/pi";
import { LuHelpCircle } from "react-icons/lu";
import { useState } from "react";
import axios from "axios";

const FormElement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbimage, setThumbImage] = useState("");
  const [profile, setProfile] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.name);
    setThumbImage(event.target.files[0]);
  };

  const handleChanges = (event) => {
    setProfile(event.target.files[0]);
  };

  const postFormData = (value) => {
    const formData = new FormData();

    formData.append("title", value.title);
    formData.append("chname", value.chname);
    formData.append("category", value.category);
    formData.append("description", value.description);
    formData.append("thumbimage", thumbimage);
    formData.append("profile", profile);
    axios
      .post("http://localhost:4000/ypost", formData)
      .then((res) => {
        if (res.status === 200) {
          console.log("posted");
        } else {
          console.log("not posted");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const VideoElements = [
    {
      logo: <PiSubtitles />,
      title: "Add subtitles",
      descritpion: "Reach a broader audience by adding subtitles to your video",
    },
    {
      logo: <PiScreencastLight />,
      title: "Add subtitles",
      descritpion: "Reach a broader audience by adding subtitles to your video",
    },
    {
      logo: <LuHelpCircle />,
      title: "Add subtitles",
      descritpion: "Reach a broader audience by adding subtitles to your video",
    },
  ];

  const visibility = [
    {
      title: "private",
      descrip: "only you and people who you choose can watch yout video",
    },
    {
      title: "Unlisted",
      descrip: "Anyone with the video link can watch yout video",
    },
    {
      title: "Public",
      descrip: "Everyone can watch your video",
    },
  ];

  const Items = [
    {
      name: "Details",
    },
    {
      name: "Video elements",
    },
    {
      name: "Checks",
    },
    {
      name: "Visibility",
    },
  ];

  return (
    <div>
      <div className="popup">
        <div className="popup-inner">
          <div className="sticky top-0 bg-white bg-white h-36">
            <div className="flex justify-between items-center px-4   w-full  font-semibold bg-white">
              <p className="text-xl">Upload videos</p>
              <div className="flex gap-4 text-gray-700">
                <RiFeedbackLine className="text-xl" />
                <RxCross1 className="text-xl" />
              </div>
            </div>
            <div className="chckitem flex  w-full py-10">
              <div className="flex items-center justify-evenly w-full">
                {Items.map((val, i) => {
                  return (
                    <div
                      key={i}
                      className=" h-16 w-32 flex-col  text-center justify-center items-center"
                      onClick={() => {
                        setCurrentIndex(i);
                      }}
                    >
                      <div>{val.name}</div>
                      <div className="outer-circle"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <hr />
          <div className="pb-20">
            <div>
              <Formik
                initialValues={{
                  title: "",
                  chname: "",
                  category: "",
                  description: "",
                  thumbimage: "",
                  profile: "",
                }}
                onSubmit={(value) => {
                  postFormData(value);
                }}
              >
                {({ handleSubmit }) => {
                  return (
                    <div className="">
                      {currentIndex === 0 && (
                        <div className="grid grid-cols-12 mx-auto w-11/12 gap-5">
                          <div className="col-span-8 ">
                            <div className="flex justify-between items-center">
                              <div className="font-bold text-2xl">Details</div>
                              <div className="text-blue-500">Reuse Details</div>
                            </div>
                            <Form
                              onSubmit={handleSubmit}
                              className="flex flex-col gap-4"
                            >
                              <div>
                                <Field
                                  name="title"
                                  type="text"
                                  placeholder="Add a title that describes about yout video"
                                  className="pt-2 pb-10 px-2  w-full rounded-md border-[1px]"
                                ></Field>
                              </div>
                              <div>
                                <Field
                                  name="chname"
                                  type="text"
                                  placeholder="Add a channel name"
                                  className="pt-2 pb-10 px-2  w-full rounded-md border-[1px]"
                                ></Field>
                              </div>
                              <div>
                                <label htmlFor="category">category</label>
                                <Field
                                  name="category"
                                  as="select"
                                  placeholder="category"
                                  className="pt-2 pb-2 px-2  w-full rounded-md border-[1px]"
                                >
                                  <option value="music">Music</option>
                                  <option value="entertainment">
                                    Entertainment
                                  </option>
                                  <option value="romance">Romance</option>
                                </Field>
                              </div>
                              <div>
                                <Field
                                  name="description"
                                  type="text"
                                  placeholder="Add a describes about yout video"
                                  className="pt-2 pb-32 px-3 my-4 w-full rounded-md border-[1px]"
                                ></Field>
                              </div>

                              <div>
                                <div className="font-semibold text-base">
                                  Thumbnail
                                </div>
                                <br />
                                <p className="text-sm">
                                  Select or upload a picture that shows what's
                                  in your video. A good thumbnail stands out and
                                  draws viewers' attention.
                                  <span className="text-blue-500 ml-2">
                                    Learn more
                                  </span>
                                </p>
                                {/* <Field
                                  type="file"
                                  name="thumbimage"
                                  placeholder="Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more"
                                ></Field> */}
                                <input
                                  type="file"
                                  name="thumbimage"
                                  id="thumbimage"
                                  accept=".png,.jpg,.jpeg,.gif"
                                  placeholder="Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more"
                                  onChange={(e) => handleChange(e)}
                                />
                              </div>
                              <div>
                                <div className="font-semibold text-base">
                                  Profile
                                </div>
                                <br />
                                <p className="text-sm">
                                  Select or upload a picture that shows what's
                                  your profile is
                                  <span className="text-blue-500 ml-2">
                                    Learn more
                                  </span>
                                </p>
                                {/* <Field
                                  type="file"
                                  name="profile"
                                  placeholder="Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more"
                                ></Field> */}
                                <input
                                  type="file"
                                  name="profile"
                                  id="profile"
                                  accept=".png,.jpg,.jpeg,.gif"
                                  placeholder="Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more"
                                  onChange={(e) => handleChanges(e)}
                                />
                              </div>
                              <div>
                                <div className="font-semibold text-base">
                                  Playlists
                                </div>
                                <br />
                                <p className="text-sm">
                                  Add your video to one or more playlists to
                                  organise your content for viewers.
                                  <span className="text-blue-500 ml-2">
                                    Learn more
                                  </span>
                                </p>
                                <Field
                                  as="select"
                                  name="playlist"
                                  placeholder="select"
                                  className="w-5/12 py-2"
                                >
                                  <option value="red">select 1</option>
                                  <option value="green">select 2</option>
                                  <option value="blue">select 3</option>
                                </Field>
                              </div>
                              <div>
                                <div className="font-semibold text-base">
                                  Audience
                                </div>
                                <br />
                                <b>Is this video 'Made for Kids'? (required)</b>
                                <p className="text-sm">
                                  Regardless of your location, you're legally
                                  required to comply with the Children's Online
                                  Privacy Protection Act (COPPA) and/or other
                                  laws. You're required to tell us whether your
                                  videos are 'Made for Kids'.
                                  <span className="text-blue-500 ml-2">
                                    What is 'Made for Kids' content?
                                  </span>
                                </p>
                                <Field
                                  type="radio"
                                  name="age"
                                  value="Yes it's made for kids"
                                  className=""
                                ></Field>
                                Yes it's made for kids
                                <br />
                                <Field
                                  type="radio"
                                  name="age"
                                  placeholder=""
                                  value="No it's made for kids"
                                  className=""
                                ></Field>
                                No it's made for kids
                              </div>
                              <div>
                                <p>Show More</p>
                                <b>Paid promotion, tags, subtitles and more</b>
                              </div>

                              <button
                                type="submit"
                                className="py-1 w-96 bg-red-500 px-3  text-white"
                              >
                                Save
                              </button>
                            </Form>
                          </div>
                          <div className="col-span-4 border-2 justify-center h-48 mt-16 rounded-xl">
                            image section
                          </div>
                        </div>
                      )}

                      {currentIndex == 1 && (
                        <div className="mx-auto w-11/12">
                          <div>
                            <h1>Video elements</h1>
                            <p>
                              Use cards and an end screen to show viewers
                              related videos, websites and calls to action.
                              <span>Learn More</span>
                            </p>
                          </div>
                          {VideoElements.map((val, i) => {
                            return (
                              <div
                                className="flex justify-between py-5 mx-auto items-center w-11/12"
                                key={i}
                              >
                                <div className="left flex items-center gap-4">
                                  <div className="text-xl">{val.logo}</div>
                                  <div className="right">
                                    <div className="font-semibold">
                                      {val.title}
                                    </div>
                                    <div className="text-sm">
                                      {val.descritpion}
                                    </div>
                                  </div>
                                </div>
                                <div className="right">
                                  <button>Add</button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {currentIndex === 2 && (
                        <div>
                          <div className="flex flex-col gap-7 w-11/12  mx-auto">
                            <h1 className="text-xl font-bold">Checks</h1>
                            <p>
                              We'll check your video for issues that may
                              restrict its visibility and then you will have the
                              opportunity to fix issues before publishing your
                              video. Learn more
                            </p>
                            <b>copyright</b>
                            <p>No issues found</p>
                            <hr />
                            <p>
                              Remember: These check results aren't final. Issues
                              may come up in the future that impact your video.
                              Learn more
                            </p>
                          </div>
                        </div>
                      )}

                      {currentIndex === 3 && (
                        <div className="w-11/12 mx-auto">
                          <div>
                            <h1 className="text-2xl font-bold">Visibility</h1>
                            <p>
                              Choose when to publish and who can see your video
                            </p>
                          </div>
                          <div className="grid grid-cols-12 ">
                            <div className="col-span-8">
                              <div className="border-2 p-4 my-4">
                                <b>Save or publish</b>
                                <div>
                                  Make your video public, unlisted or private
                                </div>
                                {visibility.map((val, i) => {
                                  return (
                                    <div key={i}>
                                      <label
                                        htmlFor={val.title}
                                        className="text-xl pr-2"
                                      >
                                        <input
                                          type="radio"
                                          name={val.title}
                                          id={val.title}
                                          value={val.title}
                                          className="my-4  px-2 mx-3"
                                        />
                                        {val.title}
                                      </label>
                                    </div>
                                  );
                                })}
                              </div>
                              <div>
                                <b>Before you publish, check the following:</b>
                                <b>Do children appear in this video?</b>
                                <p>
                                  Make sure that you follow our policies to
                                  protect minors from harm, exploitation,
                                  bullying and violations of employment law.
                                  Learn more
                                </p>
                                <b>Do children appear in this video?</b>
                                <p>
                                  Make sure that you follow our policies to
                                  protect minors from harm, exploitation,
                                  bullying and violations of employment law.
                                  Learn more
                                </p>
                              </div>
                            </div>
                            <div className="right"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="sticky w-full h-12 bottom-0 bg-white shadow-xl rounded-sm border-[1px] px-4">
            <div className="flex justify-between items-center h-full">
              <div className="flex text-blue-500 gap-2 text-xl h-full items-center">
                <LiaUploadSolid />
                <MdHdrPlus />
                <FaRegCircleCheck />
                <p className="text-base text-black">
                  check complete no issure found
                </p>
              </div>
              <div className="right">
                {currentIndex > 0 && (
                  <button
                    className="py-1 px-3 mr-4 bg-gray-500 text-white"
                    onClick={() => {
                      setCurrentIndex(currentIndex - 1);
                    }}
                  >
                    Back
                  </button>
                )}

                {currentIndex < 3 && (
                  <button
                    className="py-1 px-3 bg-blue-500 text-white"
                    onClick={() => {
                      setCurrentIndex(currentIndex + 1);
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormElement;
