'use client';
import type { NextPage } from "next";
import { Suspense } from 'react';
import Header from '../header';
import Footer from '../footer';
import WatchMainComponent from "./watchmaincomponent";
import WatchContent from "./watchcontent";
import StayUpdated from "../homepage/stayupdated";
import FlowingBar from "../homepage/flowingbar";
import LearnStyle from "../learn/learnstyle";

const Watch: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Suspense>
                    <Header />
                    <WatchMainComponent />
                    <WatchContent />
                    {/* <StayUpdated /> */}
                    <div className="my-10"></div>
                    <LearnStyle />
                    <div className="my-10"></div>
                    <FlowingBar />
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
};

export default Watch;