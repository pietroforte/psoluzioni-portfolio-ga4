import { useState } from 'react';
import DealCard from '../components/DealCard';
import TechShowcaseBanner from '../components/TechShowcaseBanner';
import mockDeals from '../data/mockDeals.json';
import type { Deal, Suggestion } from '../types';
import { trackTokens } from '../lib/aiBudgetTracker';

interface SuggestionWithTokens extends Suggestion {
  tokensUsed?: number;
}

export default function HubspotAgenticPage() {
  const [suggestion, setSuggestion] = useState<SuggestionWithTokens | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [remainingBudget, setRemainingBudget] = useState<number>(5.0);

  const handleSuggest = async (deal: Deal) => {
    setLoading(true);
    const res = await fetch('/api/suggest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deal }),
    });
    const data = await res.json();

    if (data.tokensUsed !== undefined) {
      const budget = trackTokens(data.tokensUsed);
      setRemainingBudget(budget.remainingDollars);
      if (!budget.allow) {
        alert("🚫 Budget limit reached ($5). AI suggestions are now disabled.");
        setLoading(false);
        return;
      }
    }

    setSuggestion({ id: deal.id, ...data });
    setLoading(false);
  };

  const estimateCost = (tokens: number): string => {
    const cost = (tokens / 1000) * 0.0025;
    return `$${cost.toFixed(4)}`;
  };

  return (
    <div style={{ backgroundColor: '#F5F8FA', minHeight: '100vh', padding: '2rem' }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        borderBottom: '2px solid #D1D6DC',
        paddingBottom: '1rem'
      }}>
        <img src="/hubspot.svg" alt="HubSpot Logo" style={{ height: '40px' }} />
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#33475B' }}>
          Smart Deals – Agentic AI Prototype
        </h1>
        <span style={{ marginLeft: 'auto', fontSize: '0.9rem', color: '#666' }}>
          💵 Remaining Budget: ${remainingBudget.toFixed(2)}
        </span>
      </header>

      {(mockDeals as Deal[]).map((deal) => (
        <div key={deal.id} style={{ backgroundColor: '#ffffff', border: '1px solid #D1D6DC', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.25rem', color: '#33475B', marginBottom: '0.5rem' }}>{deal.title}</h2>
          <p><strong>📌 Company:</strong> {deal.company}</p>
          <p><strong>👤 Contact:</strong> {deal.contact}</p>
          <p><strong>🔄 Stage:</strong> {deal.stage}</p>
          <p><strong>💰 Value:</strong> ${deal.value}</p>
          <p><strong>📅 Last Contacted:</strong> {deal.lastContacted}</p>
          <p style={{ fontStyle: 'italic', color: '#555' }}>"{deal.notes}"</p>

          <button
            onClick={() => handleSuggest(deal)}
            style={{
              marginTop: '1rem',
              backgroundColor: '#FF7A59',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            💡 Get AI Suggestion
          </button>

          {suggestion?.id === deal.id && (
            <div style={{ backgroundColor: '#E3F2FD', marginTop: '1rem', padding: '1rem', borderRadius: '4px', borderLeft: '4px solid #00A4BD' }}>
              <p><strong>💬 Next Best Action:</strong> {suggestion.nextBestAction}</p>
              <p><strong>📧 Email Line:</strong> {suggestion.emailLine}</p>
              {suggestion.tokensUsed !== undefined && (
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#555' }}>
                  🧠 Tokens used: {suggestion.tokensUsed} &nbsp; • &nbsp;
                  💲 Estimated Cost: {estimateCost(suggestion.tokensUsed)}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {loading && <p style={{ marginTop: '1rem', color: '#0070f3' }}>Getting AI suggestion...</p>}

      <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
        <h2 style={{ color: '#33475B', fontSize: '1.25rem', marginBottom: '1rem' }}>
          🧱 Agentic AI Architecture Overview
        </h2>
        <img
          src="/agentic%20AI%20architecture.png"
          alt="Agentic AI Architecture"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #ccc' }}
        />
      </div>
      <TechShowcaseBanner />
    </div>
  );
}
