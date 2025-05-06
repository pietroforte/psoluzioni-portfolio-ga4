import Link from 'next/link';
import Layout from '../components/Layout';
import Script from 'next/script';

export default function Home() {
  return (
    <Layout title="CX Demo Hub">
      <div style={{ maxWidth: '700px', margin: 'auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Welcome to the CX Demo Hub
        </h1>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          Choose a demo environment to explore:
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '0.5rem' }}>
            🎯 Campaign Experiences
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/emarsys" legacyBehavior>
              <a style={linkStyle}>🚀 Emarsys Only</a>
            </Link>
            <Link href="/agentforce" legacyBehavior>
              <a style={linkStyle}>🧠 AgentForce Only</a>
            </Link>
            <Link href="/emarsys-agentforce" legacyBehavior>
              <a style={{ ...linkStyle, backgroundColor: '#009688' }}>
                🔀 Unified Emarsys + AgentForce
              </a>
            </Link>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '0.5rem' }}>
            🧩 Sales + Deal Simulations
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/hubspot-agentic" legacyBehavior>
              <a style={{ ...linkStyle, backgroundColor: '#6a1b9a' }}>
                🤖 HubSpot Smart Deals (Agentic AI)
              </a>
            </Link>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff7ed', padding: '1rem', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left', color: '#f57c00' }}>
            🛒 Composable Commerce
          </h3>
          <Link href="/composable-commerce" legacyBehavior>
            <a
              style={{
                display: 'block',
                backgroundColor: '#f57c00',
                color: 'white',
                padding: '0.8rem 1.5rem',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1rem',
                marginTop: '0.8rem',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              Composable Commerce + Loyalty
            </a>
          </Link>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <img
            src="/images/26b1c6eb-b5da-425e-8d30-8f7a18e82e92.png"
            alt="Composable Architecture Diagram"
            style={{ maxWidth: '100%', borderRadius: '12px', marginBottom: '1.5rem' }}
          />
          <p style={{ fontSize: '0.9rem', color: '#777' }}>
            Portfolio by Ricardo Pietroforte – CX | AI | Headless Commerce
          </p>
        </div>
      </div>

      {/* 🔵 Tawk.to Live Chat */}
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/YOUR_TAWK_ID_HERE/1hxyzabc'; // <-- replace with your actual ID
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `,
        }}
      />
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
