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
    <div className="mt-16 mb-24 px-6 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold mb-12 text-center">🔧 Technologies in Use</h2>
      <div className="space-y-12">
        {techGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">{group.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {group.logos.map((logo) => (
                <div
                  key={logo}
                  className="h-20 bg-white rounded-md shadow flex items-center justify-center border border-gray-200 hover:shadow-md transition"
                  title={logo.replace(/-/g, ' ')}
                >
                  <img
                    src={`/logos/${group.folder}/${logo}.png`}
                    alt={logo}
                    className="h-10 max-w-[70%] object-contain"
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
