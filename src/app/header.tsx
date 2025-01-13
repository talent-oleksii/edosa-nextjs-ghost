'use client';
import { FC, useState, useEffect, useRef } from 'react';
import React from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { jwtDecode } from 'jwt-decode';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LOGO from '@/public/assets/images/logo.png';
import SEARCHICON from '@/public/assets/svg/search.svg';
import DefaultButton from './components/buttons/DefaultButton';
import setupGhostApi from './utils/api';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useSearchParams } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const ADMIN_API_KEY = process.env.NEXT_PUBLIC_GHOST_ADMIN_API_KEY;


const ghostAPI = setupGhostApi({
  apiUrl: API_URL,
  apiKey: ADMIN_API_KEY
})


const links: Array<{ text: string, link: string, textColor: string, bgColor: string }> = [
  {
    text: "Learn",
    link: "/learn",
    textColor: "l-main-color",
    bgColor: "#F3F8FE"
  },
  {
    text: "Read",
    link: "/read",
    textColor: "r-main-color",
    bgColor: "#FFF7F4"
  },
  {
    text: "Watch",
    link: "/watch",
    textColor: "w-main-color",
    bgColor: "#F7F6FF"
  },
  {
    text: "Meet",
    link: "/meet",
    textColor: "m-main-color",
    bgColor: "#F2FAEC"
  },
];


const linksArr:any = ['/learn', '/read', '/watch', '/meet'];


interface userStyle {
    jwtToken: any,
    member: any
}


