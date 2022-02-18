import { useState } from "react";
import UserForm from "../Forms/UserForm";
import VerificationForm from "../Forms/VerificationForm";

interface CheckProps {}

const Check: React.FunctionComponent<CheckProps> = () => {
  const [next, setNext] = useState(false);
  return (
    <section className="pb-0 bg-white">
      <div className="container px-4 mb-16">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <a className="inline-block mb-6" href="#">
                <img
                  className="h-16"
                  src="flex-ui-assets/logos/flex-circle-green.svg"
                  alt=""
                />
              </a>
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                COVID19
              </h3>
              <p className="text-lg text-coolGray-500 font-medium">
                Enter your Age
              </p>
            </div>{
              next ? 

            <VerificationForm setNext={setNext} />
          :

            <UserForm setNext={setNext} />
          }
          </div>
        </div>
      </div>
      <img
        className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
        src="flex-ui-assets/images/sign-up/photo-sign-up-side.png"
        alt=""
      />
    </section>
  );
};

export default Check;
