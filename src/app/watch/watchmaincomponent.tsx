'use client';
import { FC, useEffect } from 'react';
const WatchMainComponent: FC = () => {

    return (
        <div className='bg-[#F7F6FF] rounded-[20px] h-[330px] sm:h-[736px]'>
            <div className='ml-[20px] mr-[20px] relative'>

                <div className="inset-0 flex ml-4 sm:ml-[94px] pt-[30px] sm:pt-[168px]">
                    <h2 className="text-2xl sm:text-[60px] font-bold text-[#475467] leading-10 sm:leading-[72px]">
                        Engage with a Variety of <br /> Multi-media Content
                    </h2>
                </div>
                <div className="inset-0 flex mt-4 sm:mt-[45px] ml-4 sm:ml-[94px]">
                    <h2 className="text-lg sm:text-3xl text-[#475467] leading-8 sm:leading-[44px]">
                        Choose the plan that best fits your <br /> needs and
                        <span className='text-[#9E77ED] font-bold'> start transforming data <br /> into decisions. </span>
                    </h2>
                </div>
            </div>
        </div >
    );
};

export default WatchMainComponent;