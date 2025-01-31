'use client';

import Header from '../header';
import Sidebar from "../components/Sidebar";
import Footer from '../footer';

export default function DashboardLayout ({children}: {children: React.ReactNode}) {
    
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <div className="lg:flex block w-full">
                    {/* <div className="lg:w-1/5 w-full hidden lg:block">
                        <Sidebar onCollapse={false} />
                    </div>
                    <div className="lg:w-1/5 w-full block lg:hidden">
                        <Sidebar onCollapse={true} />
                    </div> */}
                    <div className="w-full ml-0 lg:ml-7 mt-2 lg:mt-0">
                    {/* <div className="lg:w-4/5 w-full ml-0 lg:ml-7 mt-2 lg:mt-0"> */}
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};
