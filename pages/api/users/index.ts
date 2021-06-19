import type { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import { users } from './shared';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, emailAddress, password } = req.body;
  if (req.method === 'POST') {
    users.push({
      id: nanoid(),
      firstName,
      lastName,
      emailAddress,
      password,
    });
  } else {
    console.error('Invalid HTTP method!');
    res.status(405).json({ message: 'Cannot process that request' });
  }
}
