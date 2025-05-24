
import ProductList from './components/productList'
import ShoppingCartHeader from './components/shoppingCartHeader'
import CartDetails from './components/cartDetails';
import AddressForm from './components/addressFrom';
import { CartProvider } from './contexts/cardContext';

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