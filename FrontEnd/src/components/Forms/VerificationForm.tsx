import { Formik, Form, Field, ErrorMessage } from "formik";
import { SetStateAction, useState, useRef } from "react";
import * as Yup from "yup";
const VerificationForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          age: 0,
          vaccinated: false,
          effected: "",
        }}
        // validationSchema={UserSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
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
              <div className="mt-4">
                <label>
                  <h1>are you vaccinated</h1>
                  <Field type="checkbox" name="firstVacc" />
                  <Field type="checkbox" name="secondVacc" />
                  <Field type="checkbox" name="vaccinated" />
                </label>
              </div>
            )}

            {values.vaccinated && <div>are u already infected</div>}

            <div className="mt-8 flex justify-between">
              <button
                type="submit"
                className="w-[12em] text-green-900 bg-white border border-green-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                save
              </button>
              <button
                type="submit"
                className="w-[12em] text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default VerificationForm;
