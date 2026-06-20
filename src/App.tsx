import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import DeliveryPage from './pages/DeliveryPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import CartDrawer from './components/order/CartDrawer';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
          </Routes>
          <CartDrawer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
