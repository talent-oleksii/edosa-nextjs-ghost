'use client';
import { FC, useEffect, useRef } from 'react';
import React from 'react';
import LOGO from '@/public/assets/images/logo.png';
import SEARCHICON from '@/public/assets/svg/search.svg';
import DefaultButton from './components/buttons/DefaultButton';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getCookie, setCookie } from 'typescript-cookie'


const links: Array<{ text: string, link: string, textColor: string, bgColor: string }> = [
  {
    text: "Learn",
    link: "/learn",
    textColor: "#5C76FF",
    bgColor: "#F3F8FE"
  },
  {
    text: "Read",
    link: "/read",
    textColor: "#FF6E3E",
    bgColor: "#FFF7F4"
  },
  {
    text: "Watch",
    link: "/watch",
    textColor: "#9E77ED",
    bgColor: "#F7F6FF"
  },
  {
    text: "Meet",
    link: "/meet",
    textColor: "#95DA79",
    bgColor: "#F2FAEC"
  },
];

const Header: FC = () => {
  const currentUrl = usePathname();
  const headerPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerPanelRef.current) {
      const activeLink = links.find(item => currentUrl === item.link);
      if (activeLink) {
        headerPanelRef.current.style.background = activeLink.bgColor;
        headerPanelRef.current.style.border = "none"; // Hides the border
      } else {
        headerPanelRef.current.style.border = ""; // Resets border if no active link
      }
    }
  }, [currentUrl]);


  React.useEffect(() => {
    console.log('COOKIE')
    console.log(getCookie('OTZ'))
  }, [])

  return (
    <div className='flex items-center justify-between relative my-1 sm:my-2'>
      <div className='hidden sm:block'>
        <Link href="/">
          <Image src={LOGO} width={360} className='hidden lg:block ml-[85px]' alt='Logo' />
        </Link>
      </div>

      <div
        ref={headerPanelRef}
        className="panel border-2 border-text-color rounded-full bg-white py-1 sm:py-3 px-4 sm:px-8 flex items-center justify-center gap-5 sm:gap-10"
      >
        {links.map((item, index) => {
          const newStyle = currentUrl === item.link
            ? `text-[${item.textColor}] font-bold`
            : "font-normal";
          return (
            <Link
              href={item.link}
              key={index}
              className={`text-xs sm:text-[20px] font-inter ${newStyle}`}
            >
              {item.text}
            </Link>
          );
        })}
      </div>

      <div className='flex items-center justify-center mr-2 sm:mr-10 px-1 sm:px-3 gap-3'>
        <Image src={SEARCHICON} className='hidden sm:block w-5 h-5 hover:cursor-pointer' alt='search' />
        <Link href='./signup'><DefaultButton className='text-xs sm:text-[20px]'>Sign Up</DefaultButton></Link>
        <DefaultButton className='max-w-3'>&nbsp;</DefaultButton>
      </div>
    </div>
  );
};

export default Header;
