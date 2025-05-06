import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Script from 'next/script';

export default function Home() {
  return (
    <Layout title="CX Demo Hub">
      <div className={styles.main}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Welcome to the CX Demo Hub
        </h1>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          Choose a demo environment to explore:
        </p>

        <div className={styles.ctas}>
          <Link href="/emarsys" legacyBehavior>
            <a className="primary">🚀 Emarsys Only</a>
          </Link>
          <Link href="/agentforce" legacyBehavior>
            <a className="primary">🧠 AgentForce Only</a>
          </Link>
          <Link href="/emarsys-agentforce" legacyBehavior>
            <a className="primary">🔀 Unified Emarsys + AgentForce</a>
          </Link>
          <Link href="/hubspot-agentic" legacyBehavior>
            <a className="secondary">🤖 HubSpot Smart Deals (Agentic AI)</a>
          </Link>
          <Link href="/composable-commerce" legacyBehavior>
            <a className="secondary">🛒 Composable Commerce (SAP, Salesforce, Adobe, Oracle)</a>
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
