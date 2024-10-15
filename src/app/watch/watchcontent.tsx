'use client';
import { FC, useEffect } from 'react';
const WatchContent: FC = () => {

    return (
        <div className='flex rounded-[20px] h-[330px] sm:h-[736px] mt-16'>
            <div className='ml-[20px] mr-[20px] relative flex flex-col justify-center items-center'>
                <div>
                    <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-3 sm:px-5 py-1">Watch</span>
                </div>
                <div className="text-lg sm:text-5xl leading-15 font-bold mt-4 sm:mt-8 text-text-color">
                    Learn with Edosa Odaro
                </div>
                <div className="text-base sm:text-2xl leading-6 sm:leading-8 mt-2 sm:mt-8 sm:w-3/4 text-text-color">
                    Edosa Odaro’s learning resources are designed to support professionals at every stage of their journey, from beginners to advanced leaders. Explore our range of educational offerings to gain valuable skills and insights in data science and AI:
                </div>
                <div className='bg-[#F7F6FF] mt-8 h-[600px] w-full rounded-2xl flex'>
                </div>
                <div className='flex sm:flex-row sm:w-full gap-6 sm:row-span-4 mt-30'>
                    <div className='bg-[#F7F6FF] mt-8 h-[160px] w-full rounded-2xl'>
                    </div>
                    <div className='bg-[#F7F6FF] mt-8 h-[160px] w-full rounded-2xl'>
                    </div>
                    <div className='bg-[#F7F6FF] mt-8 h-[160px] w-full rounded-2xl'>
                    </div>
                    <div className='bg-[#F7F6FF] mt-8 h-[160px] w-full rounded-2xl'>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WatchContent;