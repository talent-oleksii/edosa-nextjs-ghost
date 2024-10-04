import type { NextPage } from "next";
import Header from '../header';
import Footer from '../footer';
import WatchMainComponent from "./watchmaincomponent";
import WatchContent from "./watchcontent";
import StayUpdated from "../homepage/stayupdated";

const Watch: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <WatchMainComponent />
                <WatchContent />
                <StayUpdated />
                <Footer />
            </div>
        </div>
    );
};

export default Watch;