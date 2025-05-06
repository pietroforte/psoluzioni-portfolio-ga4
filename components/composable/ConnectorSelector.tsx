import React from 'react';

interface Props {
  selected: string;
  onChange: (source: string) => void;
}

const platforms = ['All', 'SAP', 'Shopify', 'Mirakl', 'SFCC', 'Adobe', 'Oracle'];

export default function ConnectorSelector({ selected, onChange }: Props) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <label style={{ fontWeight: 'bold', marginRight: '1rem' }}>Filter by Source:</label>
      {platforms.map(source => (
        <button
          key={source}
          style={{
            marginRight: '0.5rem',
            backgroundColor: selected === source ? '#0070f3' : '#eee',
            color: selected === source ? 'white' : '#333',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer'
          }}
          onClick={() => onChange(source)}
        >
          {source}
        </button>
      ))}
    </div>
  );
}
