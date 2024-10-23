'use client';
import React, { FC, ChangeEvent, useState } from "react";
import DefaultButton from "../components/buttons/DefaultButton";
import Link from "next/link";

const BuildPackage: FC = () => {
  const [email, setEmail] = useState<string>(""); // Specify the state type as string

  // Define the onChange handler with the appropriate event type
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div style={{ backgroundColor: "#F3F8FE", backgroundImage: "url(/assets/images/signUpNewsLetter/back.svg)", backgroundPosition: "center" }} className="bg-no-repeat mt-8 sm:mt-15 sm:mx-10 rounded-3xl px-4 sm:px-10 flex justify-center items-center flex-col h-[240px] sm:h-[300px]">
      <div className="text-lg sm:text-4xl leading-11 font-bold mt-2 sm:mt-15 text-text-color">
        Build Your Own Package
      </div>
      <div className="text-base sm:text-xl leading-6 sm:leading-8 mt-2 sm:mt-8 text-text-color">
        Don’t miss out on the latest insights, and exclusive content from Edosa Odaro.<br /> Subscribe to the newsletter and get valuable information directly in your inbox.
      </div>
      <div className="relative flex justify-center w-full max-w-[24rem] mt-5">
        <Link href='/learn/allPackages'>
            <DefaultButton className="w-full py-2">View All Services</DefaultButton>
        </Link>
      </div>
    </div>
  );
}

export default BuildPackage;