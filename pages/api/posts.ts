// pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`http://localhost:2368/posts`, {
      headers: {
        'Authorization': `Ghost b33c063de2ed7799ce7a4202c1`,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
}
