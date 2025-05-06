import { useEffect, useState } from 'react';

export default function EmarsysAgentForce() {
  const [customerID, setCustomerID] = useState('');
  const [campaign, setCampaign] = useState('WELCOME');
  const [source, setSource] = useState('SAP Commerce Cloud');
  const [note, setNote] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [response, setResponse] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [wasCampaignSuggested, setWasCampaignSuggested] = useState(false);

  const fetchAI = async () => {
    if (!customerID) return;
    const res = await fetch('/api/ai/recommendation?contactID=' + customerID);
    const data = await res.json();
    setAiSuggestion(`${data.action} (${Math.round(data.confidence * 100)}%)`);
  };

  const fetchSentiment = async () => {
    if (!note) return;
    const res = await fetch('/api/ai/sentiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: note })
    });
    const data = await res.json();
    setSentiment(`🧠 ${data.summary} (Sentiment: ${data.sentiment})`);

    if (data.suggestedCampaign) {
      setCampaign(data.suggestedCampaign);
      setWasCampaignSuggested(true);
    }
  };

  const triggerCampaign = async () => {
    const res = await fetch('/api/trigger', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contactID: customerID, eventCode: campaign, source })
    });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  useEffect(() => { fetchAI(); }, [customerID]);

  return (
    <main style={{ fontFamily: 'Segoe UI, sans-serif', padding: '2rem', maxWidth: '950px', margin: 'auto', backgroundColor: '#f9f9fb' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <img src="/emarsys-logo.png" alt="SAP Emarsys" style={{ height: '42px' }} />
          <img src="/salesforce-agentforce.png" alt="Salesforce Agentforce" style={{ height: '44px' }} />
        </div>
        <h1 style={{ fontSize: '1.5rem' }}>Unified CX Simulator</h1>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2>🧑‍💼 AgentForce AI Interaction</h2>

        <label style={{ display: 'block', marginTop: '1rem' }}>
          Choose Example
          <select
            onChange={e => setNote(e.target.value)}
            style={{ width: '100%', marginTop: '0.25rem' }}
          >
            <option value="">-- Choose Example --</option>
            <option value="Customer called in frustrated about billing issue. Wasn't aware of loyalty program.">Frustrated about billing</option>
            <option value="Asked about points balance and eligibility for welcome gift. Sounded excited.">Excited about loyalty gift</option>
            <option value="Said they received too many emails and want fewer messages.">Wants fewer emails</option>
          </select>
        </label>

        <textarea
          placeholder="Or type your own agent note here..."
          value={note}
          onChange={e => setNote(e.target.value)}
          rows={4}
          style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem', fontSize: '1rem' }}
        />

        <button onClick={fetchSentiment} style={{ marginTop: '0.5rem', backgroundColor: '#005fbf', color: 'white', padding: '0.5rem 1rem', border: 'none' }}>
          Analyze Sentiment
        </button>

        {sentiment && <p style={{ marginTop: '1rem', backgroundColor: '#e3f2fd', padding: '0.75rem' }}>{sentiment}</p>}
      </section>

      <section>
        <h2>🎯 Emarsys Campaign Trigger</h2>
        <label style={{ display: 'block', marginTop: '1rem' }}>Select Customer
          <select value={customerID} onChange={e => setCustomerID(e.target.value)} style={{ width: '100%', marginTop: '0.25rem' }}>
            <option value="">-- Choose --</option>
            <option value="C001">Anna</option>
            <option value="C002">Lucas</option>
            <option value="C003">Sofia</option>
          </select>
        </label>

        <label style={{ display: 'block', marginTop: '1rem' }}>Lifecycle Campaign
          <select
            value={campaign}
            onChange={e => {
              setCampaign(e.target.value);
              setWasCampaignSuggested(false);
            }}
            style={{
              width: '100%',
              marginTop: '0.25rem',
              border: wasCampaignSuggested ? '2px solid #00b894' : undefined,
              backgroundColor: wasCampaignSuggested ? '#e6fff4' : undefined
            }}
          >
            <option value="WELCOME">WELCOME</option>
            <option value="REACTIVATION">REACTIVATION</option>
            <option value="BIRTHDAY">BIRTHDAY</option>
          </select>
        </label>

        {wasCampaignSuggested && (
          <p style={{ color: '#009688', marginTop: '0.5rem' }}>
            📡 Campaign suggestion powered by AI Sentiment Analysis
          </p>
        )}

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
      </section>
    </main>
  );
}