import React from 'react';
import { useCart } from '../hooks/useCart';

const CartDetails = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  if (cartItems.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div>
      <h2>Detalhes do Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name} - R$ {item.price.toFixed(2)}</span>
            <div>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Valor Total: R$ {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default CartDetails;