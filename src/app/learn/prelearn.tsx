'use client';
import React, { FC } from 'react';

const Prelearn: FC = () => {

    return (
        <div className="mt-4 sm:mt-14 sm:px-10 flex justify-center items-center flex-col">
            <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-3 sm:px-5 py-1">
                Learn
            </div>
            <div className="text-lg sm:text-4xl leading-11 font-bold mt-4 sm:mt-8 text-text-color">
                Learn with Edosa Odaro
            </div>
            <div className="text-lg sm:text-xl leading-8 mt-4 sm:mt-8 text-text-color">
                Edosa Odaro’s learning resources are designed to support professionals at every <br />
                stage of their journey, from beginners to advanced leaders. Explore our range of <br />
                educational offerings to gain valuable skills and insights in data science and AI:
            </div>
        </div>
    )
}

export default Prelearn;