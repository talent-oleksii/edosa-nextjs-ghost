import type { NextPage } from "next";
import Header from '../header';
import LearnMainComponent from './learnmaincomponent';
import Footer from '../footer';
import LearnStyle from "./learnstyle";
import BuildPackage from "./buildpackage";
const Learn: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <LearnMainComponent />
                <LearnStyle />
                <BuildPackage />
                <Footer />
            </div>
        </div>
    );
};

export default Learn;