'use client';
import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="mt-4 sm:mt-14 px-4 sm:px-10 ">
      <div>
        <span className="text-[#067647] leading-8 font-bold rounded-full bg-[#ABEFC6] mx-10 sm:mx-32 px-3 sm:px-5 py-1">New</span>
      </div>
      <div className="mt-5 sm:mt-10 grid grid-rows-3 sm:grid-rows-2 md:grid-rows-1 grid-flow-col gap-4">
          <div className="flex flex-col gap-5">
            <div className="leading-6 text-[#667085]">Learn</div>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Bundles</div>
            <Link href="/Dashboard/learn">
              <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Course</div>
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <div className="leading-6 text-[#667085]">Read</div>
            <Link href="/Dashboard/read">
              <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Books</div>
            </Link>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Articles</div>
            <Link href="/Dashboard/newsletter">
              <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Newsletter</div>
            </Link>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Request</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="leading-6 text-[#667085]">Watch</div>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Videos</div>
            <Link href="/Dashboard/watch">
              <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Podcast</div>
            </Link>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Events</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="leading-6 text-[#667085]">Meet</div>
            <Link href="/Dashboard/meet">
              <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">About Edosa</div>
            </Link>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Coaching</div>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px]">Speaker</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="leading-6 text-[#667085]">Social</div>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px] hover:cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/edosa/')}>LinkedIn</div>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px] hover:cursor-pointer" onClick={() => window.open('https://www.instagram.com/edosaodarodata/')}>Instagram</div>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px] hover:cursor-pointer" onClick={() => window.open('https://twitter.com/EdosaOdaro')}>Twitter</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="leading-6 text-[#667085]">Legal</div>
            <Link href="/">
              <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px] hover:cursor-pointer">Terms</div>
            </Link>
            <Link href="/privacy">
              <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px] hover:cursor-pointer">Privacy</div>
            </Link>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px] hover:cursor-pointer">Cookies</div>
            <div className="pl-4 sm:pl-0 font-bold text-[#475467] leading-3 sm:leading-6 text-[14px] sm:text-[16px] hover:cursor-pointer">Licenses</div>
          </div>
      </div>
      <hr className="mt-3 sm:mt-5"/>
      <div className="flex justify-between py-5">
        <span className="text-[#667085] font-bold text-[14px] sm:text-[16px]">Edosa Odaro</span>
        <span className="text-[#667085] text-[14px] sm:text-[16px]">© 2024 All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;