import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

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
        </div>
      </div>
    </Layout>
  );
}
