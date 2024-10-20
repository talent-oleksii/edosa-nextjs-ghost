import type { NextPage } from "next";
import Header from '../header';
import Footer from '../footer';
import LoginForm from "./loginform";

const SignIn: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <LoginForm />
                <Footer />
            </div>
        </div>
    );
};

export default SignIn;