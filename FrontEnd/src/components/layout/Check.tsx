import { useState } from "react";
import UserForm from "../Forms/UserForm";
import VerificationForm from "../Forms/VerificationForm";
import MailConfirmation from '../Forms/MailConfirmation'

interface CheckProps {}

const Check: React.FunctionComponent<CheckProps> = () => {
  const [next, setNext] = useState(0);
  console.log(next);
  
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
            </div>
            {
              next == 0 ?(
                <VerificationForm />
              ): next == 1 ?(
                <UserForm  />
              ) : next == 2  ?(
                <MailConfirmation />
              ):null
            }

            <div className="mt-5 ml-20">
                {
                  next >=1 && (
                    <button 
                      className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded" 
                      onClick={(e)=>{setNext(next-1)}}
                    >Back</button>
                  )
                }
                          
                {
                  next <= 1 && (
                    <button 
                      className="bg-transparent mx-5 hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded" 
                      onClick={(e)=>{setNext(next+1)}} 
                    >Next</button>
                  )
                }
                {
                  next == 2 && (
                    <button 
                      className="bg-transparent mx-5 hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded" 
                    >Send</button>
                  )
                }

            </div>
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
