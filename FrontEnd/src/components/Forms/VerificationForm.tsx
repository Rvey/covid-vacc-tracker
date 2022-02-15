import { Formik, Form, Field, ErrorMessage } from "formik";
import { SetStateAction, useState, useRef } from "react";
import * as Yup from "yup";
const VerificationForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          age: 0,
          VaccNumber:0,
          effected: "",
          chronicDisease:"",
          chronicDiseaseDetails:""
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
                  <label htmlFor="">firstVacc</label>
                  <Field 
                    type="radio"  
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                    name="VaccNumber"
                    value={1} 
                    defaultChecked={checked}
                    onChange={setChecked(!checked)}
                  />
                  <label htmlFor="">secondVacc</label>
                  <Field 
                    type="radio" 
                    name="VaccNumber" 
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                    value={2} 
                  />
                  <label htmlFor="">thirdVacc</label>
                  <Field 
                    type="radio" 
                    name="VaccNumber" 
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 

                    value={3} 
                  />
                </label>  
              </div>
            )}

            { values.VaccNumber == 1 ?(
              <div>
                <Field id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked />             
              </div>
            ): values.VaccNumber == 2 ?(
              <div>
                <h2>rass tani</h2>
              </div>
            ):values.VaccNumber == 3 ?(
              <div>
                <h3>rass talat</h3>
              </div>
            ):null
          }

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
