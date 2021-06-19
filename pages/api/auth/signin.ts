import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { emailAddress, password } = req.body;
  let found: boolean;

  if (req.method === 'POST') {
    found = emailAddress === 'test@test.io' && password === '1234';
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (found) res.status(200).json({ message: 'User found' });
  else res.status(404).json({ message: 'User does not exist' });
}
