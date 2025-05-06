import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function EmarsysPage() {
  const [customerID, setCustomerID] = useState('');
  const [campaign, setCampaign] = useState('WELCOME');
  const [source, setSource] = useState('SAP Commerce Cloud');
  const [response, setResponse] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');

  useEffect(() => {
    if (!customerID) return;
    fetch('/api/ai/recommendation?contactID=' + customerID)
      .then(res => res.json())
      .then(data => setAiSuggestion(`${data.action} (${Math.round(data.confidence * 100)}%)`));
  }, [customerID]);

  const triggerCampaign = async () => {
    const res = await fetch('/api/trigger', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contactID: customerID, eventCode: campaign, source })
    });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <Layout title="Emarsys Demo | CX Suite">
      <main style={{ fontFamily: 'Segoe UI, sans-serif', padding: '2rem', maxWidth: '900px', margin: 'auto', backgroundColor: '#ffffff' }}>
        <img src="/emarsys-logo.png" alt="SAP Emarsys" style={{ height: '48px', marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎯 Emarsys Campaign Trigger</h1>

        <label style={{ display: 'block', marginTop: '1rem' }}>Select Customer
          <select value={customerID} onChange={e => setCustomerID(e.target.value)} style={{ width: '100%', marginTop: '0.25rem' }}>
            <option value="">-- Choose --</option>
            <option value="C001">Anna</option>
            <option value="C002">Lucas</option>
            <option value="C003">Sofia</option>
          </select>
        </label>

        <label style={{ display: 'block', marginTop: '1rem' }}>Lifecycle Campaign
          <select value={campaign} onChange={e => setCampaign(e.target.value)} style={{ width: '100%', marginTop: '0.25rem' }}>
            <option value="WELCOME">WELCOME</option>
            <option value="REACTIVATION">REACTIVATION</option>
            <option value="BIRTHDAY">BIRTHDAY</option>
          </select>
        </label>

        <label style={{ display: 'block', marginTop: '1rem' }}>Source System
          <select value={source} onChange={e => setSource(e.target.value)} style={{ width: '100%', marginTop: '0.25rem' }}>
            <option value="SAP Commerce Cloud">SAP Commerce Cloud</option>
            <option value="Salesforce B2B">Salesforce B2B</option>
            <option value="POS">POS</option>
          </select>
        </label>

        <button onClick={triggerCampaign} style={{ marginTop: '1rem', backgroundColor: '#490093', color: 'white', border: 'none', padding: '0.75rem 1.5rem', fontWeight: 'bold' }}>
          Trigger Campaign
        </button>

        <pre style={{ background: '#eef2ff', padding: '1rem', marginTop: '1rem', fontSize: '0.9rem' }}>{response}</pre>

        {aiSuggestion && <p style={{ marginTop: '1rem' }}>💡 AI Suggestion: <strong>{aiSuggestion}</strong></p>}
      </main>
    </Layout>
  );
}
