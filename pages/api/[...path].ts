// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
}

// error API resolved without sending a response for /api/student, this may result in stalled requests.
// TO FIX THIS ISSUE 
// we need to wrap it to new promise
// once event proxyRes resolve
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve) => {
    // dont send cookies to the Api server
    req.headers.cookie = '';

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false, // do handle the response for us
    });

    // res.status(200).json({ name: 'John Doe' })
    proxy.once('proxyRes', () => {
      resolve(true);
    }); 
  })
}

