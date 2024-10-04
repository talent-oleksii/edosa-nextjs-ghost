import type { NextPage } from "next";
import Header from '../header';
import LearnMainComponent from './meetmaincomponent';
import Footer from '../footer';
import PersonalCoaching from "./personalcoaching";
import ReadHintPage from "./readhintpage";
const Watch: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <LearnMainComponent />

                <PersonalCoaching />
                <ReadHintPage />
                <Footer />
            </div>
        </div>
    );
};

export default Watch;