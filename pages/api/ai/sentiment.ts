import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { input } = req.body;

  try {
    const response = await fetch('https://fastapi-backend-5hbg.onrender.com/score-signal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(500).json({ error: 'FastAPI error', detail: errorText });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to reach FastAPI service', detail: err });
  }
}
