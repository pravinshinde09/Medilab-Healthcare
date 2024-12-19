import logo from './logo.svg';
import './App.css';
// import { useLocation } from "react-router-dom";
import PageRoute from './routes/PageRoute';
import { CartProvider } from './context/cart';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // const { pathname } = useLocation();
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
