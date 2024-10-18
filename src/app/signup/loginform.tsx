'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import error from 'next/error';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import jwt from 'jsonwebtoken';

interface MyJwtPayload extends JwtPayload {
  email: string;
}

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const ADMIN_API_KEY = process.env.NEXT_PUBLIC_GHOST_ADMIN_API_KEY;
const CONTENT_API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState(false);

  const accessToken = '64be7a99a7dd040001d08613:364e9784bcc9a4440432acb5837655adba0ed2dc84c2dfe0c5c69aff01fc1803';
  let [id, secret] = accessToken.split(':');

    const addMemberToGhost = async () => {
    try {
      const jwt = await createJwt();
      const response = await fetch(`${API_URL}/ghost/api/admin/members/`, {
        method: 'POST',
        headers: {
          'Authorization': `Ghost ${jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          members: [
            {
              email: '123@gmail.com',
            },
          ],
        }),
      });

      const data = await response.json();

      console.log("======== Statu - create Member ==========")
      console.log('Status:', response.status);
      console.log('Response:', JSON.stringify(data, null, 2));
      console.log("====================================");

      // alert(`Status: ${response.status}\nResponse: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  const loginMember = async () => {
    try {
      const jwt = await createJwt();
      const response = await fetch(`${API_URL}/ghost/api/admin/session/`, {
        method: 'POST',
        headers: {
          'Authorization': `Ghost ${jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'oleksiikaravanov@gmail.com',
          password: 'Prettyguyb!rth!s128'
        }),
      });

      const data = await response.json();

      console.log("======== Statu - Login Member ==========")
      console.log('Status:', response.status);
      console.log('Response:', JSON.stringify(data, null, 2));
      console.log("====================================");

      // alert(`Status: ${response.status}\nResponse: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const createJwt = async (): Promise<string> => {
    const header = btoa(
      JSON.stringify({
        alg: 'HS256',
        kid: id,
        typ: 'JWT',
      })
    ).replace(/=+$/, '');

    const now = Date.now();
    let expires = new Date(now);
    expires.setMinutes(expires.getMinutes() + 5);

    const payload = btoa(
      JSON.stringify({
        exp: Math.round(expires.getTime() / 1000),
        iat: Math.round(now / 1000),
        aud: '/admin/',
      })
    ).replace(/=+$/, '');

    const secretBinary = secret
      .match(/.{2}/g)
      ?.map(e =>
        parseInt(e[0], 16).toString(2).length === 4
          ? parseInt(e, 16) - 256
          : parseInt(e, 16)
      ) as number[];

    const toSign = new TextEncoder().encode(`${header}.${payload}`);
    const key = new Uint8Array(secretBinary);

    const importedKey = await crypto.subtle.importKey(
      'raw',
      key.buffer,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign']
    );

    const signature = await crypto.subtle.sign('HMAC', importedKey, toSign);
    const signatureArray = Array.from(new Uint8Array(signature));
    const signatureString = btoa(String.fromCharCode(...signatureArray)).replace(/=+$/, '');

    return `${header}.${payload}.${signatureString}`;
  };

  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const reqData = {
        members: [{ email: email }]
      };
      const response = await axios.post(`${API_URL}/ghost/api/admin/members/`, reqData);
      console.log(response)

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
                  const token = credentialResponse.credential;
                  // Check if the token is defined
                  if (token) {
                    const decoded = jwtDecode<MyJwtPayload>(token);
                    setEmail(decoded.email)
                  } else {
                    console.log('Token is undefined');
                  }
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
        <button onClick={addMemberToGhost}>addMemberToGhost</button>
        <hr />
        <button onClick={loginMember}>loginMember</button>
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

