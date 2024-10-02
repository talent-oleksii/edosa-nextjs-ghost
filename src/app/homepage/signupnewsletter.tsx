'use client';
import React, { FC, ChangeEvent, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
const SignUpNewsletter: FC = () => {
  const [email, setEmail] = useState<string>(""); // Specify the state type as string

  // Define the onChange handler with the appropriate event type
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div style={{ backgroundColor: "#F3F8FE", backgroundImage: "url(/assets/images/signUpNewsLetter/back.svg)", backgroundPosition: "center" }} className="bg-no-repeat mt-8 sm:mt-15 sm:mx-10 rounded-3xl px-4 sm:px-10 flex justify-center items-center flex-col h-[240px] sm:h-[300px]">
      <div className="text-lg sm:text-4xl leading-11 font-bold mt-2 sm:mt-15 text-text-color">
        Sign Up for the Newsletter
      </div>
      <div className="text-base w-full sm:w-3/5 sm:text-xl leading-6 sm:leading-8 mt-2 sm:mt-8 text-text-color">
        Don’t miss out on the latest insights, and exclusive content from Edosa Odaro. Subscribe to the newsletter and get valuable information directly in your inbox.
      </div>
      <div className="relative flex w-full max-w-[24rem] h-10 mt-5">
        <input className="w-full rounded-full p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Enter Email" />
        <button className="absolute text-sm sm:text-base right-2 mt-1 h-8 px-2 rounded-full bg-text-color text-white">Sign Up</button>
      </div>
    </div>
  );
}

export default SignUpNewsletter;