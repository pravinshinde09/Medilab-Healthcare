import './App.css';
import PageRoute from './routes/PageRoute';
import { CartProvider } from './context/cart';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <PageRoute />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
