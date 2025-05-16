import { useState } from 'react';
import Layout from '../components/Layout';

export default function ProductSignalSimulator() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [caseUrl, setCaseUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setCaseUrl(null);

    try {
      const res = await fetch('/api/ai/sentiment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      setResponse(data);

      if (data.sentiment === 'negative') {
        const caseRes = await fetch('/api/salesforce/create-case', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ summary: data.summary }),
        });

        if (caseRes.ok) {
          const caseData = await caseRes.json();
          setCaseUrl(caseData.url);
        } else {
          console.error('Salesforce case creation failed');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Product Signal Simulator">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🧠 Product Signal Simulator</h1>
        <p className="text-center text-gray-600 mb-8">
          Paste a customer message below to simulate a real-time AI signal classification. If sentiment is negative, a Salesforce Case will be created automatically.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste a customer message here..."
            rows={6}
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze Signal'}
          </button>
        </form>

        {response && (
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">AI Result</h3>
            <p><strong>Sentiment:</strong> {response.sentiment}</p>
            <p><strong>Customer Tier:</strong> {response.customerTier}</p>
            <p><strong>Summary:</strong> {response.summary}</p>
            {response.sentiment === 'negative' && (
              <p className="mt-4 text-green-700 font-semibold">
                ✅ A Salesforce Case was automatically created.
              </p>
            )}
            {caseUrl && (
              <p className="mt-2">
                🔗 <a href={caseUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View Case in Salesforce
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
