import React from 'react';
import ProductList from './components/ProductList';
import ShoppingCartHeader from './components/ShoppingCartHeader';
import CartDetails from './components/CartDetails';
import AddressForm from './components/AddressForm';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <div>
        <ShoppingCartHeader />
        <ProductList />
        <CartDetails />
        <AddressForm />
      </div>
    </CartProvider>
  );
}

export default App;