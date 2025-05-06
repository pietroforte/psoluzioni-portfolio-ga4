// components/TechStackGrid.tsx

const techGroups = [
  {
    title: '🧩 Frontend / UI',
    folder: 'frontend',
    logos: ['nextjs', 'react', 'vercel']
  },
  {
    title: '⚙️ Middleware & API',
    folder: 'middleware',
    logos: ['java', 'springboot', 'nodejs', 'python', 'graphql', 'postman']
  },
  {
    title: '🛒 Commerce Engines',
    folder: 'commerce',
    logos: ['sap-commerce', 'salesforce-commerce', 'adobe-commerce', 'oracle-commerce', 'shopify', 'mirakl']
  },
  {
    title: '📣 Campaigns & CRM',
    folder: 'campaigns',
    logos: ['sap-emarsys', 'hubspot', 'mailchimp']
  },
  {
    title: '🤖 AI & Machine Learning',
    folder: 'ai',
    logos: ['openai', 'scikit-learn', 'pinecone']
  },
  {
    title: '👤 Identity & Customer Data',
    folder: 'customer-data',
    logos: ['sap-cdc', 'salesforce', 'segment']
  },
  {
    title: '☁️ Cloud & DevOps',
    folder: 'cloud',
    logos: ['sap-btp', 'aws', 'docker', 'github']
  }
];

export default function TechStackGrid() {
  return (
    <div className="mt-12 px-4">
      {techGroups.map((group) => (
        <div key={group.title} className="mb-8">
          <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
          <div className="flex flex-wrap gap-4">
            {group.logos.map((logo) => (
              <div
                key={logo}
                className="w-16 h-16 flex items-center justify-center rounded bg-white shadow p-2 border"
                title={logo.replace(/-/g, ' ')}
              >
                <img
                  src={`/logos/${group.folder}/${logo}.png`}
                  alt={logo}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