const Header: FC = () => {

  const currentUrl = usePathname();
  const searchParams = useSearchParams();
  const headerPanelRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<userStyle | null>();
  const hasRun = useRef(false);


  useEffect(() => {
    if (headerPanelRef.current) {
      const activeLink = links.find(item => currentUrl === item.link);
      if (activeLink) {
        headerPanelRef.current.style.background = activeLink.bgColor;
        headerPanelRef.current.style.border = "1px";
        headerPanelRef.current.style.borderStyle = "solid";
        headerPanelRef.current.style.borderColor = activeLink.bgColor;
      } else {
        headerPanelRef.current.style.border = ""; // Resets border if no active link
      }
    }
  }, [currentUrl]);

  useEffect(() => {

    if (hasRun.current) return;
    hasRun.current = true;

    ////////////// Real Time Funciton /////////////
      // 12-day Email Course
      axios.post('/api/12-day-course/check12DayCourse');

      // Save Today
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
      const day = String(date.getDate()).padStart(2, '0');
      localStorage.setItem('selectDate', `${year}-${month}-${day}`);

      const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      const dayOfWeek = daysOfWeek[date.getDay()];
      localStorage.setItem('selectDay', dayOfWeek);
    //////////// End Real Time Funciton ///////////

    const getToken = async() => {
      try {
          const res = await fetch('/api/getUserInfo/members');
          const response = await res.json();

          const jwtToken = response.jwtToken;
          const member = response.member;

          setUser({
              jwtToken: jwtDecode(jwtToken),
              member: member
          });
          localStorage.setItem('edosaJwtToken', jwtToken);
          localStorage.setItem('edosaMember', JSON.stringify(member));

          toast.success(`Welcome back!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            style: {width: '250px', marginLeft: '50px'}
          });

        } catch (err) {
          console.log(err);
      }
    }

    const getAuthUrl = async() => {
      const response = await axios.get<any>('/api/nylas/nylas');
      window.location.href = response.data;
    }

    const getGrantId = async() => {
      const response = await axios.post<any>('/api/nylas/getGrantInfo', {code: searchParams?.get('code')});
      localStorage.setItem('grant_id', response.data.grantId);
      console.log(response.data)
    }


    if (localStorage.getItem('edosaMember')) {
        const jwtToken = localStorage.getItem('edosaJwtToken');
        const member = localStorage.getItem('edosaMember');
        setUser({
            jwtToken: jwtToken && jwtDecode(jwtToken),
            member: member && JSON.parse(member)
        });

    } else {
        if (!localStorage.getItem('grant_id') && !searchParams?.get('code') && searchParams?.get('signin')) {
          getAuthUrl();
        }
    
        if (!localStorage.getItem('grant_id') && searchParams?.get('code')) {
          getGrantId();
          getToken();
        }
    }

  }, [])

  // Sign Out
  const onSignout = async() => {
    const response = await ghostAPI.member.signout();
    if (response == 'Success') {
        sessionStorage.clear();
        localStorage.clear();
        // Remove Cookie
        const cookies = document.cookie.split(";");
        for (const cookie of cookies) {
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        }
    }
  }

  return (
    <>
      <div className='block lg:hidden flex justify-center my-3 w-full'>
        <Link href="/">
          <Image src={LOGO} width={250} className='block lg:hidden' alt='Logo' />
        </Link>
      </div>
      <div className='block sm:flex items-center justify-between relative my-1 sm:my-2'>
        <div className='hidden lg:block'>
          <Link href="/">
            <Image src={LOGO} width={360} className='hidden lg:block ml-[20px] xl:ml-[85px]' alt='Logo' />
          </Link>
        </div>

        {
            linksArr.includes(currentUrl) ? (
                <div
                  ref={headerPanelRef}
                  className="panel rounded-full flex justify-center px-3"
                >
                    {links.map((item, index) => {
                        const newStyle = currentUrl === item.link
                          ? `text-${item.textColor} font-bold`
                          : "font-normal";
                        return (
                          <Link
                            href={item.link}
                            key={index}
                          >
                            <div className={`text-[16px] md:text-[20px] font-inter px-5 py-1.5 ${newStyle}`}>
                              {item.text}
                            </div>
                          </Link>
                        );
                    })}
                </div>
            ) : (
                <div
                  ref={headerPanelRef}
                  className="panel rounded-full flex justify-center overflow-hidden"
                >
                    <Link
                      href="/learn"
                    >
                      <div className={`text-[16px] md:text-[20px] font-inter px-5 py-1.5 bg-l-main-color text-[#fff] pl-8 rounded-tl-full rounded-bl-full`}>
                        Learn
                      </div>
                    </Link>

                    <Link
                      href="/read"
                    >
                      <div className={`text-[16px] md:text-[20px] font-inter px-5 py-1.5 bg-r-main-color text-[#fff]`}>
                        Read
                      </div>
                    </Link>

                    <Link
                      href="/watch"
                    >
                      <div className={`text-[16px] md:text-[20px] font-inter px-5 py-1.5 bg-w-main-color text-[#fff]`}>
                        Watch
                      </div>
                    </Link>

                    <Link
                      href="/meet"
                    >
                      <div className={`text-[16px] md:text-[20px] font-inter px-5 py-1.5 bg-m-main-color text-[#fff] pr-8 rounded-tr-full rounded-br-full`}>
                        Meet
                      </div>
                    </Link>
                </div>
            )
        }

        <div className='flex items-center justify-center mr-2 md:mr-10 px-1 sm:px-3 gap-3 my-2 sm:my-0'>
          {/* <Image src={SEARCHICON} className='w-5 h-5 hover:cursor-pointer' alt='search' /> */}
          <div className='w-0 sm:w-10 h-5'></div>

            {
              !user ? (

                  <Link href='/signin'><DefaultButton className='text-[14px] md:text-[20px] py-[8px]'>Access</DefaultButton></Link>

              ) : (

                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton>
                        <DefaultButton className='text-[14px] md:text-[20px] py-[8px]'>{user.member.name}</DefaultButton>
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-[-60px] sm:right-0 z-[100] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <div
                            className="block px-4 py-4 text-md text-gray-700 font-bold text-[15px]"
                          >
                            Hello, {user.member.name}!
                          </div>
                        </MenuItem>
                      </div>
                      <div className="py-1">
                        <MenuItem>
                          <Link
                            href="/admin"
                            className="block px-4 py-3 text-md text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none tracking-[1px]"
                          >
                            Admin Panel
                          </Link>
                        </MenuItem>

                        <MenuItem>
                          <Link
                            href="/Dashboard"
                            className="block px-4 py-3 text-md text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none tracking-[1px]"
                          >
                            Dashboard
                          </Link>
                        </MenuItem>

                        <MenuItem>
                          <button
                            type="submit"
                            className="block w-full px-4 py-3 text-left text-md text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none tracking-[1px]"
                            onClick={onSignout}
                          >
                            Sign out
                          </button>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                  
              )
            }  
        
          {/* <DefaultButton className='max-w-3 aspect-square'>&nbsp;</DefaultButton> */}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Header;
function clearCookie(cookieName: string) {
  throw new Error('Function not implemented.');
}

