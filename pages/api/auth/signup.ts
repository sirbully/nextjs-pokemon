import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, emailAddress } = req.body;
  if (req.method === 'POST') {
    res.status(201).json({ firstName, lastName, emailAddress });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
