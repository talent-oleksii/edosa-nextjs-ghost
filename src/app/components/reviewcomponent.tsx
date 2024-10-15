import type { NextPage } from "next";
import Image from "next/image";
import WOMAN from "@/public/assets/images/women.png";
import STAR from "@/public/assets/svg/star.svg";
import DOTS from "@/public/assets/svg/threedot.svg";
const ReviewComponent: NextPage = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:row-span-2 relative sm:ml-14 mt-10 sm:mt-24 rounded-2xl  bg-[#F3F8FE] min-h-[448px]'>
      <div className="flex flex-col ml-6 sm:ml-16 mt-16">
        <div className="flex flex-row gap-2">
          <Image src={STAR} alt="star"></Image>
          <Image src={STAR} alt="star"></Image>
          <Image src={STAR} alt="star"></Image>
          <Image src={STAR} alt="star"></Image>
          <Image src={STAR} alt="star"></Image>
        </div>
        <div className="text-xl mt-4 sm:text-4xl mr-4 font-inter sm:mt-6">
          Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.
        </div>
        <div className="text-xl font-bold font-inter w-3/5 mt-6">
          — Cynthia Deeb
        </div>
        <div className="text-xl font-inter sm:first-letter:w-3/5 mt-3">
          Co-Founder at Polypo
        </div>
        <div className="mt-6">
          <Image src={DOTS} alt="Three dots" />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <Image src={WOMAN} alt="learn image" height={448} className="rounded-b-2xl sm:rounded-bl-none sm:rounded-r-2xl mt-4 sm:mt-0" />
      </div>

    </div>
  );
};

export default ReviewComponent;