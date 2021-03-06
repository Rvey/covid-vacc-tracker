import { Formik, Form, Field, ErrorMessage } from "formik";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { FC } from "react";
// import GoogleMap from "./googleMap";


type Props={
  setDataUser:(value:Object)=>void
}
const UserForm:FC<Props>= ({setDataUser}) => {

    return ( 
      <Formik
        initialValues={{
          Cin: "",
          Adress: "",
          lastName: "",
          firstName: "",
          Phone:"",
          Email:""
        }}
        onSubmit={(values) => {
          setDataUser(values)          
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="w-full" >
            <div className="mt-4">
              <label
                htmlFor="firstName"
                className="block mb-2 text-md font-semibold text-white"
              >FirstName</label>
              <Field
                type="text"
                id="firstName"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="firstName"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="lastName"
                className="block mb-2 text-md font-semibold text-white"
              >LastName</label>
              <Field
                type="text"
                id="lastName"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="lastName"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="Email"
                className="block mb-2 text-md font-semibold text-white"
              >Email</label>
              <Field
                type="text"
                id="Email"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="Email"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="firstName"
                className="block mb-2 text-md font-semibold text-white"
              >Cin</label>
              <Field
                type="text"
                id="Cin"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="Cin"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="Adresse"
                className="block mb-2 text-md font-semibold text-white"
              >Adresse</label>
              <Field
                type="text"
                id="Adress"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="Adress"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="Phone"
                className="block mb-2 text-md font-semibold text-white"
              >Phone</label>
              <Field
                type="text"
                id="Phone"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="Phone"
              />
            </div>
            {/* <div className="w-[34em] h-[34em]">
            <GoogleMap />
            </div> */}
              <button 
                className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded " 
                type="button"
                onClick={()=>{setDataUser(values)}}
              >
                Comfirm
              </button>
          </Form>
        )}
          </Formik>
     );
}
 
export default UserForm;