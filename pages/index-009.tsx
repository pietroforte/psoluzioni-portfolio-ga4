import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title="CX Demo Hub">
      <div className="max-w-screen-lg mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome to the CX Demo Hub
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Choose a demo environment to explore:
        </p>

        {/* Campaign Experiences */}
        <Section title="🎯 Campaign Experiences">
          <LinkCard href="/emarsys" label="🚀 Emarsys Only" bg="bg-blue-600" />
          <LinkCard href="/agentforce" label="🧠 AgentForce Only" bg="bg-pink-600" />
          <LinkCard href="/emarsys-agentforce" label="🔀 Unified Emarsys + AgentForce" bg="bg-cyan-700" />
        </Section>

        {/* Sales Simulations */}
        <Section title="💵 Sales + Deal Simulations">
          <LinkCard href="/hubspot-agentic" label="🤖 HubSpot Smart Deals (Agentic AI)" bg="bg-purple-700" />
        </Section>

        {/* Composable Commerce */}
        <Section title="🧩 Composable Commerce">
          <LinkCard href="/composable-commerce" label="🛒 Composable Commerce + Loyalty" bg="bg-orange-400" />
        </Section>

        {/* Architecture Overview */}
        <Section title="📐 Architecture Overview – Headless CX & AI">
          <div className="rounded-xl bg-gray-100 p-6 shadow-sm text-center">
            <Image
              src="/architecture-diagram.png"
              alt="Composable Architecture Diagram"
              width={800}
              height={600}
              className="mx-auto rounded"
            />
            <p className="text-center text-xs text-gray-500 mt-4">
              Portfolio by Ricardo Pietroforte – CX | AI | Headless Commerce
            </p>
          </div>
        </Section>

        {/* Composable Principles */}
        <section className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center">🧱 Composable Architecture Principles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white p-6 rounded-xl shadow">
            {[
              ['Headless', 'Frontend decoupled from backend APIs'],
              ['Modular', 'Replaceable campaign, AI, or commerce engines'],
              ['Interoperable', 'Multiple vendors working via APIs'],
              ['Extendable', 'Spring Boot + Node + Python working together'],
              ['Cloud-native', 'Serverless UI + containerized services'],
              ['Event-driven', 'Triggers from checkout, sentiment, lifecycle'],
              ['API-first', 'REST, OCC, webhooks, middleware logic']
            ].map(([title, description]) => (
              <div key={title} className="p-2">
                <h4 className="font-bold text-blue-600 mb-2">{title}</h4>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Grid */}
        <Section title="🛠 Technologies in Use">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <Logo src="/logos/frontend/nextjs.png" alt="Next.js" />
            <Logo src="/logos/frontend/react.png" alt="React" />
            <Logo src="/logos/frontend/vercel.png" alt="Vercel" />
            <Logo src="/logos/middleware/java.png" alt="Java" />
            <Logo src="/logos/middleware/springboot.png" alt="Spring Boot" />
            <Logo src="/logos/middleware/nodejs.png" alt="Node.js" />
            <Logo src="/logos/middleware/python.png" alt="Python" />
            <Logo src="/logos/middleware/graphql.png" alt="GraphQL" />
            <Logo src="/logos/commerce/sap-commerce.png" alt="SAP Commerce" />
            <Logo src="/logos/commerce/salesforce-commerce.png" alt="Salesforce Commerce" />
            <Logo src="/logos/commerce/adobe-commerce.png" alt="Adobe Commerce" />
            <Logo src="/logos/commerce/oracle-commerce.png" alt="Oracle Commerce" />
            <Logo src="/logos/commerce/shopify.png" alt="Shopify" />
            <Logo src="/logos/commerce/mirakl.png" alt="Mirakl" />
            <Logo src="/logos/campaigns/sap-emarsys.png" alt="SAP Emarsys" />
            <Logo src="/logos/campaigns/hubspot.png" alt="HubSpot" />
            <Logo src="/logos/campaigns/mailchimp.png" alt="Mailchimp" />
            <Logo src="/logos/ai/openai.png" alt="OpenAI" />
            <Logo src="/logos/ai/scikit-learn.png" alt="Scikit-learn" />
            <Logo src="/logos/ai/pinecone.png" alt="Pinecone" />
            <Logo src="/logos/customer-data/sap-cdc.png" alt="SAP CDC" />
            <Logo src="/logos/customer-data/salesforce.png" alt="Salesforce" />
            <Logo src="/logos/customer-data/segment.png" alt="Segment" />
            <Logo src="/logos/cloud/aws.png" alt="AWS" />
            <Logo src="/logos/cloud/sap-btp.png" alt="SAP BTP" />
            <Logo src="/logos/dev/github.png" alt="GitHub" />
            <Logo src="/logos/cloud/docker.png" alt="Docker" />
          </div>
        </Section>
      </div>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-1">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function LinkCard({ href, label, bg }: { href: string; label: string; bg: string }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`block ${bg} text-white font-semibold py-3 px-4 rounded-xl shadow-sm text-center hover:opacity-90 transition`}
      >
        {label}
      </a>
    </Link>
  );
}

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center bg-white p-4 rounded-xl shadow border">
      <Image src={src} alt={alt} width={80} height={80} />
    </div>
  );
}
