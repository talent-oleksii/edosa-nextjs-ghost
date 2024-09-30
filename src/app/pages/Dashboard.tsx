import { FC, useEffect } from 'react';
import Header from './Header';
import MainComponent from './homepage/MainComponent';
import FlowingBar from './homepage/FlowingBar';
import ValueDriven from './homepage/ValueDriven';
import StayUpdated from './homepage/StayUpdated';
import FAQ from './homepage/FAQ';
import SignUpNewsletter from './homepage/SignUpNewsletter';
import Footer from './Footer';
const Dashboard: FC = () => {

  return (
    <div className='mx-5 pb-5'>
      <Header />
      <MainComponent />
      <FlowingBar />
      <ValueDriven />
      <StayUpdated />
      <FAQ />
      <SignUpNewsletter />
      <Footer />
    </div>
  );
};

export default Dashboard;