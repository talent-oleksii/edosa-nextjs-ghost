import ghost from '@material-tailwind/react/theme/components/timeline/timelineIconColors/ghost';
import { redirect } from 'next/dist/server/api-utils';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export async function GET(request) {
  try {
    // const { token } = await request.json();
    const url = new URL(request.url);
    const token = url.searchParams.get('token');

    // Verify the token with Ghost CMS (this example assumes Ghost URL is in an environment variable)
    const ghostUrl = process.env.NEXT_PUBLIC_GHOST_API_URL;
    const response = await fetch(`${ghostUrl}/members/?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Ghost ${token}`,
        // 'redirect': 'manual'
      },
      redirect: 'manual'
    });

    if (response.status == 301 || response.status == 302) {
      // const data = await response.text();
      const session = response.headers.get('Set-Cookie');

      // const res = NextResponse.json({ message: 'Verification successful' + session }, {status: 302}, {redirect: '/signup_success'});
      const res = NextResponse.redirect(`${PUBLIC_DOMAIN}/`, 302);
      if (session) {
        const cookieOptions = 'Path=/; HttpOnly; Secure; SameSite=None'; // Ensure Secure and SameSite=None for cross-origin
        res.headers.set('Set-Cookie', `${session}; ${cookieOptions}`);
        // res.headers.set('Set-Cookie', session.replace('samesite=lax; secure; httponly', '').replace('samesite=lax; secure; httponly', ''));
      }
      return res; // Return the response with Set-Cookie header
    } else if (response.ok) {
      return NextResponse.json({ message: 'OK'})
    } else {
      return NextResponse.json({ message: 'Verification failed' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred', error: error.message }, { status: 500 });
  }
}
