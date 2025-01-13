'use client';
import React, { FC } from 'react';
import Header from '../header';
import Footer from '../footer';

const Privacy:FC = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Header />
            <div className='mt-10 sm:mt-20 mb-10'>
                <div className='max-w-[50em] w-full mx-auto'>
                    <h1 className='text-center text-[30px] sm:text-[45px] font-bold'>Privacy</h1>
                    <div className='text-text-color text-center text-[16px] sm:text-[20px] my-5'>
                        Wondering how this website fares when it comes to privacy and GDPR rules? Good news:
                    </div>
                    <div className='text-text-color text-[16px] sm:text-[20px] px-2'>
                        <p className='my-1'>1. This website is hosted on <a href='https://ghost.org/?ref=edosaodaro.com' className='text-[#004000]'>www.ghost.org</a></p>
                        <p className='my-1'>2. Ghost does not use any tracking cookies of any kind</p>
                        <p className='my-1'>3. Email addresses are used for nothing other than for sending out newsletters</p>
                        <p className='my-1'>4. There is absolutely no data transferred or shared with any third parties</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy;