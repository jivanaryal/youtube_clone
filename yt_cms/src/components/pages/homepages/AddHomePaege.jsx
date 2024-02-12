import { Formik, Field, Form } from "formik";
const AddHomePaege = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={() => {}}
      >
        <Form className="mx-8 my-1 ">
          <div className="bg-gray-300 px-2 rounded-md pb-2">
            <div className="flex flex-col rounded-md">
              <label className="pt-1" htmlFor="title">
                Title
              </label>
              <Field
                className="border-1 outline-none rounded-sm p-1"
                id="text"
                name="title"
              />
              <label className="pt-1" htmlFor="description">
                Description
              </label>
              <Field
                className="border-1 outline-none rounded-sm p-1"
                id="text"
                name="description"
              />
              <label className="" htmlFor="tags">
                Tags
              </label>
              <Field
                className="border-1 outline-none rounded-sm p-1"
                id="text"
                name="tags"
              />
              <label className="pt-1" htmlFor="Email">
                Password
              </label>
              <Field
                className="border-1 outline-none rounded-sm p-1"
                id="password"
                name="password"
              />
            </div>
            <div className="mt-8 bg-blue-600 text-white w-32 h-10 flex justify-center rounded-md">
              <button type="submit" className="">
                Add Post
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddHomePaege;
