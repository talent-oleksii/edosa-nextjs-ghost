import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


const GHOST_API_URL = "http://localhost:2368"; //process.env.GHOST_API_URL; // e.g., http://your-ghost-url/ghost/api/v3/admin/
const GHOST_API_KEY = "b33c063de2ed7799ce7a4202c1"; //process.env.GHOST_API_KEY; // Your Ghost Admin API Key

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const response = await axios.post(`${GHOST_API_URL}/api/v3/admin/authentication/token`, {
        grant_type: 'password',
        username: email,
        password: password,
      }, {
        headers: {
          'Authorization': `Ghost ${GHOST_API_KEY}`,
        },
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
