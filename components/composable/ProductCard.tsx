import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
      <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p style={{ fontSize: '0.85rem', color: '#888' }}>Source: {product.source}</p>
      <button
        style={{
          marginTop: '0.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
