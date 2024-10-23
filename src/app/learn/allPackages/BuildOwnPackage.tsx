'use client';
import { FC } from 'react';
import DefaultButton from '../../components/buttons/DefaultButton';

const BuildOwnPackage: FC = () => {
    return (
        <div className='sm:flex block w-full my-3'>
            
            <div className='sm:h-[457px] h-[300px] sm:w-8/12 w-full bg-[#F3F8FE] rounded-[20px] mr-[23px]'>
                <h1 className='sm:ml-12 mx-8 sm:pt-10 pt-4 sm:text-[50px] text-[30px] font-bold text-text-color leading-[60.51px] font-inter'>
                    Build your own package
                </h1>
                <h2 className='sm:ml-12 mx-8 sm:mt-12 mt-8 font-[600] sm:text-[36px] text-[20px] font-bold text-text-color leading-[43.57px] font-inter'>
                    Text about package
                </h2>
                <h2 className='sm:ml-12 mx-8 sm:mt-6 mt-3 font-[600] sm:text-[36px] text-[20px] font-bold text-text-color leading-[43.57px] font-inter'>
                    Text about package
                </h2>
            </div>

            <div className='h-[457px] sm:w-4/12 w-full bg-[#F9F9F9] rounded-[20px] sm:mt-0 mt-3'>
                <h2 className='mx-12 md:pt-5 sm:pt-10 pt-10 text-[30px] font-bold text-text-color leading-[36.31px] font-inter pb-4'>
                    Order Summery
                </h2>
                <div className='flex justify-between mx-8 text-[16px] font-bold text-text-color leading-[19.36px] font-inter mt-4'>
                    <div>Item 1</div>
                    <div>XX $</div>
                </div>
                <div className='flex justify-between mx-8 text-[16px] font-bold text-text-color leading-[19.36px] font-inter mt-4'>
                    <div>Item 2</div>
                    <div></div>
                </div>
                <div className='flex justify-between mx-8 text-[16px] font-bold text-text-color leading-[19.36px] font-inter mt-4'>
                    <div>Item 3</div>
                    <div></div>
                </div>
                <div className='flex justify-between mx-8 text-[16px] font-bold text-text-color leading-[19.36px] font-inter mt-4'>
                    <div>Item 4</div>
                    <div></div>
                </div>
                <div className='flex justify-between mx-8 text-[16px] font-bold text-text-color leading-[19.36px] font-inter mt-4'>
                    <div>Item 5</div>
                    <div></div>
                </div>

                <div className='flex justify-between mx-8 text-[16px] font-bold text-text-color leading-[19.36px] font-inter mt-6'>
                    <div>ESTIMATED TOTAL</div>
                    <div>XX $</div>
                </div>
                <div className='mx-8 mt-10'>
                    <DefaultButton className="w-full py-2">Go to Cart</DefaultButton>
                </div>
            </div>

        </div>
    )
}

export default BuildOwnPackage;