import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MobileProvider } from './Contexts/MobileProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MobileProvider>
      <App />
    </MobileProvider>
  </React.StrictMode>
);
