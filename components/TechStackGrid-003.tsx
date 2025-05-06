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
    <div className="mt-16 mb-20 px-4 max-w-screen-lg mx-auto">
      <h2 className="text-xl font-bold mb-8 text-center">🔧 Technologies in Use</h2>
      <div className="space-y-10">
        {techGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">{group.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {group.logos.map((logo) => (
                <div
                  key={logo}
                  className="w-full h-20 bg-white rounded shadow-sm flex items-center justify-center border border-gray-200 hover:shadow-md transition"
                  title={logo.replace(/-/g, ' ')}
                >
                  <img
                    src={`/logos/${group.folder}/${logo}.png`}
                    alt={logo}
                    className="max-h-14 max-w-[80%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
