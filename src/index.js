import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ApiFile from './Components/Api/ApiFile';
import { AuthProvider } from './Context/Auth';
import { CartProvider } from './Context/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiFile>
      <CartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </ApiFile>

  </React.StrictMode>
);


