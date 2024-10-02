import type { NextPage } from "next";
import Header from '../header';
import LearnMainComponent from './learnmaincomponent';
import Footer from '../footer';

const Learn: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <Header />
            <LearnMainComponent />
            <Footer />
        </div>
    );
};

export default Learn;