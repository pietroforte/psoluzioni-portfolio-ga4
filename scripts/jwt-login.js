// scripts/jwt-login.js

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const jwt = require('jsonwebtoken');
const axios = require('axios');

// Load env vars
const {
  SALESFORCE_CLIENT_ID,
  SALESFORCE_USERNAME,
  SALESFORCE_LOGIN_URL
} = process.env;

// Log to verify environment variables loaded
console.log('🔍 Loaded from .env.local:');
console.log('CLIENT_ID:', SALESFORCE_CLIENT_ID);
console.log('USERNAME:', SALESFORCE_USERNAME);
console.log('LOGIN_URL:', SALESFORCE_LOGIN_URL);

// Read your private key from the jwt-auth folder
const privateKey = fs.readFileSync('./jwt-auth/server.key', 'utf8');

// 1. Generate JWT
const jwtToken = jwt.sign(
  {
    iss: SALESFORCE_CLIENT_ID,
    sub: SALESFORCE_USERNAME,
    aud: SALESFORCE_LOGIN_URL,
    exp: Math.floor(Date.now() / 1000) + 180 // expires in 3 mins
  },
  privateKey,
  { algorithm: 'RS256' }
);

// 2. Exchange JWT for access token
async function getAccessToken() {
  try {
    const response = await axios.post(`${SALESFORCE_LOGIN_URL}/services/oauth2/token`, null, {
      params: {
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwtToken
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    console.log('✅ Access Token:', response.data.access_token);
    console.log('🔗 Instance URL:', response.data.instance_url);
  } catch (error) {
    console.error('❌ JWT Login Failed:', error.response?.data || error.message);
  }
}

getAccessToken();
