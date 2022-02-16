import { Formik, Form, Field, ErrorMessage } from "formik";
import { SetStateAction, useState, useRef } from "react";
const VerificationForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          age: 0,
          VaccNumber: "",
          effected: "",
          chronicDisease: "",
          chronicDiseaseDetails: "",
        }}
        // validationSchema={UserSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="w-[23em]">
            {/* age */}
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
              <div className="mt-4 flex gap-4">
                <div className="flex items-center gap-3 bg-red-500 p-1 rounded-md">
                  <Field
                    type="radio"
                    name="VaccNumber"
                    className="w-6 h-6 cursor-pointer"
                    value="1"
                  ></Field>
                  <label className="text-center text-white">
                    First vaccine
                  </label>
                </div>
                <div className="flex items-center gap-3 bg-blue-500 p-1 rounded-md">
                  <Field
                    type="radio"
                    name="VaccNumber"
                    className="w-6 h-6 cursor-pointer"
                    value="2"
                  />
                  <label className="text-center text-white">
                    Second vaccine
                  </label>
                </div>
                <div className="flex items-center gap-3 bg-green-500 p-1 rounded-md">
                  <Field
                    type="radio"
                    name="VaccNumber"
                    className="w-6 h-6 cursor-pointer"
                    value="3"
                  />
                  <label className="text-center text-white">
                    third vaccine
                  </label>
                </div>
              </div>
            )}

            {values.VaccNumber == "1" ? (
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
            ) : null}

            {values.chronicDisease == "yes" ? (
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <Field
                    component="select"
                    className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    id="chronicDisease"
                    name="chronicDisease"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Field>
                </div>
              </div>
            ) : values.chronicDisease == "no" ? (
              <div>
                <h2> nadddi am3alam</h2>
              </div>
            ) : null}

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default VerificationForm;
