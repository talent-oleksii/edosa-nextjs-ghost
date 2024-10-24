import { NextApiRequest, NextApiResponse } from "next";

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const response = await fetch(`${API_URL}/members/api/session`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': req.headers.cookie || ''
    }
  });

  const result = await response.text();
  res.send(result);
  
}

