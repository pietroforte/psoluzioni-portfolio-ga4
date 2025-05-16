import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const privateKey = fs.readFileSync(path.resolve('./jwt-auth/server.key'), 'utf8');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { summary } = req.body;

  const jwtToken = jwt.sign(
    {
      iss: process.env.SALESFORCE_CLIENT_ID,
      sub: process.env.SALESFORCE_USERNAME,
      aud: process.env.SALESFORCE_LOGIN_URL,
      exp: Math.floor(Date.now() / 1000) + 180,
    },
    privateKey,
    { algorithm: 'RS256' }
  );

  try {
    const tokenRes = await axios.post(`${process.env.SALESFORCE_LOGIN_URL}/services/oauth2/token`, null, {
      params: {
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwtToken
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const { access_token, instance_url } = tokenRes.data;

    const caseRes = await axios.post(
      `${instance_url}/services/data/v59.0/sobjects/Case`,
      {
        Subject: 'Product Signal Alert',
        Description: summary || 'Customer signal detected as negative.',
        Origin: 'Web',
        Status: 'New',
        Priority: 'High'
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json({
      id: caseRes.data.id,
      url: `${instance_url}/${caseRes.data.id}`
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to create Salesforce case', details: error.response?.data || error.message });
  }
}
