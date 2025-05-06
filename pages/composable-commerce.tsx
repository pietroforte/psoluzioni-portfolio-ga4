import { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/composable/ProductCard';
import ConnectorSelector from '../components/composable/ConnectorSelector';
import { mockProducts, Product } from '../data/products';

export default function ComposableCommerce() {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedSource, setSelectedSource] = useState('All');

  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (!existing) {
      setCart([...cart, product]);
      localStorage.setItem('composable-cart', JSON.stringify([...cart, product]));
    }
  };

  const filteredProducts =
    selectedSource === 'All'
      ? mockProducts
      : mockProducts.filter((product) => product.source === selectedSource);

  return (
    <Layout title="Composable Commerce">
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Composable Commerce Simulator</h1>
        <p style={{ marginBottom: '1rem', maxWidth: 680 }}>
          This prototype demonstrates a vendor-agnostic commerce flow using a composable
          architecture. Each product is tagged by platform origin (e.g., SAP, Salesforce, Adobe,
          Oracle, Shopify, Mirakl).
        </p>

        <ConnectorSelector selected={selectedSource} onChange={setSelectedSource} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
          ))}
        </div>

        <div style={{ marginTop: '2rem', fontSize: '1rem', color: '#555' }}>
          Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}. Go to{' '}
          <a href="/composable-checkout" style={{ textDecoration: 'underline', color: '#0070f3' }}>
            checkout
          </a>
          .
        </div>
      </div>
    </Layout>
  );
}
