import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="mt-4 sm:mt-14 px-4 sm:px-10 ">
      <div>
        <span className="text-sm sm:text-sm text-[#067647] leading-8 font-bold rounded-full bg-[#ABEFC6] mx-10 sm:mx-32 px-3 sm:px-5 py-1">New</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:mx-12 md:mx-24 relative">
        <div className="flex flex-col gap-5 sm:gap-5 mt-6">
          <span className="text-base leading-6 text-[#667085] ">Learn</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Bundles</span>
        </div>
        <div className="flex flex-col gap-5 sm:gap-5 mt-6">
          <span className="text-base leading-6 text-[#667085] ">Read</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Books</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Articles</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Newsletter</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Request</span>

        </div>
        <div className="flex flex-col gap-5 sm:gap-5 mt-6">
          <span className="text-base leading-6 text-[#667085] ">Watch</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Videos</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Podcast</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Events</span>

        </div>
        <div className="flex flex-col gap-5 sm:gap-5 mt-6">
          <span className="text-base leading-6 text-[#667085] ">Meet</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">About Edosa</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Coaching</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Speaker</span>

        </div>
        <div className="flex flex-col gap-5 sm:gap-5 mt-6">
          <span className="text-base leading-6 text-[#667085] ">Social</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">LinkedIn</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Instagram</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Twitter</span>

        </div>
        <div className="flex flex-col gap-5 sm:gap-5 mt-6">
          <span className="text-base leading-6 text-[#667085] ">Legal</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Terms</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Privacy</span>
          <span className="text-base pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Cookies</span>

        </div>
        <span className="absolute left-0 -bottom-12 sm:-bottom-8 md:bottom-0 text-lg pl-4 sm:pl-0 font-bold leading-6 text-[#475467] ">Edosa Odaro</span>

      </div>
      <div>
        <hr className="mt-20 sm:mt-11" />
        <span className="absolute right-24 text-base leading-6 text-[#667085] px-3 sm:px-5 py-1 mt-7 ">© 2024 All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;