'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import error from 'next/error';
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/ghost', { email, password });
      // Handle successful authentication (store tokens, redirect, etc.)
      console.log('Success:', response.data);
    } catch (err) {
      setError('Authentication failed');
    }
  };

  return (
    <div className='flex flex-col sm:flex-row sm:row-span-2'>
      <div className="sm:w-2/5 mt-12 mr-8 p-6 rounded-lg bg-[#F9F9F9]">
        <h1 className="text-2xl font-bold text-orange-600 text-center mt-8">EDOSA ODARO</h1>
        <h2 className="text-3xl font-bold text-center mt-4">Log in to your account</h2>
        <p className="text-center mt-4">Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit} className="mt-8 sm:px-8">
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
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

          <button type="submit" className="w-full bg-[#475467] text-white font-bold py-2 rounded-md hover:bg-[#77859b]">Sign in</button>
          <GoogleOAuthProvider clientId="1024473496953-0qd867cnd2o7cj3e4njaes6k575n0r11.apps.googleusercontent.com">
            <div className='mt-4 w-full'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
          </GoogleOAuthProvider>
          <p className="text-center mt-4">
            Don't have an account? <a href="/signup" className="text-blue-600">Sign up</a>
          </p>
        </form>
        {error && <p>error</p>}
      </div>
      <div className='bg-[#F2FAEC] mt-4 sm:w-3/4 rounded-2xl h-[700px] sm:ml-10'>

      </div>
    </div>
  );
};

export default LoginForm;
function setError(arg0: string) {
  throw new Error('Function not implemented.');
}

