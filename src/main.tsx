import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Redirect from Netlify to Vercel domain
if (window.location.hostname === 'dsc123.netlify.app') {
  window.location.replace('https://dsc123.vercel.app' + window.location.pathname + window.location.search + window.location.hash);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);