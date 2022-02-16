import { Formik, Form, Field, ErrorMessage } from "formik";
const VerificationForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          age: 0,
          VaccNumber: "",
          chronicDisease: "",
          SideEffectDesc: "",
        }}
        // validationSchema={UserSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <h1 className="font-semibold mb-2">Enter Age</h1>
            <div className="mt-4">
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              ></label>
              <Field
                type="number"
                id="age"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="age"
              />
            </div>

            {values.age > 12 && (
              <div className="my-3 ">
                <h1 className="font-semibold mb-2">Vaccine</h1>
                <Field
                  name="VaccNumber"
                  as="select"
                  className="appearance-none w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <option value="">Select Vaccine</option>
                  <option value="firstVacc">First Vaccine</option>
                  <option value="secondVacc">Second Vaccine</option>
                  <option value="thirdVacc">Third Vaccine</option>
                </Field>
              </div>
            )}

            {values.VaccNumber == "firstVacc" && values.age > 12 ? (
              <div>
                <div className="my-4 flex flex-col gap-4">
                  <h2 className="font-semibold">
                    you have a chronic disease ?
                  </h2>
                  <div className="flex ">
                    <div className="flex items-center gap-3 p-1 rounded-md">
                      <Field
                        type="radio"
                        name="chronicDisease"
                        className="w-4 h-4 cursor-pointer"
                        value="no"
                      />
                      <label className="text-center">No</label>
                    </div>
                    <div className="flex items-center gap-3 p-1 rounded-md">
                      <Field
                        type="radio"
                        name="chronicDisease"
                        className="w-4 h-4 cursor-pointer"
                        value="yes"
                      />
                      <label className="text-center">Yes</label>
                    </div>
                  </div>
                </div>
              </div>
            ) : values.VaccNumber == "secondVacc" && values.age > 12 ? (
              <div>
                <div className="my-4 flex flex-col gap-4">
                  <h2 className="font-semibold">
                    you have any side effect from the first vaccine ?
                  </h2>
                  <div className="flex ">
                    <div className="flex items-center gap-3 p-1 rounded-md">
                      <Field
                        type="radio"
                        name="chronicDisease"
                        className="w-4 h-4 cursor-pointer"
                        value="noSideEffect"
                      />
                      <label className="text-center">No</label>
                    </div>
                    <div className="flex items-center gap-3 p-1 rounded-md">
                      <Field
                        type="radio"
                        name="chronicDisease"
                        className="w-4 h-4 cursor-pointer"
                        value="sideEffect"
                      />
                      <label className="text-center">Yes</label>
                    </div>
                  </div>
                </div>
              </div>
            ) : values.VaccNumber == "thirdVacc" && values.age > 12 ? (
              <div>
              <div className="my-4 flex flex-col gap-4">
                <h2 className="font-semibold">
                  you have any side effect from the second vaccine ?
                </h2>
                <div className="flex ">
                  <div className="flex items-center gap-3 p-1 rounded-md">
                    <Field
                      type="radio"
                      name="chronicDisease"
                      className="w-4 h-4 cursor-pointer"
                      value="noSideEffect"
                    />
                    <label className="text-center">No</label>
                  </div>
                  <div className="flex items-center gap-3 p-1 rounded-md">
                    <Field
                      type="radio"
                      name="chronicDisease"
                      className="w-4 h-4 cursor-pointer"
                      value="sideEffect2"
                    />
                    <label className="text-center">Yes</label>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
            ) : values.VaccNumber == "2" ? (
              <div>
                <div className="mt-4 flex gap-4">
                  <h2 className="text-center">you have a chronic disease ?</h2>
                  <div className="flex items-center gap-3 bg-yellow-500 p-1 rounded-md">
                    <Field
                      type="radio"
                      name="chronicDisease"
                      className="w-6 h-6 cursor-pointer"
                      value="no"
                    />
                    <label className="text-center text-white">No</label>
                  </div>
                  <div className="flex items-center gap-3 bg-black p-1 rounded-md">
                    <Field
                      type="radio"
                      name="chronicDisease"
                      className="w-6 h-6 cursor-pointer"
                      value="yes"
                    />
                    <label className="text-center text-white">Yes</label>
                  </div>
                </div>
              </div>
            ) : values.VaccNumber == "3" ? (
              <div>
                <h3>rass talat</h3>
              </div>
=======
            </div>
>>>>>>> 5fb68196b8f555ced44b1a4f21a761bd7be87ddd
            ) : null}

            {/* side effect first vaccine disc */}
            {values.chronicDisease == "sideEffect" && (
              <div className="mb-3">
                <Field
                  name="SideEffectDesc"
                  as="textarea"
                  placeholder="describe your side Effect from previous vaccine "
                  className="text-sm appearance-none w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                />
              </div>
            )}
                {/* side effect second vaccine disc */}
                {values.chronicDisease == "sideEffect2" && (
              <div className="mb-3">
                <Field
                  name="SideEffectDesc"
                  as="textarea"
                  placeholder="describe your side Effect from second vaccine "
                  className="text-sm appearance-none w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                />
              </div>
            )}

            {values.chronicDisease == "yes" && (
              <div className="mb-3">
                <h2>treatment www.google.com</h2>
              </div>
            )}

            {values.chronicDisease === "sideEffect" || values.chronicDisease === "sideEffect2"  && (
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Next
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default VerificationForm;
