// pages/api/order.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('📦 New Order Received:', req.body);

    // Simulate trigger to Emarsys, log to DB, or AI action
    return res.status(200).json({ message: 'Order received successfully.' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
