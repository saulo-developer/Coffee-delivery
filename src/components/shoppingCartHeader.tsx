
import { useCart } from '../hooks/useCart';

const ShoppingCartHeader = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header>
      <h1>Minha Cafeteria</h1>
      <p>Total de itens no carrinho: {totalItems}</p>
    </header>
  );
};

export default ShoppingCartHeader;