// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer();

export const config = {
    api: {
        bodyParser: false,
    },
}

interface data {
    message: string
}

// error API resolved without sending a response for /api/student, this may result in stalled requests.
// TO FIX THIS ISSUE 
// we need to wrap it to new promise
// once event proxyRes resolve
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<data>
) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
    }
    return new Promise((resolve) => {
        // dont send cookies to the Api server
        req.headers.cookie = '';

        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body = '';
            proxyRes.on('data', (chunk) => {
                console.log('chunk', chunk);
                // body.push(chunk);
                // console.log('body', body);
                body += chunk;
            });

            proxyRes.on('end', () => {
                try {
                    // console.log('body', body);
                    // const content = Buffer.concat(body).toString();
                    // console.log('content', content);
                    const { accessToken, expiredAt } = JSON.parse(body);
                    console.log('accessToken', accessToken);
                    console.log('expiredAt', expiredAt);

                    const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
                    cookies.set('access_token', accessToken, {
                        httpOnly: true, // prevent client side , document.cookie se khong co cookie
                        sameSite: 'lax', // prevent CSRF attacks (https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#samesite-cookie-attribute)
                        // strict => only send cookie when request is from same site, not other site
                        // lax => send cookie when request is from same site or other site but only get request
                        // https://www.youtube.com/watch?v=aUF2QCEudPo
                        expires: new Date(expiredAt),
                    });

                    (res as NextApiResponse).status(200).json({ message: 'success' });
                } catch (error) {
                    (res as NextApiResponse).status(500).json({ message: 'something went wrong' });
                }
                resolve(true);
            });

            
            proxyRes.on('error', (error) => {
                console.log('error', error);
                (res as NextApiResponse).status(500).json({ message: 'something went wrong' });
                resolve(true);
            });
        }

        // res.status(200).json({ name: 'John Doe' })
        proxy.once('proxyRes', handleLoginResponse);

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true,
        });
    })
}

