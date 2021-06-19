import type { NextApiRequest, NextApiResponse } from 'next';
import { IUser, users } from './shared';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { creds } = req.query;
  let found: IUser;

  if (req.method === 'GET') {
    found = users.find(
      user => user.emailAddress === creds[0] && user.password === creds[1],
    );
  } else {
    console.error('Invalid HTTP method!');
    res.status(405).json({ message: 'Cannot process that request' });
  }

  if (found) res.status(200).json({ user: found });
  else res.status(400).json({ message: 'User does not exist' });
}
