import { Formik, Form, Field, ErrorMessage } from "formik";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from "./googleMap";

 
const UserForm = () => {
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
            <div className="mt-4">
              <label
                htmlFor="firstName"
                className="block mb-2 text-md font-semibold"
              >firstName</label>
              <Field
                type="text"
                id="firstName"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="firstName"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="firstName"
                className="block mb-2 text-md font-semibold"
              >lastName</label>
              <Field
                type="text"
                id="lastName"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="lastName"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="Adresse"
                className="block mb-2 text-md font-semibold"
              >Adresse</label>
              <Field
                type="text"
                id="Adresse"
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                name="Adresse"
              />
            </div>
            <div className="w-[34em] h-[34em]">
            <GoogleMap />
            </div>
          </Form>
        )}
      </Formik>
        </div>
     );
}
 
export default UserForm;