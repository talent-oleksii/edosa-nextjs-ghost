'use client';

import React, { FC, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import DefaultButton from '../../components/buttons/DefaultButton';
import axios from 'axios';
import Calendar from '../../components/Calendar';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const bookTimes = [
    { time: "12:00 am", value: "00:00:00" },
    { time: "12:30 am", value: "00:30:00" },
    { time: "1:00 am", value: "01:00:00" },
    { time: "1:30 am", value: "01:30:00" },
    { time: "2:00 am", value: "02:00:00" },
    { time: "2:30 am", value: "02:30:00" },
    { time: "3:00 am", value: "03:00:00" },
    { time: "3:30 am", value: "03:30:00" },
    { time: "4:00 am", value: "04:00:00" },
    { time: "4:30 am", value: "04:30:00" },
    { time: "5:00 am", value: "05:00:00" },
    { time: "5:30 am", value: "05:30:00" },
    { time: "6:00 am", value: "06:00:00" },
    { time: "6:30 am", value: "06:30:00" },
    { time: "7:00 am", value: "07:00:00" },
    { time: "7:30 am", value: "07:30:00" },
    { time: "8:00 am", value: "08:00:00" },
    { time: "8:30 am", value: "08:30:00" },
    { time: "9:00 am", value: "09:00:00" },
    { time: "9:30 am", value: "09:30:00" },
    { time: "10:00 am", value: "10:00:00" },
    { time: "10:30 am", value: "10:30:00" },
    { time: "11:00 am", value: "11:00:00" },
    { time: "11:30 am", value: "11:30:00" },
    { time: "12:00 pm", value: "12:00:00" },
    { time: "12:30 pm", value: "12:30:00" },
    { time: "1:00 pm", value: "13:00:00" },
    { time: "1:30 pm", value: "13:30:00" },
    { time: "2:00 pm", value: "14:00:00" },
    { time: "2:30 pm", value: "14:30:00" },
    { time: "3:00 pm", value: "15:00:00" },
    { time: "3:30 pm", value: "15:30:00" },
    { time: "4:00 pm", value: "16:00:00" },
    { time: "4:30 pm", value: "16:30:00" },
    { time: "5:00 pm", value: "17:00:00" },
    { time: "5:30 pm", value: "17:30:00" },
    { time: "6:00 pm", value: "18:00:00" },
    { time: "6:30 pm", value: "18:30:00" },
    { time: "7:00 pm", value: "19:00:00" },
    { time: "7:30 pm", value: "19:30:00" },
    { time: "8:00 pm", value: "20:00:00" },
    { time: "8:30 pm", value: "20:30:00" },
    { time: "9:00 pm", value: "21:00:00" },
    { time: "9:30 pm", value: "21:30:00" },
    { time: "10:00 pm", value: "22:00:00" },
    { time: "10:30 pm", value: "22:30:00" },
    { time: "11:00 pm", value: "23:00:00" },
    { time: "11:30 pm", value: "23:30:00" }
];


const Meet: FC = () => {

    const [timeToBook, setTimeToBook] = useState<string>('');
    const [select, setSelect] = useState<string>('');   // get day of week via props from Calendar component
    const [availableTime, setAvailableTime] = useState<any>([]);
    const [bookedTime, setBookedTime] = useState<any>({});
    const [selectedDate, setSelectedDate] = useState<any>('');

    React.useEffect(() => {
        const getCalendar = async() => {
            const response = await axios.get<any>('/api/calendarAdmin/getCalendar');
            const day = localStorage.getItem('selectDay');
            const available = response.data[`${day}`];

            const filteredTimes: any[] = bookTimes.filter(({ value }) => {
                const timeValue = value.slice(0, 5); // Get HH:mm part
                return available.some(({ start, end }: any) => timeValue >= start && timeValue <= end);
            });
            
            setAvailableTime(filteredTimes);

            const getBookedTime = await axios.get<any>('/api/nylas/getBooked');
            setBookedTime(getBookedTime.data);

            setSelectedDate(localStorage.getItem('selectDate'))
        }

        getCalendar();
    }, [select]);


    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    }, []);


    const onBook = async() => {

        if ( localStorage.getItem('edosaMember') && localStorage.getItem('selectDate') && timeToBook ) {

            const date = localStorage.getItem('selectDate');
            const day = localStorage.getItem('selectDay');
            const time = timeToBook;

            // Save Today
            const date1 = new Date();
            const year = date1.getFullYear();
            const month = String(date1.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const day1 = String(date1.getDate()).padStart(2, '0');
            localStorage.setItem('selectDate', `${year}-${month}-${day1}`);

            const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
            const dayOfWeek = daysOfWeek[date1.getDay()];
            localStorage.setItem('selectDay', dayOfWeek);
            // End Save Today

            const getMember = localStorage.getItem('edosaMember');
            const member = getMember && JSON.parse(getMember);

            const reqData = {
                grantId: localStorage.getItem('grant_id'),
                date: `${date}T${time}.000Z`,
                day: day
            };

            const response = await axios.post<any>('/api/nylas/createEvent', reqData);
            if (response.data) {
                setTimeToBook('');
                toast.success(`Success Booking!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce
                });
            }

        } else if ( !localStorage.getItem('edosaMember') ) {
            toast.error(`Please sign in to the site!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });

        } else if ( !localStorage.getItem('selectDate') ) {
            toast.error(`Please select the date to book!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });

        } else if (!timeToBook) {
            toast.error(`Please select the time to book!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
        }
    }
    
    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-4 sm:px-7 py-5 sm:py-10'>
            <div className='w-full h-full bg-[#FFF] rounded-[22px] pb-3'>
                <h1 className='text-[18px] sm:text-[20px] md:text-[24px] font-bold font-inter font-[#344054] px-4 sm:px-7 py-5 text-text-color'>
                    Services &gt; Meet &gt; Personal Coaching
                </h1>


                <div className="calendly-inline-widget" data-url="https://calendly.com/edosa/quick-chat" style={{minWidth: '320px', height: '700px'}}></div>



                {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-1 sm:mx-5">
                    <div className='w-full h-full bg-m-demo-color rounded-[22px] sm:px-4 py-4'>
                        <h1 className='text-[20px] md:text-[24px] font-bold text-center text-[#101828]'>
                            Personal Coaching
                        </h1>
                        <div className='text-center py-3'>
                            <Calendar onSelect={setSelect} />
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="text-[20px] sm:text-[23px] md:text-[36px] leading-11 font-bold text-text-color my-5">
                            Book your slot with Edosa
                        </div>

                        <div className={`${availableTime.length ? 'h-[23em] overflow-y-scroll' : 'h-[auto] xl:h-[23em]'}`}>
                            {
                                availableTime.length ? availableTime.map((el:any, index:number) => (

                                    bookedTime[selectedDate] && bookedTime[selectedDate].includes(el.value.split(':').slice(0, -1).join(':')) ? (
                                        <div 
                                            key={index}
                                            className={`relative flex justify-center items-center w-full h-[60px] border border-solid border-[#ccc] bg-[#eee] rounded-[22px] px-6 mt-3 font-bold text-[#aaa]`}
                                        >
                                            {el.time}
                                            <div className='absolute top-1 right-3 font-light italic text-[15px]'>already booked</div>
                                        </div>
                                    ) : (
                                        <div 
                                            key={index} 
                                            className={`flex justify-center items-center hover:cursor-pointer w-full h-[60px] border border-solid border-m-main-color rounded-[22px] px-6 mt-3 font-bold text-text-color ${timeToBook == el.value && 'bg-m-main-color'}`}
                                            onClick={() => setTimeToBook(el.value)}
                                        >
                                            {el.time}
                                        </div>
                                    )
                                    
                                )) : (
                                    <div className='text-text-color text-center text-[18px] sm:text-[22px]'>There is not an available time to book.</div>
                                )
                            }
                        </div>

                        <div className='mt-12 flex gap-3 text-center justify-center w-full'>
                            <Link href="#" 
                                className="w-[120px] sm:w-[160px] md:w-[210px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]"
                                onClick={() => window.open('https://calendar.google.com/calendar/')}
                            >
                                <button>Go to Calendar</button>
                            </Link>
                            <Link href="#" onClick={onBook}>
                                <DefaultButton className='w-[120px] sm:w-[160px] md:w-[210px] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                    Book Now
                                </DefaultButton>
                            </Link>
                        </div>
                    </div>
                </div> */}
                
            </div>
            <ToastContainer />
        </div>
    )
}

export default Meet;

