import type { NextPage } from "next";
import Image from "next/image";
import BOOK1 from "@/public/assets/images/books/book1.png";
import BOOK2 from "@/public/assets/images/books/book2.png";
import BOOK3 from "@/public/assets/images/books/book3.png";
import BOOK4 from "@/public/assets/images/books/book4.png";
import DefaultButton from "../components/buttons/DefaultButton";
const Books: NextPage = () => {
  return (
    <div className='sm:ml-14 pb-5 mt-10 sm:mt-24'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 sm:mx-16">
        <div>
          <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
            Book
          </div>
          <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
            Value-Driven Data
          </div>
          {/* 
          <div className="flex flex-row mt-8 ml-4 ">
            <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Get in Touch</DefaultButton>
            <DefaultButton className="ml-8 !py-2 !sm-py-2">Book your Slot</DefaultButton>
          </div> */}
        </div>
        <div>
          <Image src={BOOK1} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mt-6 sm:mt-24">
        <div>
          <Image src={BOOK2} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
        </div>
        <div>
          <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
            Book
          </div>
          <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
            Workbook
          </div>

          {/* <div className="flex flex-row mt-8 ml-4 ">
            <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Get more Info</DefaultButton>
            <DefaultButton className="ml-8 !py-2 !sm-py-2">Book your Time</DefaultButton>
          </div> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
        <div>
          <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
            Book
          </div>
          <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
            The Executive<br /> Handbook
          </div>

        </div>
        <div>
          <Image src={BOOK3} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mt-6 sm:mt-24">
        <div>
          <Image src={BOOK4} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
        </div>
        <div>
          <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
            Book
          </div>
          <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
            Making Data Work
          </div>

        </div>
      </div>
    </div >
  );
};

export default Books;