import type { NextPage } from "next";
import Header from '../header';
import Footer from '../footer';
import ReviewComponent from "../components/reviewcomponent";
import ReadMainComponent from "./readmaincomponent";
import Books from "./books";
import HintPage from "./hintpage";
import ReadingCards from "./readingcards";
import SignUpNewsletter from "../homepage/signupnewsletter";
const Read: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <ReadMainComponent />
                <Books />
                <HintPage />
                <ReadingCards />
                <SignUpNewsletter />
                <Footer />
            </div>
        </div>
    );
};

export default Read;