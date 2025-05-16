const axios = require('axios');
require('dotenv').config({ path: '.env.local' });

const {
  SALESFORCE_USERNAME,
  SALESFORCE_PASSWORD,
  SALESFORCE_CLIENT_ID,
  SALESFORCE_CLIENT_SECRET,
  SALESFORCE_LOGIN_URL
} = process.env;

async function verify() {
  try {
    console.log("🔐 Authenticating with Salesforce...");

    const response = await axios.post(`${SALESFORCE_LOGIN_URL}/services/oauth2/token`, null, {
      params: {
        grant_type: 'password',
        client_id: SALESFORCE_CLIENT_ID,
        client_secret: SALESFORCE_CLIENT_SECRET,
        username: SALESFORCE_USERNAME,
        password: SALESFORCE_PASSWORD
      }
    });

    console.log("✅ Connected successfully!");
    console.log("Access Token:", response.data.access_token);
    console.log("Instance URL:", response.data.instance_url);

  } catch (error) {
    console.error("❌ Authentication failed.");
    console.error("Details:", error.response?.data || error.message);
  }
}

verify();
