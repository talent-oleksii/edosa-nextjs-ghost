'use client';
import React, { FC, useState } from 'react';
import AdminHeader from './adminHeader';
import Learn from './learn/page';
import Read from './read/page';
import Watch from './watch/page';
import Meet from './meet/page';
import Chatbot from './chatbot/page';
import Calendar from './calendar/page';
import Assessment from './assessment/page';
import Package from './package/Package';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

const items = {
    learn: 'Learn',
    read: 'Read',
    watch: 'Watch',
    meet: 'Meet',
    chatbot: 'Chatbot',
    calendar: 'Calendar',
    assessment: 'Assessment',
    package: 'Package'
}

const Admin: FC = () => {

    const [selected, setSelected] = useState<string>('learn');
    const [expand, setExpand] = useState<boolean>();

    return (
        <div className='max-w-[80em] mx-auto px-5 py-5'>
            <AdminHeader />
            <hr />
            <div className='mt-3 block md:flex'>
                <div className='w-full md:w-3/12 mr-4'>
                    <div 
                        className='md:hidden flex justify-center items-center w-full h-[40px] bg-[#EEE] rounded-[10px] mb-1 font-bold relative'
                        onClick={() => setExpand(!expand)}
                    >
                        {items[selected as keyof typeof items]}
                        <span className='absolute top-2 right-4 text-[20px]'>
                            { !expand ? <IoIosArrowDown /> : <IoIosArrowUp /> }
                        </span>
                    </div>
                    {/* For Mobile */}
                    {
                        expand && (
                            <div className='w-full h-full py-1 md:py-10 text-[17px] xl:text-[22px] bg-[#F9F9F9] rounded-[22px] lg:block flex md:hidden justify-center'>
                                <div className='text-left mx-[auto] max-w-[125px] xl:max-w-[155px]'>
                                    <div 
                                        className={`my-3 hover:cursor-pointer ${selected == 'learn' && 'font-bold'}`}
                                        onClick={() => {
                                            setSelected('learn');
                                            setExpand(false);
                                        }}
                                    >
                                        Learn
                                    </div>
                                    <div 
                                        className={`my-3 hover:cursor-pointer ${selected == 'read' && 'font-bold'}`}
                                        onClick={() => {
                                            setSelected('read');
                                            setExpand(false);
                                        }}
                                    >
                                        Read
                                    </div>
                                    <div 
                                        className={`my-3 hover:cursor-pointer ${selected == 'watch' && 'font-bold'}`}
                                        onClick={() => {
                                            setSelected('watch');
                                            setExpand(false);
                                        }}
                                    >
                                        Watch
                                    </div>
                                    <div 
                                        className={`my-3 hover:cursor-pointer ${selected == 'meet' && 'font-bold'}`}
                                        onClick={() => {
                                            setSelected('meet');
                                            setExpand(false);
                                        }}
                                    >
                                        Meet
                                    </div>
                                    <div 
                                        className={`my-3 hover:cursor-pointer ${selected == 'chatbot' && 'font-bold'}`}
                                        onClick={() => {
                                            setSelected('chatbot');
                                            setExpand(false);
                                        }}
                                    >
                                        Chatbot
                                    </div>
                                    {/* <div 
                                        className={`my-3 hover:cursor-pointer ${selected == 'calendar' && 'font-bold'}`}
                                        onClick={() => {
                                            setSelected('calendar');
                                            setExpand(false);
                                        }}
                                    >
                                        Calendar
                                    </div> */}
                                    <div 
                                        className={`my-3 hover:cursor-pointer ${selected == 'assessment' && 'font-bold'}`}
                                        onClick={() => {
                                            setSelected('assessment');
                                            setExpand(false);
                                        }}
                                    >
                                        Assessment
                                    </div>
                                    <div 
                                        className={`my-3 hover:cursor-pointer ${selected == 'package' && 'font-bold'}`}
                                        onClick={() => {
                                            setSelected('package');
                                            setExpand(false);
                                        }}
                                    >
                                        Package
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {/* For PC */}
                    <div className='w-full h-full py-1 md:py-10 text-[17px] xl:text-[22px] bg-[#F9F9F9] rounded-[22px] lg:block hidden md:flex justify-center'>
                        <div className='text-left mx-[auto] max-w-[125px] xl:max-w-[155px]'>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'learn' && 'font-bold'}`}
                                onClick={() => setSelected('learn')}
                            >
                                Learn
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'read' && 'font-bold'}`}
                                onClick={() => setSelected('read')}
                            >
                                Read
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'watch' && 'font-bold'}`}
                                onClick={() => setSelected('watch')}
                            >
                                Watch
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'meet' && 'font-bold'}`}
                                onClick={() => setSelected('meet')}
                            >
                                Meet
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'chatbot' && 'font-bold'}`}
                                onClick={() => setSelected('chatbot')}
                            >
                                Chatbot
                            </div>
                            {/* <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'calendar' && 'font-bold'}`}
                                onClick={() => setSelected('calendar')}
                            >
                                Calendar
                            </div> */}
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'assessment' && 'font-bold'}`}
                                onClick={() => setSelected('assessment')}
                            >
                                Assessment
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'package' && 'font-bold'}`}
                                onClick={() => setSelected('package')}
                            >
                                Package
                            </div>
                        </div>
                    </div>

                </div>

                {/* route component */}
                <div className='w-full md:w-9/12 mt-4 md:mt-0'>
                    { selected == 'learn' && (<Learn />) }
                    { selected == 'read' && (<Read />) }
                    { selected == 'watch' && (<Watch />) }
                    { selected == 'meet' && (<Meet />) }
                    { selected == 'chatbot' && (<Chatbot />) }
                    { selected == 'calendar' && (<Calendar />) }
                    { selected == 'assessment' && (<Assessment />) }
                    { selected == 'package' && (<Package />) }
                </div>
            </div>
        </div>
    )
}

export default Admin;