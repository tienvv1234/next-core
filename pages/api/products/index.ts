// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any,
  pagination: any
}| { name: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method !== 'GET') {
        res.status(405).json({ name: 'Method Not Allowed' })
    }

    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1');
    const data = await response.json();
    res.status(200).json(data)
}

// Proxy server --> http-proxy