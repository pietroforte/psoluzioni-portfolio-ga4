
const cds = require('@sap/cds');
const { INSERT } = cds.ql; 
const axios = require('axios');

module.exports = cds.service.impl(function () {
  console.log('🔍 Available entities:', Object.keys(this.entities));

  const { Purchases, ConsentLogs, AuditLogs, Customers, CampaignEvents } = this.entities;

  const logEvent = async (tx, type, payload) => {
    await tx.run(INSERT.into(AuditLogs).entries([{
      eventType: type,
      entity: 'Purchase',
      details: JSON.stringify(payload),
      timestamp: new Date().toISOString()
    }]));
  };

  this.after('CREATE', Purchases, async (data, req) => {
    try {
      await axios.post('http://localhost:8888/mock-emarsys', {
        event: 'purchase',
        data
      });
    } catch (err) {
      console.error('❌ Webhook failed:', err.message);
    }
    await logEvent(cds.transaction(req), 'purchase', data);
  });

  this.after('CREATE', ConsentLogs, async (data, req) => {
    await logEvent(cds.transaction(req), 'consent', data);
  });

  this.on('triggerEmarsys', async (req) => {
    const { contactID, eventCode } = req.data;

    console.log("📥 Received triggerEmarsys call with:");
    console.log("   - contactID:", contactID);
    console.log("   - eventCode:", eventCode);

    const contact = await SELECT.one.from(Customers).where({ ID: contactID });
    if (!contact) {
      console.error("❌ No matching contact found for ID:", contactID);
      return { success: false, status: "Contact not found" };
    }

    const event = await SELECT.one.from(CampaignEvents).where({ eventCode });
    if (!event) {
      console.error("❌ No matching campaign event found for eventCode:", eventCode);
      return { success: false, status: "Campaign event not found" };
    }

    console.log("✅ Found contact:", contact.firstName);
    console.log("✅ Found campaign event:", event.name);

    const emailHTML = `
      <h2>Hello ${contact.firstName},</h2>
      <p>We miss you! Come back and enjoy 20% off your next order.</p>
      <p>Use code <strong>WELCOME20</strong> at checkout.</p>
      <p>Let me show you what a real-time campaign trigger can do — powered by SAP Emarsys and CAP.</p>

    `;

    await INSERT.into(AuditLogs).entries([{
      timestamp: new Date().toISOString(),
      eventType: 'triggerEmarsys',
      entity: 'CampaignEvent',
      details: JSON.stringify({ contactID, eventCode, preview: emailHTML })
    }]);

    return {
      success: true,
      status: "Mock email sent successfully",
      emailPreview: emailHTML
    };
  });
});
