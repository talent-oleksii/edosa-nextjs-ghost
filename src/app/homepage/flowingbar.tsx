'use client';
import { FC } from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import ITEM1 from '@/public/assets/svg/item1.svg';
import ITEM2 from '@/public/assets/svg/item2.svg';
import ITEM3 from '@/public/assets/svg/item3.svg';
import ITEM4 from '@/public/assets/svg/item4.svg';
import ITEM5 from '@/public/assets/svg/item5.svg';
import Image from 'next/image';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024, },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const FlowingBar: FC = () => {
    const items = [ITEM1, ITEM2, ITEM3, ITEM4, ITEM5];
    return (
        <Carousel responsive={responsive} autoPlay arrows={false} className='mt-4 sm:mt-7' itemClass="px-2 sm:px-5">
            {items.map((item, index) => (
                <div key={index} className={`card rounded-md shadow-md gap-3 bg-def-color flex h-[100px] sm:h-[205px] items-center justify-center`}>
                    <Image src={item} className='h-[50px] sm:h-[120px] w-auto' draggable="false" alt='item' />
                </div>
            ))}
        </Carousel>
    );
};

export default FlowingBar;