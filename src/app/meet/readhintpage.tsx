'use client';
import React, { FC, ChangeEvent, useState } from "react";
import Link from "next/link";

const ReadHintPage: FC = () => {

  return (
    <div style={{ backgroundColor: "#F2FAEC", backgroundImage: "url(/assets/images/signUpNewsLetter/back.svg)", backgroundPosition: "center" }} className="bg-no-repeat mt-8 sm:mt-15 sm:mx-10 rounded-3xl px-4 sm:px-10 flex justify-center items-center flex-col h-[240px] sm:h-[300px]">
      <div className="text-lg sm:text-4xl leading-11 font-bold mt-2 sm:mt-15 text-text-color hover:text-[#333] transition-text duration-100 ease-linear">
        <Link href="/Dashboard/meet">Request Edosa to Speak</Link>
      </div>
      <div className="text-base sm:text-xl leading-6 sm:leading-8 mt-2 sm:mt-8 text-text-color">
        Don’t miss out on the latest insights, and exclusive content from Edosa Odaro.<br /> Subscribe to the newsletter and get valuable information directly in your inbox.
      </div>
    </div>
  );
}

export default ReadHintPage;