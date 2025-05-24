
import { useCart } from '../hooks/useCart';

const products = [
  { id: 1, name: 'Espresso Tradicional', price: 4.50, image: '...' },
  { id: 2, name: 'Cappuccino Cremoso', price: 6.00, image: '...' },
  { id: 3, name: 'Macchiato Avelã', price: 5.50, image: '...' },
  // ... mais produtos
];

const ProductList = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Nossos Cafés</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
            <span>{product.name} - R$ {product.price.toFixed(2)}</span>
            <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;