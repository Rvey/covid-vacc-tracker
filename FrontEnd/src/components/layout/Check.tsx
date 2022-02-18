import { useState } from "react";
import UserForm from "../Forms/UserForm";
import VerificationForm from "../Forms/VerificationForm";
import MailConfirmation from '../Forms/MailConfirmation'

const Check  = ({ values }:any) => {
  const [next, setNext]=  useState(0)
  
  return (
    <div>
    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
      <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
        <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
          <p className="text-lg md:text-xl dark:text-white text-center font-semibold leading-6 p-6 xl:leading-5 text-gray-800">Appoitement vaccin</p>
          <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
            {
              next == 0 ?(
                <VerificationForm />
              ): next == 1 ?(
                <UserForm  />
              ) : next == 2  ?(
                <MailConfirmation />
              ):null
            }
          </div>
          <div className="flex ml-90">
            {
              next >=1 && (
                  <button 
                  className="flex-res-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded  mt-5 ml-3 "
                  onClick={(e)=>{setNext(next-1)}}
                  >Back</button>
                )
              }
                        
              {
                next <= 1 && (
                  <button 
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-sm text-white font-bold py-2 px-4 rounded mt-5 ml-3" 
                  type="button"                  
                  onClick={(e)=>{setNext(next+1)}} 
                  >Next</button>
                )
              }
              {
                next == 2 && (
                  <button 
                    className="bg-transparent mx-5 hover:bg-yellow-400 text-yellow-700 font-semibold hover:text-white text-sm py-2 px-4 border border-yellow-200 hover:border-transparent rounded mt-5 ml-3" 
                  >Send</button>
                )
            }
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start  px-4 py-6 md:p-6 xl:p-8 flex-col">
        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Your Data</h3>
        <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
          <div className="flex flex-col justify-start items-start flex-shrink-0">
            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
              <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">David Kent</p>
                <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">CIN : HH2440</p>
              </div>
            </div>
  
            <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
           
              <p className="cursor-pointer text-sm leading-5">david89@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
              <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Adresse</p>
                <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
              </div>
              <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
              </div>
            </div>
            <div className="flex w-full justify-center items-center md:justify-start md:items-start">
              <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>

  );
};

export default Check;