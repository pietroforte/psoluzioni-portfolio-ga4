import Link from 'next/link';
import Layout from '../components/Layout';
import TechStackGrid from '../components/TechStackGrid';

export default function Home() {
  return (
    <Layout title="CX Demo Hub">
      <div className="max-w-screen-xl mx-auto px-6">
        <section className="mb-16">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Welcome to the CX Demo Hub
          </h1>
          <p className="mb-8 text-center text-gray-600">
            Choose a demo environment to explore:
          </p>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">🎯 Campaign Experiences</h3>
            <div className="grid gap-4">
              <Link href="/emarsys" legacyBehavior>
                <a className="demo-link">🚀 Emarsys Only</a>
              </Link>
              <Link href="/agentforce" legacyBehavior>
                <a className="demo-link">🧠 AgentForce Only</a>
              </Link>
              <Link href="/emarsys-agentforce" legacyBehavior>
                <a className="demo-link bg-teal-600">🔀 Unified Emarsys + AgentForce</a>
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">🧩 Sales + Deal Simulations</h3>
            <div className="grid gap-4">
              <Link href="/hubspot-agentic" legacyBehavior>
                <a className="demo-link bg-purple-800">🤖 HubSpot Smart Deals (Agentic AI)</a>
              </Link>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl mb-12">
            <h3 className="text-xl font-semibold text-orange-700">🛒 Composable Commerce</h3>
            <Link href="/composable-commerce" legacyBehavior>
              <a className="demo-link bg-orange-600 mt-4">Composable Commerce + Loyalty</a>
            </Link>
          </div>
        </section>

        <section className="mt-16 mb-16">
          <h3 className="text-xl font-semibold mb-4">🧠 Architecture Overview – Headless CX & AI</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`
┌─────────────────────────────┐
│        FRONTEND UI          │
│  (Next.js on Vercel)        │
└─────────────────────────────┘
          │
 ┌────────┼────────┐
 ▼        ▼        ▼
🛒    🤝        📩
Commerce Agent  Campaign
(SAP, etc) AI    UI

          │
     ┌────┴────┐
     ▼         ▼
  🔁 REST     🧠 Python
  APIs        ML Layer

   │           │
┌──┼───────────┼────────────┐
│  ▼           ▼            ▼
│ Order     Sentiment    Prediction
│ Audit     Analysis      Badge

│
└──▶ Emarsys, SAP CDC, CAP Layer
    + Analytics (BI / Snowflake)
`}
          </pre>
        </section>

        <section className="mt-12 text-center">
          <img
            src="/images/26b1c6eb-b5da-425e-8d30-8f7a18e82e92.png"
            alt="Composable Architecture Diagram"
            className="mx-auto max-w-full rounded-xl mb-4"
          />
          <p className="text-sm text-gray-500">
            Portfolio by Ricardo Pietroforte – CX | AI | Headless Commerce
          </p>
        </section>

        <TechStackGrid />
      </div>
    </Layout>
  );
}

const linkStyle: React.CSSProperties = {
  backgroundColor: '#2f80ed',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  fontWeight: 'bold',
  textDecoration: 'none',
  display: 'block'
};
