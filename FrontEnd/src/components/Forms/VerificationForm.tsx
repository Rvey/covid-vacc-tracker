import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { FC } from "react";

type Props={
  setDataVaccin:(value:object)=>void
}

const VerificationForm:FC<Props>= ({setDataVaccin}) => {
  return (
    <div className="w-full">
      <Formik
        initialValues={{ 
          age: 0,
          VaccNumber: "",
          chronicDisease: "",
          SideEffectDesc: "",
          effected:""
        }}
        
        onSubmit={(values) => {
          console.log(values);
        }}
      >

        {({ errors, touched, values }) => (
          <Form  className="w-full">

            <div className="mt-4 w-full">
              <label
                htmlFor="age"
                className="font-semibold leading-none text-white"
                >Enter Age </label>
              <Field
                type="number"
                id="age"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="age"
              />
            </div>

            {values.age > 12 && (
              <div>
                <div className="my-3 ">
                  <h1 className="font-semibold mb-2 text-white">Vaccine</h1>
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

                {values.VaccNumber == "firstVacc" ? (
                  <div>
                    <div className="my-4 flex flex-col gap-4">
                      <h2 className="font-semibold text-white">
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
                          <label className="text-center text-white">No</label>
                        </div>
                        <div className="flex items-center gap-3 p-1 rounded-md">
                          <Field
                            type="radio"
                            name="chronicDisease"
                            className="w-4 h-4 cursor-pointer"
                            value="yes"
                          />
                          <label className="text-center text-white">Yes</label>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : values.VaccNumber == "secondVacc" ? (
                  <div>
                    <div className="my-4 flex flex-col gap-4">
                      <h2 className="font-semibold text-white">
                        you have any side effect from the first vaccine ?
                      </h2>
                      <div className="flex ">
                        <div className="flex items-center gap-3 p-1 rounded-md">
                          <Field
                            type="radio"
                            name="effected"
                            className="w-4 h-4 cursor-pointer"
                            value="noSideEffect"
                          />
                          <label className="text-center text-white">No</label>
                        </div>
                        <div className="flex items-center gap-3 p-1 rounded-md">
                          <Field
                            type="radio"
                            name="effected"
                            className="w-4 h-4 cursor-pointer"
                            value="sideEffect"
                          />
                          <label className="text-center text-white">Yes</label>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : values.VaccNumber == "thirdVacc" ? (
                  <div>
                    <div className="my-4 flex flex-col gap-4">
                      <h2 className="font-semibold text-white">
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
                          <label className="text-center text-white">No</label>
                        </div>
                        <div className="flex items-center gap-3 p-1 rounded-md">
                          <Field
                            type="radio"
                            name="chronicDisease"
                            className="w-4 h-4 cursor-pointer"
                            value="sideEffect2"
                          />
                          <label className="text-center text-white">Yes</label>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* side effect first vaccine disc */}
                {values.chronicDisease == "sideEffect" &&
                  values.VaccNumber == "secondVacc" && (
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
                {values.chronicDisease == "sideEffect2" &&
                  values.VaccNumber == "thirdVacc" && (
                    <div className="mb-3">
                      <Field
                        name="SideEffectDesc"
                        as="textarea"
                        placeholder="describe your side Effect from second vaccine "
                        className="text-sm appearance-none w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      />
                    </div>
                  )}
   
                {values.chronicDisease == "yes" &&
                  values.VaccNumber == "firstVacc" && (
                    <div className="mb-3">
                      <h2 className="text-white">www.google.com</h2>
                    </div>
                )}
              </div>
            )}
            {values.age > 12 && (
              <button 
                className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded " 
                type="button"
                onClick={()=>{setDataVaccin(values)}}
              >
                Comfirm
              </button>
            )}

          </Form>
        )}
      </Formik>
    </div>
  );
};
export default VerificationForm;
