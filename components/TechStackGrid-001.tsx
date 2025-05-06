import React from 'react';

type LogoGroup = {
  title: string;
  logos: { name: string; path: string }[];
};

const groups: LogoGroup[] = [
  {
    title: 'AI + Machine Learning',
    logos: [
      { name: 'OpenAI', path: 'ai/openai' },
      { name: 'Pinecone', path: 'ai/pinecone' },
      { name: 'Scikit-learn', path: 'ai/scikit-learn' },
    ]
  },
  {
    title: 'Campaign Automation',
    logos: [
      { name: 'HubSpot', path: 'campaigns/hubspot' },
      { name: 'Mailchimp', path: 'campaigns/mailchimp' },
      { name: 'SAP Emarsys', path: 'campaigns/sap-emarsys' },
    ]
  },
  {
    title: 'Commerce Platforms',
    logos: [
      { name: 'Adobe Commerce', path: 'commerce/adobe-commerce' },
      { name: 'SAP Commerce', path: 'commerce/sap-commerce' },
      { name: 'Salesforce Commerce', path: 'commerce/salesforce-commerce' },
      { name: 'Oracle Commerce', path: 'commerce/oracle-commerce' },
      { name: 'Mirakl', path: 'commerce/mirakl' },
      { name: 'Shopify', path: 'commerce/shopify' },
    ]
  },
  {
    title: 'Customer Data',
    logos: [
      { name: 'Salesforce', path: 'customer-data/salesforce' },
      { name: 'SAP CDC (Gigya)', path: 'customer-data/sap-cdc' },
      { name: 'Segment', path: 'customer-data/segment' },
    ]
  },
  {
    title: 'Cloud + DevOps',
    logos: [
      { name: 'AWS', path: 'cloud/aws' },
      { name: 'SAP BTP', path: 'cloud/sap-btp' },
      { name: 'Docker', path: 'cloud/docker' },
    ]
  },
  {
    title: 'Frontend + Hosting',
    logos: [
      { name: 'Next.js', path: 'frontend/nextjs' },
      { name: 'React', path: 'frontend/react' },
      { name: 'Vercel', path: 'frontend/vercel' },
    ]
  },
  {
    title: 'Middleware & Services',
    logos: [
      { name: 'GraphQL', path: 'middleware/graphql' },
      { name: 'Java', path: 'middleware/java' },
      { name: 'Node.js', path: 'middleware/nodejs' },
      { name: 'Python', path: 'middleware/python' },
      { name: 'Spring Boot', path: 'middleware/springboot' },
    ]
  },
  {
    title: 'Dev Tools',
    logos: [
      { name: 'GitHub', path: 'dev/github' },
      { name: 'Jest', path: 'dev/jest' },
      { name: 'Postman', path: 'dev/postman' },
    ]
  },
  {
    title: 'Brand',
    logos: [
      { name: 'Psoluzioni', path: 'psoluzioni' },
    ]
  }
];

export default function TechStackGrid() {
  return (
    <section style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Our Technology Stack
      </h2>

      {groups.map((group) => (
        <div key={group.title} style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>
            {group.title}
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 140px))',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 1rem'
            }}
          >
            {group.logos.map((logo) => (
              <div
                key={logo.name}
                style={{
                  width: '100%',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
              >
                <img
                  src={`/logos/${logo.path}.png`}
                  alt={logo.name}
                  title={logo.name}
                  style={{
                    maxWidth: '80%',
                    maxHeight: '60px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
