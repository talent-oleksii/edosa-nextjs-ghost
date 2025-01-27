'use client';
import type { NextPage } from "next";
import { Suspense } from 'react';
import Header from '../header';
import Footer from '../footer';
import ReadMainComponent from "./readmaincomponent";
import Books from "./books";
import HintPage from "./hintpage";
import ReadingCards from "./readingcards";
import SignUpNewsletter from "../homepage/signupnewsletter";
import FlowingBar from "../homepage/flowingbar";

const Read: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Suspense>
                    <Header />
                    <ReadMainComponent />
                    <Books />
                    <HintPage />
                    <ReadingCards />
                    <SignUpNewsletter />
                    <FlowingBar />
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
};

export default Read;