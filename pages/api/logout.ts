// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer();

export const config = {
    api: {
        bodyParser: false,
    },
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
    }
    
    // remove cookies from request
    const cookies = new Cookies(req, res)
    cookies.set('access_token');
    res.status(200).json({ message: 'success' }); 
}

