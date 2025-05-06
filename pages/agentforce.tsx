import { useState } from 'react';

export default function AgentForcePage() {
  const [note, setNote] = useState('');
  const [sentiment, setSentiment] = useState('');

  const fetchSentiment = async () => {
    if (!note) return;
    const res = await fetch('/api/ai/sentiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: note })
    });
    const data = await res.json();
    setSentiment(`🧠 ${data.summary} (Sentiment: ${data.sentiment})`);
  };

  return (
    <main style={{ fontFamily: 'Segoe UI, sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <img src="/salesforce-agentforce.png" alt="AgentForce Logo" style={{ height: '48px', marginBottom: '1rem' }} />
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🧑‍💼 AgentForce AI Interaction</h1>

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
    </main>
  );
}
