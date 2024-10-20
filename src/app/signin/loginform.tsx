'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import error from 'next/error';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import jwt from 'jsonwebtoken';
import setupGhostApi from '../utils/api';
import Link from 'next/link';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface MyJwtPayload extends JwtPayload {
  email: string;
}

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const ADMIN_API_KEY = process.env.NEXT_PUBLIC_GHOST_ADMIN_API_KEY;
const CONTENT_API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;

const ghostAPI = setupGhostApi({
  apiUrl: API_URL,
  apiKey: ADMIN_API_KEY
})

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [rememberMe, setRememberMe] = useState(false);

  // Sign in
  const onLogin = async () => {
    try {

      const token = await ghostAPI.member.getIntegrityToken();
      const response = await ghostAPI.member.sendMagicLink({
          email: email,
          emailType: 'signin',
          labels: null,
          name: null,
          oldEmail: null,
          // newsletters: [{id: '62710516508d640031918934'}, {id: '65142ccd41873e0001a996f9'}],
          newsletters: null,
          redirect: false,
          integrityToken: token,
          phonenumber: null,
          customUrlHistory: null,
          autoRedirect: false
      })

      console.log('======== sign in =========')
      console.log(response);

      setEmail('');

    } catch (error) {
        console.error("Error: ", error);
    }
};
  
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  };


  return (
    <div className='flex flex-col sm:flex-row sm:row-span-2'>
      <div className="sm:w-2/5 mt-12 mr-8 p-6 rounded-lg bg-[#F9F9F9]">
        <h1 className="text-2xl font-bold text-orange-600 text-center mt-8">EDOSA ODARO</h1>
        <h2 className="text-3xl font-bold text-center mt-4">Log in to your account</h2>
        <p className="text-center mt-4">Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit} className="mt-8 sm:px-8" data-members-form="signin">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            />
          </div>
          <div className='flex flex-col sm:flex-row relative'>
            <div className=" items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <label htmlFor="remember" >Remember for 30 days</label>
            </div>
            <div className='sm:absolute justify-end right-0 items-end'>
              <a href="/forgot-password" className="block text-center text-blue-600 mb-1">Forgot password?</a>
            </div>

          </div>

          <button type="submit" className="w-full bg-[#475467] text-white font-bold py-2 rounded-md hover:bg-[#77859b]" onClick={onLogin}>Sign in</button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 font-semibold">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <GoogleOAuthProvider clientId="1024473496953-0qd867cnd2o7cj3e4njaes6k575n0r11.apps.googleusercontent.com">
            <div className='mt-4 w-full'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const token = credentialResponse.credential;
                  // Check if the token is defined
                  if (token) {
                    const decoded = jwtDecode<MyJwtPayload>(token);
                    setEmail(decoded.email);
                    onLogin();
                  } else {
                    toast.error(`Token is undefined`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce
                    });
                  }
                }}
                onError={() => {
                  toast.error(`Login Failed`, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      transition: Bounce
                  });
                }}
              />
            </div>
          </GoogleOAuthProvider>
          <p className="text-center mt-5">
            Don't have an account? <Link href="/signup" className="text-blue-600">Sign up</Link>
          </p>
        </form>
        {/* {error && <p>error</p>} */}
      </div>
      <div className='bg-[#F2FAEC] mt-4 sm:w-3/4 rounded-2xl h-[700px] sm:ml-10'>

      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginForm;

function setError(arg0: string) {
  throw new Error('Function not implemented.');
}

