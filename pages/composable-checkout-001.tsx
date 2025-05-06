import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Product } from '../data/products';

export default function ComposableCheckout() {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate cart retrieval (could be from localStorage or global state in future)
    const storedCart = localStorage.getItem('composable-cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleSubmitOrder = async () => {
    // Later: POST to backend API (Node, Java, or Python)
    console.log('Submitting order:', cart);
    setOrderConfirmed(true);
  };

  return (
    <Layout title="Checkout">
      <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>🧾 Composable Checkout</h1>

        {!orderConfirmed ? (
          <>
            <p style={{ margin: '1rem 0' }}>
              You are about to place an order for <strong>{cart.length}</strong> item(s).
            </p>
            <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
              {cart.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  • {item.name} – ${item.price.toFixed(2)} ({item.source})
                </li>
              ))}
            </ul>

            <button
              onClick={handleSubmitOrder}
              style={{
                marginTop: '2rem',
                backgroundColor: '#28a745',
                color: 'white',
                padding: '0.75rem 1.5rem',
                fontWeight: 'bold',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              ✅ Confirm Order
            </button>
          </>
        ) : (
          <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#0070f3' }}>
            🎉 Order placed successfully! Emarsys campaign triggered.
          </p>
        )}
      </div>
    </Layout>
  );
}
