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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="age"
              />
            </div>

            {values.age > 12 && (
              <div className="mt-4 flex gap-4">
                <div className="flex items-center gap-3 bg-red-300 p-1 rounded-md">
                  <Field
                    type="radio"
                    name="VaccNumber"
                    className="w-3 h-3 cursor-pointer"
                    value="1"
                  />
                  <label>First vaccine</label>
                </div>
                <div className="flex items-center gap-3">
                  <Field
                    type="radio"
                    name="VaccNumber"
                    className="w-3 h-3 cursor-pointer"
                    value="2"
                  />
                  <label>Second vaccine</label>
                </div>
                <div className="flex items-center gap-3">
                  <Field
                    type="radio"
                    name="VaccNumber"
                    className="w-3 h-3 cursor-pointer"
                    value="3"
                  />
                  <label>third vaccine</label>
                </div>
              </div>
            )}

            {values.VaccNumber == "1" ? (
              <div>
                <h2>rass lwl</h2>
              </div>
            ) : values.VaccNumber == "2" ? (
              <div>
                <h2>rass tani</h2>
              </div>
            ) : values.VaccNumber == "3" ? (
              <div>
                <h3>rass talat</h3>
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
