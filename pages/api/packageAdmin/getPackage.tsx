import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const filePath = path.join(process.cwd(), '/pages/api/packageAdmin/packageAdmin.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data: any[] = JSON.parse(jsonData);

    res.json(data);
}
