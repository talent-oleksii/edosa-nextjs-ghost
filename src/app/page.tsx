import type { NextPage } from "next";
import Header from './header';
import MainComponent from './homepage/maincomponent';
import FlowingBar from './homepage/flowingbar';
import ValueDriven from './homepage/valuedriven';
import StayUpdated from './homepage/stayupdated';
import FAQ from './homepage/faq';
import SignUpNewsletter from './homepage/signupnewsletter';
import Footer from './footer';
import { getPosts } from "./ghost-client";
const Home: NextPage = () => {
  return (
    <div className='mx-5 pb-5'>
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <MainComponent />
        <FlowingBar />
        <ValueDriven />
        <StayUpdated />
        <FAQ />
        <SignUpNewsletter />
        <Footer />
      </div>
    </div >
  );
};

export default Home;
